import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EisenhowerPriority } from 'src/app/core/enums/eisenhower-priority';
import { PriorityListProperties } from 'src/app/core/models/priority-list-properties';
import { MyTask } from 'src/app/core/models/my-task';

@Component({
  selector: 'app-add-edit-task-dialog',
  templateUrl: './add-edit-task-dialog.component.html',
  styleUrls: ['./add-edit-task-dialog.component.scss']
})
export class AddEditTaskDialogComponent implements OnInit {
  
  form !: FormGroup;
  
  priorityList: PriorityListProperties[];

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task: MyTask,
  ) {
    this.form = this.fb.group({
      title: [task.title, Validators.required],
      description: [task.description],
      date: [task.date],
      priority: [task.priority, Validators.required],
      done: [task.done]
    })

    this.priorityList = Array.of(
      new PriorityListProperties(EisenhowerPriority.URGENT_IMPORTANT),
      new PriorityListProperties(EisenhowerPriority.URGENT_UNIMPORTANT),
      new PriorityListProperties(EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new PriorityListProperties(EisenhowerPriority.NOT_URGENT_UNIMPORTANT),
    );
  }

  ngOnInit(): void {
  }

  getListProperty(priority: EisenhowerPriority): PriorityListProperties {
    return new PriorityListProperties(priority);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
