import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrController } from './qr/qr.controller';
import { QrService } from './qr/qr.service';

@Module({
  imports: [],
  controllers: [AppController, QrController],
  providers: [AppService, QrService],
})
export class AppModule {}
