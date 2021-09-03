import { Tutorial } from './Tutorial';

export interface ISection {
	id: number;
	name: string;
	tutorials: Tutorial[];
}

export type Section = ISection;
