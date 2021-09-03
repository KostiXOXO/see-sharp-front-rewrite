import React from 'react';
import { List } from '@material-ui/core';
import { Section } from './common';
import { SectionsListItem } from './sectionsListItem';
import './SectionsList.scss';
import { FolderOpen } from '@material-ui/icons';

const SectionsList = ({
	sections,
	handleActiveSubsection,
}: {
	sections: Section[];
	handleActiveSubsection: any;
}): JSX.Element => {
	return (
		<div>
			<List>
				{sections.map((section, key) => {
					return (
						<SectionsListItem key={key} section={section} handleActiveSubsection={handleActiveSubsection} />
					);
				})}
			</List>
		</div>
	);
};

export { SectionsList };
