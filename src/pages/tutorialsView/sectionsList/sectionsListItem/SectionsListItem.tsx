import React from 'react';
import { Section, Tutorial } from '../common';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { List, ListItem, Collapse } from '@material-ui/core';
import { ThemeProvider } from 'utils/helpers';
import './SectionsListItem.scss';

const SectionsListItem = ({ section }: { section: Section }): JSX.Element => {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider>
			<div>
				<ListItem button onClick={handleClick}>
					{section.name}
					{section.tutorials && (open ? <ExpandLess /> : <ExpandMore />)}
				</ListItem>

				{section.tutorials && (
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List>
							{section.tutorials.map((tutorial: Tutorial, key: any) => {
								return (
									<ListItem button key={key}>
										{tutorial.name}
									</ListItem>
								);
							})}
						</List>
					</Collapse>
				)}
			</div>
		</ThemeProvider>
	);
};

export { SectionsListItem };
