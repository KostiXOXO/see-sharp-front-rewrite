import React from 'react';
import { List } from '@material-ui/core';
import { Section } from './common';
import { SectionsListItem } from './sectionsListItem';
import './SectionsList.scss';

interface IProps {
	sections: Section[];
	activeSubsection: number | null;
	handleSubsectionChange: any;
}

const SectionsList = ({ sections, activeSubsection, handleSubsectionChange }: IProps): JSX.Element => {
	return (
		<div>
			<List>
				{sections.map((section, key) => {
					return (
						<SectionsListItem
							key={key}
							section={section}
							selectedId={activeSubsection}
							handleSubsectionChange={handleSubsectionChange}
						/>
					);
				})}
			</List>
		</div>
	);
};

export { SectionsList };
