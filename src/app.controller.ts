import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // /hello HTTP GET 
  @Get()
  getHelloGet(): string {
    return this.appService.getHello();
  }

  @Post()
  getHelloPost(): string {
    return this.appService.getHello();
  }
}
