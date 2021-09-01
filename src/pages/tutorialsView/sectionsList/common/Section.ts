import { Tutorial } from './Tutorial';

export interface ISection {
	name: string;
	tutorials: Tutorial[];
}

export type Section = ISection;
