import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../../database/entity/user.entity";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepo: Repository<User>) { }
   
    public async listUsers(): Promise<User []> {
        return await this.userRepo.find({})
    }

    public async createUsers(user : any): Promise<User> {
       try {
           const user = new User();
           user.email = 'test@gmail.com';
           return await this.userRepo.save(user);

       } catch(err){
           throw new InternalServerErrorException(err)
       }
    }

    public async getUsers(id: string): Promise<User> {
        const user = await this.userRepo.findOne(id);
        if(! user){
            throw new NotFoundException('user not found');
        }
        return user;
    }

    public async removeUsers(id: string): Promise<User> {
        const user = await this.userRepo.findOne(id)
        if(! user){
            throw new NotFoundException('user not found');
        }
        return await this.userRepo.remove(user);
    }
}