import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.scss']
})
export class DeleteTaskDialogComponent implements OnInit {

  constructor(public dialogRef:  MatDialogRef<DeleteTaskDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public taskTitle: string) {

  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
