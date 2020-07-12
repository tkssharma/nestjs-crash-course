import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User} from './entity/user.entity';
import { Customer} from './entity/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, Customer],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}