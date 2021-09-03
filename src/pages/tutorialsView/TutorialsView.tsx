import React, { useEffect, useState } from 'react';
import { get } from 'utils/web/webMethods/adapters';
import { SectionsList } from './sectionsList';
import { Section, Tutorial } from './sectionsList/common';
import { SubsectionView } from './subsectionView';
import './TutorialsView.scss';

const TutorialsView = (): JSX.Element => {
	const [sections, setSections] = useState<Section[]>([]);
	const [tutorial, setTutorial] = useState<Tutorial | undefined>(undefined);

	useEffect(() => {
		(async () => {
			const result = await get('/api/tutorial/section');
			setSections(result.data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const result = await get('/api/tutorial/' + (tutorial != undefined ? tutorial?.id : 1));
			console.log(result.data);
			setTutorial(result.data);
		})();
	}, []);

	const foo = () => {
		(async () => {
			const result = await get('/api/tutorial/' + (tutorial != undefined ? tutorial?.id : 1));
			console.log(result.data);
			setTutorial(result.data);
		})();
	};

	return (
		<div className="tutorialsView">
			<div className="sectionsList">
				<div>
					<SectionsList sections={sections} foo={foo} />
				</div>
			</div>
			<div className="subsectionView">
				<SubsectionView />
			</div>
		</div>
	);
};

export { TutorialsView };
