import { AuditRequest } from "./audit-request";
import { Project } from "./project";

export interface AuditReview {
	// id account name contact location website
	id?: string;
	date: string;

	status: string;
	credits: number;
	comments: string;

	auditRequestId: number;
	auditRequest?: AuditRequest;
	// projectId: number;
	// project?: Project;
  }