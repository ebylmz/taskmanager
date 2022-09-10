import { Component, OnInit } from '@angular/core';
import { MyTask } from '../model/myTask.model';

@Component({
  selector: 'app-matrix-view',
  templateUrl: './matrix-view.component.html',
  styleUrls: ['./matrix-view.component.scss']
})
export class MatrixViewComponent implements OnInit {

  urgentImportant: MyTask[] = [];
  urgentUnimportant: MyTask[] = [];
  notUrgentImportant: MyTask[] = [];
  notUrgentUnimportant: MyTask[] = [];

  constructor() {}

  ngOnInit(): void {}
}