export interface ITutorial {
	id: number;
	tutorialSectionId: number;
	name: string;
	description: string;
	content: string;
}

export type Tutorial = ITutorial;
