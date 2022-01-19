import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    new Task('walk the dog'),
    new Task('wash dishes', true),
    new Task('do laundry')
  ];
  title: string = "Todo";

  constructor() { }

  ngOnInit() {
  }

  getTasksWithCompletionStatus(status: boolean): Task[] {
    let tasks: Task[] = [];
    for (let i: number = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].isComplete === status) {
        tasks.push(this.tasks[i]);
      }
    }
    return tasks;
  }

  toggleCompletionStatus(task: Task): void {
    task.isComplete = !task.isComplete;
  }

  addTask(description: string): void {
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

}

class Task {

  description: string;
  isComplete: boolean;

  constructor(description: string, isComplete: boolean = false) {
    this.description = description;
    this.isComplete = isComplete;
  }

}