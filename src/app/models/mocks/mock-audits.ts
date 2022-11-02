import { Audit } from '../audit';
import { PROJECTS } from './mock-projects';

export const AUDIT: Audit[] = [
	{
		date: "2022-02-05 03:05:9",
		projectId: 1,
		auditorId: "0x7D5156e05A37d4ad1459423930115CA370dE7675",
		report: "bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy",
		status: "submitted",
		project: PROJECTS[0],
	},
	{
		date: "2022-20-5 3:05:09",
		projectId: 2,
		auditorId: "0x7D5156e05A37d4ad1459423930115CA370dE7675",
		report: "bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy",
		status: "verified",
		project: PROJECTS[1],
	},
	{
		date: "2022-20-5 3:05:9",
		projectId: 3,
		auditorId: "0x7D5156e05A37d4ad1459423930115CA370dE7675",
		report: "bafkreiaok6a3snh5dpgvpyll3pwq5yz7xesfxelblm4z5f5igpfutkjomy",
		status: "verified",
		project: PROJECTS[2],
	},
];
