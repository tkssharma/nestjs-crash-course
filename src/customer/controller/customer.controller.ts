import { Controller, Get, Post, Res, HttpStatus, Param } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Response} from 'express';

@Controller('customers')
export class AppController {
  constructor(private readonly service: CustomerService) {}
  // /hello HTTP GET 
  @Get()
  async getAllCustomers(@Res() res: Response) {
    const data = await this.service.listCustomer();
    res.status(HttpStatus.OK).json(data);
  }

  @Get('/:customerid')
  async getCustomerById(@Res() res: Response, @Param('customerid') id: string) {
    const data = await this.service.getCustomer(id);
    res.status(HttpStatus.OK).json(data);
  }
}
