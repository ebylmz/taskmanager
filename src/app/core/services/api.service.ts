import { Injectable } from '@angular/core';
import { EisenhowerPriority, MyTask } from 'src/app/model/myTask.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getTasks(): MyTask[] {
    return Array.of(
      new MyTask("Have a solid workout", "", EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new MyTask("Create the list-view", "", EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new MyTask("Create the API of TaskManager App", "", EisenhowerPriority.URGENT_IMPORTANT),
      new MyTask("Take a walk", "", EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new MyTask("Go to grocery", "", EisenhowerPriority.NOT_URGENT_UNIMPORTANT),
      new MyTask("Sell the shares", "", EisenhowerPriority.URGENT_IMPORTANT),
      new MyTask("Send mail to MAVI", "", EisenhowerPriority.URGENT_UNIMPORTANT),
      new MyTask("Apply angular folder structure to TaskManager App", "", EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new MyTask("Practice meditation", "", EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new MyTask("Cook ground beef", "", EisenhowerPriority.URGENT_IMPORTANT),
      new MyTask("Eat yoghurt before sleep", "", EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new MyTask("Have a jump workout", "", EisenhowerPriority.URGENT_IMPORTANT),
      new MyTask("Call momy", "", EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new MyTask("Check the google search algorithm", "", EisenhowerPriority.NOT_URGENT_UNIMPORTANT),
      new MyTask("Learn to journaling", "", EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new MyTask("Make research about museums in Instanbul", "", EisenhowerPriority.NOT_URGENT_UNIMPORTANT),
      new MyTask("Update the CV", "", EisenhowerPriority.NOT_URGENT_IMPORTANT),
      new MyTask("Watch Forest Gump", "", EisenhowerPriority.NOT_URGENT_UNIMPORTANT),
    );
  }
}
