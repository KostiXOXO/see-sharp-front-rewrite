interface IExcercise {
	name: string;
	description: string;
	creatorName: string;
	examples: {
		input: string;
		output: string;
	}[];
	difficultyLevel: number;
	rating: {
		upvotes: number;
		downvotes: number;
	};
}

interface IExcerciseComment {
	username: string;
	comment: string;
	date: Date;
	upvotes: number;
}

export type { IExcercise, IExcerciseComment };
