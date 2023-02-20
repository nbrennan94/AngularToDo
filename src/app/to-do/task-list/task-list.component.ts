import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IToDo } from '../interfaces/todo';
import { TodoRepositoryService } from '../todo-repository.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  
  toDoTasks: IToDo[] = [];
  showMessage: boolean = false;
  buttonText: string = "Show";

  constructor(private toDoRepo: TodoRepositoryService) {}

  ngOnInit(): void {
    this.toDoTasks = this.toDoRepo.getToDoTasks();
  }

  addTask(form:NgForm):void{
    let newTask: IToDo = {
      task: form.form.value.task,
      completed: false
    }
    this.toDoTasks.push(newTask);
  } 

  completeTask(index: number):void{
    this.toDoTasks[index].completed = true;
  }
    
  }
