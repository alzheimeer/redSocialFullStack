import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  onModuleInit() {
    this.logger.log(`Connection to MongoDB database established successfully`);
  }

  getHello(): string {
    return 'Hello social network!';
  }
}
