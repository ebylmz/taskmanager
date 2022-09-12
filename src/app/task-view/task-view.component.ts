import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTaskDialogComponent } from '../add-edit-task-dialog/add-edit-task-dialog.component';
import { MatrixListProperties } from '../model/matrixListProperties.model';
import { EisenhowerPriority, MyTask } from '../model/myTask.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  @Input() listType !: EisenhowerPriority;
  @Input() taskList !: MyTask[];
  themeColor !: string;
  listHeader !: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    let properties: MatrixListProperties = new MatrixListProperties(this.listType);
    this.themeColor = properties.themeColor;
    this.listHeader = properties.listHeader;
  }

  addTask(task: MyTask): void {
    this.taskList.push(task);
  }

  editTask(taskNo: number, updatedTask: MyTask): void {
    this.taskList[taskNo] = updatedTask; 
  }

  deleteTask(taskNo: number): void {
    this.taskList.splice(taskNo, 1);
  }

  drop(event: CdkDragDrop<MyTask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openDialog(taskNo ?: number): void {
    let task: MyTask;
    if (taskNo == undefined)
      task = new MyTask("", "");
    else 
      task = this.taskList[taskNo];
    const dialogRef = this.dialog.open(AddEditTaskDialogComponent, {
      width: '500px', // TODO: set proper value
      // data: {title: "", description: "",  false},
      data: task,
      scrollStrategy: new NoopScrollStrategy()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result != undefined) {
        if (taskNo == undefined) 
          this.addTask(result);
        else 
         this.editTask(taskNo, result);
      } 
    });
  }
}