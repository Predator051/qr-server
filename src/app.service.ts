import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Test';
  }

  getMyName(): string {
    return 'My name Leha \n';
  }
}
