import { MarkdownCompiler } from 'components/markdownCompiler';
import React from 'react';
import { Tutorial } from './common/Tutorial';
import './SubsectionView.scss';

const SubsectionView = ({ tutorial }: { tutorial: Tutorial }) => {
	const { name, description, content } = tutorial;
	return (
		<div>
			<h3>{name}</h3>
			<p className="description">{description}</p>
			<MarkdownCompiler markdown={content ?? ''} />
		</div>
	);
};

export { SubsectionView };
