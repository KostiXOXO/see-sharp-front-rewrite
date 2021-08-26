import React, { useEffect, useState } from 'react';
import { get } from 'utils/web/webMethods/adapters';
import { SectionsList } from './sectionsList';
import { Section } from './sectionsList/common';
import './TutorialsView.scss';

const TutorialsView = (): JSX.Element => {
	const [sections, setSections] = useState<Section[]>([]);

	useEffect(() => {
		(async () => {
			const result = await get('/api/tutorial/section');
			setSections(result.data);
		})();
	}, []);

	return (
		<div className="tutorialsView">
			<div className="sectionsList">
				<div>
					<SectionsList sections={sections} />
				</div>
			</div>
			<div className="subsectionView">subsection View</div>
		</div>
	);
};

export { TutorialsView };
