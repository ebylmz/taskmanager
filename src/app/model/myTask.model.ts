export enum EisenhowerPriority {
  NOT_URGENT_UNIMPORTANT = 0,
  NOT_URGENT_IMPORTANT = 1,
  URGENT_UNIMPORTANT = 2,
  URGENT_IMPORTANT = 3
}

export class MyTask {
  title: string;
  description: string;
  priority: EisenhowerPriority;
  date: Date = new Date();
  done: boolean = false;

  constructor(title: string, description: string, priority: EisenhowerPriority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
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