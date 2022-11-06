import { Audit } from '../audit';
import { PROJECTS } from './mock-projects';

export const AUDIT: Audit[] = [
	{
		date: "2022-11-03 06:36:29",
		projectId: 1,
		project: PROJECTS[0],
		auditorId: "0x7D5156e05A37d4ad1459423930115CA370dE7675",
		report: "bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy",
		status: "submitted",
//		reviewDate: "",
//		creditsReceived: 0,
// 		comments: "",
	},
	{
		date: "2022-11-03 06:36:29",
		projectId: 2,
		auditorId: "0x7D5156e05A37d4ad1459423930115CA370dE7675",
		report: "bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy",
		status: "rejected",
		project: PROJECTS[1],
	},
	{
		date: "2022-11-03 06:36:29",
		projectId: 3,
		auditorId: "0x7D5156e05A37d4ad1459423930115CA370dE7675",
		report: "bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy",
		status: "verified",
		project: PROJECTS[2],
	},
];
