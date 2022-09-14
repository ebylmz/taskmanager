import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { MyTask } from '../../../core/models/my-task';
import { EisenhowerPriority } from 'src/app/core/enums/eisenhower-priority';
import { PriorityListProperties } from 'src/app/core/models/priority-list-properties';

@Component({
  selector: 'app-matrix-view',
  templateUrl: './matrix-view.component.html',
  styleUrls: ['./matrix-view.component.scss']
})
export class MatrixViewComponent implements OnInit {

  high: PriorityListProperties = new PriorityListProperties(EisenhowerPriority.URGENT_IMPORTANT);
  medium: PriorityListProperties = new PriorityListProperties(EisenhowerPriority.URGENT_UNIMPORTANT);
  low: PriorityListProperties = new PriorityListProperties(EisenhowerPriority.NOT_URGENT_IMPORTANT);
  none: PriorityListProperties = new PriorityListProperties(EisenhowerPriority.NOT_URGENT_UNIMPORTANT);

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