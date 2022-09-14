import { Component, OnInit } from '@angular/core';
import { MyTask } from 'src/app/core/models/my-task';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-inbox-view',
  templateUrl: './inbox-view.component.html',
  styleUrls: ['./inbox-view.component.scss']
})
export class InboxViewComponent implements OnInit {

  taskList: MyTask[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.taskList = this.apiService.getTasks();
  }
}
