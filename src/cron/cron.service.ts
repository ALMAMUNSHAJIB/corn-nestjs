import { Injectable, OnModuleInit } from '@nestjs/common';
import { CronJob } from 'cron';
import { Logger } from '@nestjs/common';

@Injectable()
export class CronService implements OnModuleInit {
  private readonly logger = new Logger(CronService.name);

  onModuleInit() {
    this.initializeCrons();
  }

  private initializeCrons() {
    if (process.env.name !== 'cluster') {
      this.logger.log('Setting up cron jobs.');
      new CronJob(
        '00 * * * * *',                     // '00 */30 * * * *',
        () => {
          this.logger.log('Start cleaning files & processes');
          // Call your cleanup functions here
        },
        null,
        true,
      );
    } else {
      this.logger.log('Cron jobs are disabled');
    }
  }
}
