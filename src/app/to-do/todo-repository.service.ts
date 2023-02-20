import { Injectable } from '@angular/core';
import { IToDo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService {

  taskList: IToDo[] = [
    {task: "Shop for groceries", completed: true},
    {task: "Clean room", completed: false},
    {task: "Do laundry", completed: true},
    {task: "Go for run", completed: true},
    {task: "Schedule doctors appointment", completed: false},
    {task: "Cook dinner", completed: false},
    {task: "Complete homework", completed: false}
 ];
  
  constructor() { }

  getToDoTasks(): IToDo[]{
    return this.taskList;
  }

  }
