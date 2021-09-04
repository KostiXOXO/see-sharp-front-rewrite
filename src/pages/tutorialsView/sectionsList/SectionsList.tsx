import React from 'react';
import { List } from '@material-ui/core';
import { Section } from './common';
import { SectionsListItem } from './sectionsListItem';
import './SectionsList.scss';
import { FolderOpen } from '@material-ui/icons';

interface IProps {
	sections: Section[];
	handleActiveSubsection: any;
}

const SectionsList = ({ sections, handleActiveSubsection }: IProps): JSX.Element => {
	return (
		<List>
			{sections.map((section, key) => {
				return <SectionsListItem key={key} section={section} handleActiveSubsection={handleActiveSubsection} />;
			})}
		</List>
	);
};

export { SectionsList };
