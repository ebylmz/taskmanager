import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EisenhowerPriority } from '../../../core/enums/eisenhower-priority';
import { PriorityListProperties } from '../../../core/models/priority-list-properties';
import { MyTask } from '../../../core/models/my-task';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddEditTaskDialogComponent } from '../dialogs/add-edit-task-dialog/add-edit-task-dialog.component';
import { FormGroup } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { DeleteTaskDialogComponent } from '../dialogs/delete-task-dialog/delete-task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() matrixView: boolean = true;

  @Input() listHeader !: string;

  @Input() taskList !: MyTask[];

  @Input() listProperty !: PriorityListProperties;
  
  @ViewChild(MatMenuTrigger, {static: true}) matMenuTrigger !: MatMenuTrigger; 

  menuTopLeftPosition = {x: '0', y: '0'} 

  themes !: Map<EisenhowerPriority, String>;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    if (!this.matrixView) {
      this.themes = new Map<EisenhowerPriority, String>();
      this.themes.set(EisenhowerPriority.NOT_URGENT_UNIMPORTANT, new PriorityListProperties(EisenhowerPriority.NOT_URGENT_UNIMPORTANT).themeColor)
      this.themes.set(EisenhowerPriority.NOT_URGENT_IMPORTANT, new PriorityListProperties(EisenhowerPriority.NOT_URGENT_IMPORTANT).themeColor)
      this.themes.set(EisenhowerPriority.URGENT_UNIMPORTANT, new PriorityListProperties(EisenhowerPriority.URGENT_UNIMPORTANT).themeColor)
      this.themes.set(EisenhowerPriority.URGENT_IMPORTANT, new PriorityListProperties(EisenhowerPriority.URGENT_IMPORTANT).themeColor)
    }
  }

  addTask(task: MyTask): void {
    this.taskList.push(task);
    this.openSnackBar(task.title + " created successfully");
  }

  editTask(taskIndex: number, updatedTask: MyTask): void {
    let prevTitle: string = this.taskList[taskIndex].title;
    this.taskList[taskIndex] = updatedTask; 
    this.openSnackBar(prevTitle + " updated successfully");
  }

  completeTask(taskIndex: number): void {
    this.taskList[taskIndex].done = true;
    let removed: MyTask = this.taskList.splice(taskIndex, 1)[0];
    this.openSnackBar(removed.title + " completed");
  }

  deleteTask(taskIndex: number): void {
    let removed: MyTask = this.taskList.splice(taskIndex, 1)[0];
    this.openSnackBar(removed.title + " deleted successfully");
  }

  drop(event: CdkDragDrop<MyTask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      event.previousContainer.data[event.previousIndex].priority = this.listProperty.urgency;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openContextMenu(event: MouseEvent, taskIndex: number): void { 
    event.preventDefault(); 

    this.menuTopLeftPosition.x = event.clientX + 'px'; 
    this.menuTopLeftPosition.y = event.clientY + 'px'; 

    this.matMenuTrigger.menuData = {taskIndex: taskIndex}; 
    this.matMenuTrigger.openMenu(); 
  } 

  openSnackBar(message: string, action: string = "ok"): void {
    this.snackBar.open(message, action);
  }

  openAddTaskDialog(taskIndex ?: number): void {
    let task: MyTask = taskIndex != undefined ? this.taskList[taskIndex] :
      {title:"", description: "", priority: this.listProperty.urgency, date: undefined, done: false};

    const dialogRef = this.dialog.open(AddEditTaskDialogComponent, {data: task});

    dialogRef.afterClosed().subscribe((result: FormGroup) => {
      if (result != undefined) {
        let task: MyTask = new MyTask;
        task.title = result.get("title")?.value, 
        task.priority = result.get("priority")?.value,
        task.description = result.get("description")?.value, 
        task.date = result.get("date")?.value,
        task.done = result.get("done")?.value
        if (taskIndex == undefined) 
          this.addTask(task);
        else 
          this.editTask(taskIndex, task);
      } 
    });
  }

  openDeleteTaskDialog(taskIndex: number): void {
    const dialogRef = this.dialog.open(DeleteTaskDialogComponent, {data: this.taskList[taskIndex].title});

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result == true)
        this.deleteTask(taskIndex);
    });
  }
}