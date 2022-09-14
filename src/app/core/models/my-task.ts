import { EisenhowerPriority } from "../enums/eisenhower-priority";

export class MyTask {
  title: string = "";
  description: string = "";
  priority !: EisenhowerPriority;
  date: Date | undefined;
  done: boolean = false;

  constructor() {
  }

  public static filterTasks(
    allTasks: MyTask[], urgentImportant: MyTask[], urgentUnimportant: MyTask[], 
    notUrgentImportant: MyTask[], notUrgentUnimportant: MyTask[]
  ): void {
    allTasks.forEach(task => {
      switch(task.priority) {
        case EisenhowerPriority.NOT_URGENT_UNIMPORTANT:
          notUrgentUnimportant.push(task); break;
        case EisenhowerPriority.NOT_URGENT_IMPORTANT:
          notUrgentImportant.push(task); break;
        case EisenhowerPriority.URGENT_UNIMPORTANT:
          urgentUnimportant.push(task); break;
        case EisenhowerPriority.URGENT_IMPORTANT:
          urgentImportant.push(task); break;
      }
    });
  }
}