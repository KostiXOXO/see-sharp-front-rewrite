import { get } from 'utils/web/webMethods/adapters';
import { MarkdownCompiler } from 'components/markdownCompiler';
import React, { useEffect, useState } from 'react';
import './Test.scss';

interface ITutorial {
	id: number;
	name: string;
	description: string;
	content: string;
}

interface ISection {
	name: string;
	tutorials: ITutorial[];
}

const Test = (): JSX.Element => {
	const [tutorials, setTutorials] = useState(['']);

	useEffect(() => {
		(async () => {
			const sections = await get('/api/tutorial/section')
				.then((res) => {
					console.log(res);
					return res.data.map((section: ISection) =>
						section.tutorials.map((tutorial: ITutorial) => tutorial)
					);
				})
				.catch((err) => console.log(err));

			setTutorials([]);

			sections?.map((section: ISection) => {
				Object.values(section).map(async (tutorial: ITutorial) => {
					const res = await get(`/api/tutorial/${tutorial.id}`);
					return setTutorials((result) => [...result, res.data.content]);
				});
			});
		})();
	}, []);

	return (
		<div className="testContainer">
			{tutorials?.map((res: string, key) => (
				<MarkdownCompiler key={key} markdown={res} />
			))}
		</div>
	);
};

export { Test };
