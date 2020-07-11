import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from "@nestjs/mongoose";
import { Model} from 'mongoose';
import { Customer } from "../interface/customer.interface";
import { CreateCustomerDTO } from "../dto/customer.dto";

@Injectable()
export class CustomerService {

    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }
   
    public async listCustomer(): Promise<Customer []> {
        return await this.customerModel.find({});
    }

    public async createCustomer(customer : CreateCustomerDTO): Promise<Customer> {
        const newCustomer = await this.customerModel(customer)
        return newCustomer.save();
    }

    public async updateCustomer(id, customerDto: Partial<CreateCustomerDTO>): Promise<Customer> {
        const updatedCustomer = await this.customerModel
        .findByIdAndUpdate(id, customerDto, { new: true });
       return updatedCustomer;

    }
    public async getCustomer(id: string): Promise<Customer []> {
        const customer = await this.customerModel.findById(id).exec();
        return customer;
    }

    public async removeCustomer(id: string): Promise<Customer []> {
        return await this.customerModel.findByIdAndRemove(id);
    }
}