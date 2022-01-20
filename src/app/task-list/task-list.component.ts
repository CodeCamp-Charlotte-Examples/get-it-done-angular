import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    new Task('wash dishes'),
    new Task('rake leaves', true)
  ];
  title: string = "Todo";
  @Output() taskTotalUpdateEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.taskTotalUpdateEvent.emit(this.tasks.length);
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
    this.taskTotalUpdateEvent.emit(this.tasks.length);
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