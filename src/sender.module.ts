import { Module } from '@nestjs/common';
import { ChatSenderService } from './ChatSender/chat-sender.service';
import { ChatSenderController } from './ChatSender/chat-sender.controller';
import { ChatSenderModule } from './ChatSender/chat-sender.module';
import { ChannelSenderService } from './ChannelSender/channel-sender.service';
import { ChannelSenderController } from './ChannelSender/channel-sender.controller';
import { ChannelSenderModule } from './ChannelSender/channel-sender.module';

@Module({
  imports: [ChatSenderModule, ChannelSenderModule],
  controllers: [ChatSenderController, ChannelSenderController],
  providers: [ChatSenderService, ChannelSenderService],
})
export class SenderModule {}
