export enum EisenhowerPriority {
  URGENT_IMPORTANT = "Urgent & Important",
  URGENT_UNIMPORTANT = "Urgent & Unimportant",
  NOT_URGENT_IMPORTANT = "Not Urgent & Important",
  NOT_URGENT_UNIMPORTANT = "Not Urgent & Unimportant"
}

export class MyTask {
  title !: string;
  description !: string;
  done: boolean = false;

  constructor(title: string, description: string, done: boolean) {
    this.title = title;
    this.description = description;
    this.done = done;
  }
}