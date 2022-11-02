import { Auditor } from "./auditor";
import { Project } from "./project";

export interface Audit {
	// id account name contact location website
	id?: string;
	date: string;
	projectId: number;
	auditorId: string;
	report: string;
	status: string;
	auditor?: Auditor;
	project?: Project;
  }