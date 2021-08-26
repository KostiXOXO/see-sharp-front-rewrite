import React from 'react';
import { List } from '@material-ui/core';
import { Section } from './common';
import { ThemeProvider } from 'utils/helpers';
import { SectionsListItem } from './sectionsListItem';
import './SectionsList.scss';

const SectionsList = ({ sections }: { sections: Section[] }): JSX.Element => {
	return (
		<div className="nestedListContainer">
			<ThemeProvider>
				<List>
					{sections.map((section, key) => {
						return <SectionsListItem key={key} section={section} />;
					})}
				</List>
			</ThemeProvider>
		</div>
	);
};

export { SectionsList };
