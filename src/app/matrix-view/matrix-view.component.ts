import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    MyTask.filterTasks(
      this.apiService.getTasks(), 
      this.urgentImportant, 
      this.urgentUnimportant, 
      this.notUrgentImportant, 
      this.notUrgentUnimportant
    );
  }
}