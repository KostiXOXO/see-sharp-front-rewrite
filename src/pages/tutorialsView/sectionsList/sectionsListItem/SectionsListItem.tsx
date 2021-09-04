import React from 'react';
import { Section, Tutorial } from '../common';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { List, ListItem, Collapse } from '@material-ui/core';
import './SectionsListItem.scss';

const SectionsListItem = ({
	section,
	handleActiveSubsection,
}: {
	section: Section;
	handleActiveSubsection: any;
}): JSX.Element => {
	const [open, setOpen] = React.useState(true);

	const handleSectionClick = () => {
		setOpen(!open);
	};

	const handleSubsectionClick = (tutorial: Tutorial) => {
		handleActiveSubsection(tutorial.id);
	};

	return (
		<div>
			<ListItem button onClick={handleSectionClick}>
				{section.name}
				{section.tutorials && (open ? <ExpandLess /> : <ExpandMore />)}
			</ListItem>

			{section.tutorials && (
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List>
						{section.tutorials.map((tutorial: Tutorial, key: any) => {
							return (
								<ListItem button key={key} onClick={() => handleSubsectionClick(tutorial)}>
									{tutorial.name}
								</ListItem>
							);
						})}
					</List>
				</Collapse>
			)}
		</div>
	);
};

export { SectionsListItem };
