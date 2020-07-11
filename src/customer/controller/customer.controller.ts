import { Controller, Get, Post, Res, HttpStatus, Param, Delete, Put, Req, Query, Body } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Response} from 'express';
import { CreateCustomerDTO } from '../dto/customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly service: CustomerService) {}
  // /hello HTTP GET 

  @Get()
  async getAllCustomers(@Res() res: Response) {
    const data = await this.service.listCustomer();
    res.status(HttpStatus.OK).json(data);
  }

  @Post()
  async  createCustomers(@Res() res: Response, @Body() customerParam: CreateCustomerDTO) {
    const data = await this.service.createCustomer(customerParam);
    res.status(HttpStatus.OK).json(data);
  }

  @Get('customer/:customerId')
  async getCustomerById(@Res() res: Response, @Param('customerId') id: string) {
    const data = await this.service.getCustomer(id);
    res.status(HttpStatus.OK).json(data);
  }

  @Delete('/')
  async deleteCustomerById(@Res() res: Response, @Query('customerid') id: string) {
    const data = await this.service.getCustomer(id);
    res.status(HttpStatus.OK).json({
      message : 'customer dleeted successfully',
      data,
    });
  }

  @Put('/')
  async updateCustomerById(@Res() res: Response, @Body() customerParam: Partial <CreateCustomerDTO>, @Query('customerid') id: string) {
    const data = await this.service.updateCustomer(id, customerParam);
    res.status(HttpStatus.OK).json(data);
  }
}