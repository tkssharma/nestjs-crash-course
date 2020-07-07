import { Injectable } from "@nestjs/common";
import { Task } from "./interface/task";
import { TaskStoreService } from "./task-store.service";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {

    constructor(private readonly taskStoreService: TaskStoreService ){}
   
    public async addTask(task: Task): Promise<Task> {
        task.uuid = uuidv4();
        task.compledted = false;
        task.description= 'dummy';
        task.ownder ='Tarun';
        task.duration = 2;
        return this.taskStoreService.addTask(task);
    }
    public async getTask(id: string): Promise<Task> {
        return this.taskStoreService.getTask(id);
    }
    public async deleteTask(id: string): Promise<Task []> {
        return this.taskStoreService.deleteTask(id);
    }
    public async getAllTasks(): Promise<Task []> {
        return this.taskStoreService.getAllTasks();
    }
}