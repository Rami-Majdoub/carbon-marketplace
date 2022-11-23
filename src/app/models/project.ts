import { Auditor } from "./auditor";

// id owner name location methods description report auditor
export interface Project {
  id?: string;
  name: string;
  owner: string;
  location: string;
  methods: string;
  description: string;
  report: string;
  auditor?: Auditor;
}
