import { Controller, Post } from '@nestjs/common';
import { ChatSenderService } from './chat-sender.service';

@Controller('/chat')
export class ChatSenderController {
  constructor(private chatSenderService: ChatSenderService) {}
  @Post()
  sendChatMessage() {
    return this.chatSenderService.sendChatMessage('oi');
  }
}
