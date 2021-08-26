import React from 'react';
import { List } from '@material-ui/core';
import { NestedListItemProp } from './NestedListItem/NestedListItemProp';
import { NestedListItem } from './NestedListItem';
import { ThemeProvider } from 'utils/helpers';
import './NestedList.scss';

const NestedList = ({ items }: { items: NestedListItemProp[] }): JSX.Element => {
	return (
		<div className="nestedListContainer">
			<ThemeProvider>
				<List>
					{items.map((item, key) => {
						return <NestedListItem key={key} item={item} />;
					})}
				</List>
			</ThemeProvider>
		</div>
	);
};

export { NestedList };
