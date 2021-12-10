import { Controller, Post } from '@nestjs/common';
import { ChannelSenderService } from 'src/ChannelSender/channel-sender.service';

@Controller('/channel')
export class ChannelSenderController {
  constructor(private channelSenderService: ChannelSenderService) {}
  @Post()
  sendChannelMessage() {
    return this.channelSenderService.sendChannelMessage('oi');
  }
}
