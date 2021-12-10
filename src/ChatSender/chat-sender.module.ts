import { Module } from '@nestjs/common';
import { ChatSenderController } from './chat-sender.controller';
import { ChatSenderService } from './chat-sender.service';

@Module({
  imports: [],
  controllers: [ChatSenderController],
  providers: [ChatSenderService],
})
export class ChatSenderModule {}
