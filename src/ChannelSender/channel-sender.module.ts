import { Module } from '@nestjs/common';
import { ChannelSenderController } from './channel-sender.controller';
import { ChannelSenderService } from 'src/ChannelSender/channel-sender.service';

@Module({
  imports: [],
  controllers: [ChannelSenderController],
  providers: [ChannelSenderService],
})
export class ChannelSenderModule {}
