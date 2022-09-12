import { EisenhowerPriority } from "./myTask.model";

export class MatrixListProperties {
  priority: EisenhowerPriority;
  themeColor: string;
  listHeader: string;

  constructor(priority: EisenhowerPriority) {
    this.priority = priority;
    switch(priority) {
      case EisenhowerPriority.NOT_URGENT_UNIMPORTANT:
        this.themeColor = "green";
        this.listHeader = "Not Urgent & Unimportant";
        break;
      case EisenhowerPriority.NOT_URGENT_IMPORTANT:
        this.themeColor = "orange";
        this.listHeader = "Not Urgent & Important";
        break;
      case EisenhowerPriority.URGENT_UNIMPORTANT:
        this.themeColor = "blue";
        this.listHeader = "Urgent & Unimportant";
        break;
      case EisenhowerPriority.URGENT_IMPORTANT:
        this.themeColor = "red";
        this.listHeader = "Urgent & Important";
        break;
    }
  }
}