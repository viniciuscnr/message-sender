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
export class ChannelSenderService {
  async sendChannelMessage(message: string) {
    const tenantId = '898e4078-23d6-433c-94aa-51bf928dca9d';
    const clientId = '9d77e24f-93ba-432e-a24c-8862fc4f0d4d';
    const userName = 'regulabot@omegaenergia.com.br';
    const password = 'reg_21#$*b0';
    const channelId = '19:431a631932c144df9a40426365dace24@thread.tacv2';
    const teamId = '60610aa3-cb20-4f5b-8967-b8486b4be0cf';

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

    const channelMessage = {
      body: {
        contentType: 'html',
        content: { message },
      },
    };

    const result = await client
      .api(`/teams/${teamId}/channels/${channelId}/messages`)
      .post(channelMessage)
      .catch(Error);

    console.log(result);
  }
}
