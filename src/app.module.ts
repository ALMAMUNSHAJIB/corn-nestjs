import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronService } from './cron/cron.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CronService],
})
export class AppModule {}
