// import { AuditReview } from "./audit-review";
import { Auditor } from "./auditor";
import { Project } from "./project";

export interface AuditRequest {
  id?: string;
  date: string;

  report: string;

  auditorId: string;
  auditor?: Auditor;
  projectId: number;
  project?: Project;
  // threw error when init mock data
  // auditReviewId?: string;
  // auditReview?: AuditReview;
}