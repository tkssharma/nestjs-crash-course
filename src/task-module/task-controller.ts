import { Controller, Get, Post, Res } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './interface/task';
import { Response} from 'express'; 
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAlltask(@Res() res: Response) {
      const data = this.taskService.getAllTasks();
      return res.status(200).send(data)
  }
}
