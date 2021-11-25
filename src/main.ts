import { NestFactory } from '@nestjs/core';
import { SenderModule } from './sender/sender.module';

async function bootstrap() {
  const app = await NestFactory.create(SenderModule);
  await app.listen(3000);
}
bootstrap();
