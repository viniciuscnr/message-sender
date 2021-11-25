import { Controller, Post } from '@nestjs/common';
import { SenderService } from './sender.service';

@Controller()
export class SenderController {
  constructor(private senderService: SenderService) {}
  @Post()
  sendMessage() {
    return this.senderService.sendMessage();
  }
}
