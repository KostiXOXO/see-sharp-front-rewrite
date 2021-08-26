import React from 'react';
import './SubsectionView.scss';

export interface ITutorial {
	id: number;
	name: string;
	description: string;
	content: string;
}

const SubsectionView = ({ tutorial }: { tutorial: ITutorial }) => {
	return (
		<div>
			<h1>{tutorial?.name}</h1>
			<h3>{tutorial?.description}</h3>
			<p>{tutorial?.content}</p>
		</div>
	);
};

export { SubsectionView };
