import { Injectable } from "@nestjs/common";
import { Task } from "./interface/task";

@Injectable()
export class TaskStoreService {
    public tasks: Task [] = [];
   
    public async addTask(task: Task): Promise<Task> {
        this.tasks.push(task);
        console.log(task, this.tasks);
        return Promise.resolve(task)
    }
    public async getTask(id: string): Promise<Task> {
        const task = this.tasks.filter((i: Task) => i.uuid === id);
        console.log(task)
        return Promise.resolve(task[0])
    }

    public async deleteTask(id: string): Promise<Task []> {
        const newTasks = this.tasks.filter((i: Task) => i.uuid !== id);
        this.tasks = newTasks;
        return Promise.resolve(this.tasks)
    }
    
    public async getAllTasks(): Promise<Task []> {
        console.log(this.tasks);
        return Promise.resolve(this.tasks);
    }
}