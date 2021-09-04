import React, { useState } from 'react';
import { Section, Tutorial } from '../common';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { List, ListItem, Collapse } from '@material-ui/core';
import { ThemeProvider } from 'utils/helpers';
import './SectionsListItem.scss';

interface IProps {
	section: Section;
	handleActiveSubsection: any;
}

const SectionsListItem = ({ section, handleActiveSubsection }: IProps): JSX.Element => {
	const [open, setOpen] = React.useState(true);
	//const [activeSubsection, setActiveSubsection] = React.useState<Tutorial | undefined>(undefined);

	const handleSectionClick = () => {
		setOpen((open) => !open);
	};

	const handleSubsectionClick = (tutorial: Tutorial) => {
		//setActiveSubsection(tutorial);
		handleActiveSubsection(tutorial.id);
	};

	return (
		<ThemeProvider>
			<>
				<ListItem button onClick={handleSectionClick}>
					{section.name}
					{section.tutorials && (open ? <ExpandLess /> : <ExpandMore />)}
				</ListItem>

				{section.tutorials && (
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List>
							{section.tutorials.map((tutorial: Tutorial, key) => {
								return (
									<ListItem
										button
										key={key}
										onClick={() => {
											return handleSubsectionClick(tutorial);
										}}
									>
										{tutorial.name}
									</ListItem>
								);
							})}
						</List>
					</Collapse>
				)}
			</>
		</ThemeProvider>
	);
};

export { SectionsListItem };
