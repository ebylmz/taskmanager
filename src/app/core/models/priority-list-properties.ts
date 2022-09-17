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
        this.priority = "none";
        this.themeColor = "limegreen";
        this.listHeader = "notUrgentUnimportant"; // "Not Urgent & Unimportant";
        break;
      case EisenhowerPriority.NOT_URGENT_IMPORTANT:
        this.priority = "low";
        this.themeColor = "orange";
        this.listHeader = "notUrgentImportant"; // "Not Urgent & Important";
        break;
      case EisenhowerPriority.URGENT_UNIMPORTANT:
        this.priority = "medium";
        this.themeColor = "dodgerblue";
        this.listHeader = "urgentUnimportant"; // "Urgent & Unimportant";
        break;
      case EisenhowerPriority.URGENT_IMPORTANT:
        this.priority = "high";
        this.themeColor = "red";
        this.listHeader = "urgentImportant"; // "Urgent & Important";
        break;
    }
  }
}