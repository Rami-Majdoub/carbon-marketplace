import { Auditor } from "./auditor";
import { Project } from "./project";

export interface AuditRequest {
  // id account name contact location website
  id?: string;
  date: string;

  report: string;

  auditorId: string;
  auditor?: Auditor;
  projectId: number;
  project?: Project;
}