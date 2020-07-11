import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/customer.schema';
import { CustomerController } from './controller/customer.controller';
import { CustomerService } from './services/customer.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
