import { Injectable } from '@nestjs/common';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const api = axios.create();

@Injectable()
export class SenderService {
  async sendMessage() {
    const token = await api
      .post(
        'https://login.microsoftonline.com/a456548f-23b6-4dfb-9546-7107de44b26b/oauth2/v2.0/token',
        'client_id=f492088b-db8f-44eb-809d-b2ed0960bf39&scope=https://graph.microsoft.com/.default&client_secret=PJZ7Q~w67BD6Sb0FfmBWwex6SnHUzbJCn0uu~&grant_type=client_credentials',
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      )
      .then((response) => {
        return response.data.access_token;
      });

    console.log(token);

    const chatMessage = {
      body: {
        content: 'Hello World',
      },
    };

    const finalMessage = JSON.stringify(chatMessage);

    api.post(
      `https://graph.microsoft.com/v1.0/teams/2c64f58b-be87-4bd1-8c93-d9c3cf24fcbb/channels/19%3a47710fcbfa3546399db70718c3a4392d%40thread.tacv2/messages`,
      finalMessage,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
}
