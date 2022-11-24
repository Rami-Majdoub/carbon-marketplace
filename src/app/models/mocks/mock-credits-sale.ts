import { CreditsSale } from '../credits-sale';
import { PROJECTS } from './mock-projects';

export const CREDITS_SALE: CreditsSale[] = [
	{
		creditsAvailable: 100,
		creditsOnSale: 100,
		price: 1.2,
		projectId: '0',
		project: PROJECTS[0],
	}
];