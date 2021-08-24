import axios from 'axios';
import { NestedList } from 'components/NestedList';
import React from 'react';
// import { getTutorialsList } from 'utils/web/webMethods/requests';

const TutorialsView = (): JSX.Element => {
	const kutas = async () => {
		return await axios.get('https://localhost:5001/api/tutorials').then((res) => {
			return res.data;
		});
	};

	const test = kutas();

	const sections = [
		{
			name: 'section 1',
			subItems: [
				{
					name: '1.1',
				},
			],
		},
		{
			name: 'section 2',
			subItems: [
				{
					name: '2.1',
				},
				{
					name: '2.2',
				},
			],
		},
	];

	return (
		<div>
			<NestedList items={sections} />
		</div>
	);
};

export { TutorialsView };
