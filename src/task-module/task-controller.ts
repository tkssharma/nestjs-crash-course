import { Controller, Get, Post, Res, Req, Body, UsePipes, ValidationPipe, Param, Delete, InternalServerErrorException, HttpException, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './interface/task';
import { Response} from 'express'; 
import { TaskDto, TaskParamDto, QueryParamDto } from './dto/task.dto';
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAlltask(@Res() res: Response) {
      const data = await this.taskService.getAllTasks();
      return res.status(200).send(data)
  }

  @Get('/filter/data')
  @UsePipes(new ValidationPipe({ whitelist: false, transform: true}))
  async FilterTaskById(@Query() reqParam: QueryParamDto, @Res() res: Response) {
      console.log(reqParam.filter);
      const data = await this.taskService.filterTask(reqParam.filter);
      return res.status(200).send(data)
  }
  
  @Get('/:id')
  @UsePipes(new ValidationPipe())
  async getTaskById(@Param() reqParam: TaskParamDto) {
    return await this.taskService.getTask(reqParam.id);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe())
  async deleteTaskById(@Param() reqParam: TaskParamDto) {
      return await this.taskService.deleteTask(reqParam.id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() task: TaskDto, @Res() res: Response) {
      console.log(task)
      const data = await this.taskService.addTask(task);
      return res.status(200).send(data)
  }
}
