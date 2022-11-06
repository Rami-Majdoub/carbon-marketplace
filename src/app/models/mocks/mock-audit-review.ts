import { AuditReview } from '../audit-review';

import { AUDIT_REQUEST } from './mock-audit-request';

export const AUDIT_REVIEW: AuditReview[] = [
  {
    id: '1',
    comments: '',
    credits: 100,
    auditRequestId: 0,
    auditRequest: AUDIT_REQUEST[0],
    date: '2022-11-03 06:36:29',
    status: 'verified',
  },
  {
    id: '2',
    comments: '',
    credits: 100,
    auditRequestId: 1,
    auditRequest: AUDIT_REQUEST[1],
    date: '2022-11-03 06:36:29',
    status: 'rejected',
  },
];
