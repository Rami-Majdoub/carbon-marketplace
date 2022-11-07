import { AuditRequest } from '../audit-request';
// import { AUDIT_REVIEW } from './mock-audit-review';

import { AUDITOR } from './mock-auditor';
import { PROJECTS } from './mock-projects';

export const AUDIT_REQUEST: AuditRequest[] = [
  {
    id: '1',
    date: '2022-11-05 06:36:29',
    report: 'bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy',
    auditorId: AUDITOR[0].id || '',
    auditor: AUDITOR[0],
    projectId: 0,
    project: PROJECTS[0],
    // auditReviewId: AUDIT_REVIEW[0]?.id,
    // auditReview: AUDIT_REVIEW[0],
  },
  {
    id: '2',
    date: '2022-11-04 06:36:29',
    report: 'bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy',
    auditorId: AUDITOR[1].id || '',
    auditor: AUDITOR[1],
    projectId: 1,
    project: PROJECTS[1],
    // auditReviewId: AUDIT_REVIEW[1]?.id,
    // auditReview: AUDIT_REVIEW[1],
  },
  {
    id: '3',
    date: '2022-11-03 06:36:29',
    report: 'bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy',
    auditorId: AUDITOR[2].id || '',
    auditor: AUDITOR[2],
    projectId: 2,
    project: PROJECTS[2],
  },

  // {
  // 	date: "2022-11-03 06:36:29",
  // 	projectId: 1,
  // 	project: PROJECTS[0],
  // 	auditorId: "0x7D5156e05A37d4ad1459423930115CA370dE7675",
  // 	report: "bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy",
  // 	status: "submitted",
  //	reviewDate: "",
  //	creditsReceived: 0,
  //	comments: "",
  // }
];
