export enum EisenhowerPriority {
  NOT_URGENT_UNIMPORTANT = 0,
  NOT_URGENT_IMPORTANT = 1,
  URGENT_UNIMPORTANT = 2,
  URGENT_IMPORTANT = 3
}

export class MyTask {
  title: string;
  description: string;
  date: Date = new Date();
  priority: EisenhowerPriority = EisenhowerPriority.URGENT_IMPORTANT;
  done: boolean = false;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}