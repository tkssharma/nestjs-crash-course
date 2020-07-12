import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entity/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
