import { Injectable } from '@nestjs/common';
import {} from 'dotenv/config';
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import 'isomorphic-fetch';
import {
  UsernamePasswordCredentialOptions,
  AzureAuthorityHosts,
  UsernamePasswordCredential,
} from '@azure/identity';
@Injectable()
export class ChatSenderService {
  async sendChatMessage(message: string) {
    const tenantId = '898e4078-23d6-433c-94aa-51bf928dca9d';
    const clientId = '9d77e24f-93ba-432e-a24c-8862fc4f0d4d';
    const userName = 'regulabot@omegaenergia.com.br';
    const password = 'reg_21#$*b0';

    const options: UsernamePasswordCredentialOptions = {
      authorityHost: AzureAuthorityHosts.AzurePublicCloud,
    };

    const credential = new UsernamePasswordCredential(
      tenantId,
      clientId,
      userName,
      password,
      options,
    );

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      scopes: [`https://graph.microsoft.com/.default`],
    });

    const client = Client.initWithMiddleware({
      debugLogging: true,
      authProvider,
    });

    const chatMessage = {
      body: {
        contentType: 'html',
        content: { message },
      },
    };

    const result = await client
      .api(`/chats/19:78a9d66f3181477d89c28eed31322420@thread.v2/messages`)
      .post(chatMessage)
      .catch(Error);

    console.log(result);
  }
}
