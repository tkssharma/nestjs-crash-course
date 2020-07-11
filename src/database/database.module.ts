import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://192.168.100.4:27017/test', { useNewUrlParser: true })
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
