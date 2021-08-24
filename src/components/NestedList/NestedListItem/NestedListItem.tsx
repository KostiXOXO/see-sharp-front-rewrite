import React from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NestedListItemProp } from './NestedListItemProp';
import { List, ListItem, Collapse } from '@material-ui/core';
import './NestedListItem.scss';
import { ThemeProvider } from 'utils/helpers';

const NestedListItem = ({ item, level = 0 }: { item: NestedListItemProp; level: number }): JSX.Element => {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider>
			<div>
				<ListItem button onClick={handleClick}>
					{item.name}
					{item.subItems && (open ? <ExpandLess /> : <ExpandMore />)}
				</ListItem>

				{item.subItems && (
					<Collapse in={open} timeout="auto" unmountOnExit>
						<List>
							{item.subItems.map((subItem, key) => {
								return <NestedListItem key={key} item={subItem} level={level + 1} />;
							})}
						</List>
					</Collapse>
				)}
			</div>
		</ThemeProvider>
	);
};

export { NestedListItem };
