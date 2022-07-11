import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  doc(): string {
    return 'Hello World!';
  }
}
