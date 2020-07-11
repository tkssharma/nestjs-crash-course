import { Module } from '@nestjs/common';
import { TaskController } from './task-controller';
import { TaskService } from './task.service';
import { TaskStoreService } from './task-store.service';


@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, TaskStoreService],
})
export class TaskModule {}
