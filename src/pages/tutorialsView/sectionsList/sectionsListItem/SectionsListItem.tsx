import React from 'react';
import { Section, Tutorial } from '../common';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { List, ListItem, Collapse } from '@material-ui/core';
import './SectionsListItem.scss';

const SectionsListItem = ({
	section,
	selectedId,
	handleSubsectionChange,
}: {
	section: Section;
	selectedId: number | null;
	handleSubsectionChange: any;
}): JSX.Element => {
	const [open, setOpen] = React.useState(true);

	const handleSectionClick = () => {
		setOpen(!open);
	};

	const handleSubsectionClick = (tutorial: Tutorial) => {
		handleSubsectionChange(tutorial.id);
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
								<ListItem
									button
									key={key}
									onClick={() => handleSubsectionClick(tutorial)}
									selected={selectedId === tutorial.id}
								>
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
