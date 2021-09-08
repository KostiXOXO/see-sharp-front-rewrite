import { MarkdownCompiler } from 'components/markdownCompiler';
import React from 'react';
import { Tutorial } from './common/Tutorial';
import './SubsectionView.scss';

const SubsectionView = ({ tutorial }: { tutorial: Tutorial | null }) => {
	return (
		<div>
			<h3>{tutorial?.name}</h3>
			<p className="description">{tutorial?.description}</p>
			<MarkdownCompiler markdown={tutorial?.content ?? ''} />
		</div>
	);
};

export { SubsectionView };
