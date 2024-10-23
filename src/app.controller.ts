import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  constructor() { }
  @Get('healthz')
  healthz() {
    return 'I am healthy'
  }
}
