import React, { useState } from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NestedListItemProp } from './NestedListItemProp';
import { List, ListItem, Collapse } from '@material-ui/core';
import './NestedListItem.scss';
import { ThemeProvider } from 'utils/helpers';

const NestedListItem = ({ item }: { item: NestedListItemProp }): JSX.Element => {
	const [open, setOpen] = useState(true);

	const handleClick = () => {
		setOpen((open) => !open);
	};

	return (
		<ThemeProvider>
			<div>
				<ListItem button onClick={handleClick}>
					{item.name}
					{item.tutorials && (open ? <ExpandLess /> : <ExpandMore />)}
				</ListItem>

				{item.tutorials && (
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List>
							{item.tutorials.map((tutorial, key) => {
								return <NestedListItem key={key} item={tutorial} />;
							})}
						</List>
					</Collapse>
				)}
			</div>
		</ThemeProvider>
	);
};

export { NestedListItem };
