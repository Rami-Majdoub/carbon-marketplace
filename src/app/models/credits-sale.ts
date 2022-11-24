import { Project } from "./project";

export interface CreditsSale {
	creditsAvailable: number;
	creditsOnSale: number;
	price: number;
	projectId?: string;
	project?: Project;
}