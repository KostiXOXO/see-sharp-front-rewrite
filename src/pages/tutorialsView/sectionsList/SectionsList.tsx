import React from 'react';
import { List } from '@material-ui/core';
import { Section } from './common';
import { SectionsListItem } from './sectionsListItem';
import './SectionsList.scss';
import { FolderOpen } from '@material-ui/icons';

const SectionsList = ({ sections, foo }: { sections: Section[]; foo: any }): JSX.Element => {
	return (
		<div>
			<List>
				{sections.map((section, key) => {
					return <SectionsListItem key={key} section={section} foo={foo} />;
				})}
			</List>
		</div>
	);
};

export { SectionsList };
