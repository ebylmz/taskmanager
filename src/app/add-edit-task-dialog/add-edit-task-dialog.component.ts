import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyTask } from '../model/myTask.model';

@Component({
  selector: 'app-add-edit-task-dialog',
  templateUrl: './add-edit-task-dialog.component.html',
  styleUrls: ['./add-edit-task-dialog.component.scss']
})
export class AddEditTaskDialogComponent implements OnInit {
  taskForm !: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<AddEditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MyTask,
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
