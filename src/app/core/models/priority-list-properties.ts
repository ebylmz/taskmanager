import { EisenhowerPriority } from "../enums/eisenhower-priority";

export class PriorityListProperties {
  urgency: EisenhowerPriority;
  priority: String;
  themeColor: string;
  listHeader: string;

  constructor(urgency: EisenhowerPriority) {
    this.urgency = urgency;
    switch(urgency) {
      case EisenhowerPriority.NOT_URGENT_UNIMPORTANT:
        this.priority = "None";
        this.themeColor = "green";
        this.listHeader = "Not Urgent & Unimportant";
        break;
      case EisenhowerPriority.NOT_URGENT_IMPORTANT:
        this.priority = "Low";
        this.themeColor = "orange";
        this.listHeader = "Not Urgent & Important";
        break;
      case EisenhowerPriority.URGENT_UNIMPORTANT:
        this.priority = "Medium";
        this.themeColor = "blue";
        this.listHeader = "Urgent & Unimportant";
        break;
      case EisenhowerPriority.URGENT_IMPORTANT:
        this.priority = "High";
        this.themeColor = "red";
        this.listHeader = "Urgent & Important";
        break;
    }
  }
}