import React, { useEffect, useState } from 'react';
import { get } from 'utils/web/webMethods/adapters';
import { SectionsList } from './sectionsList';
import { Section } from './sectionsList/common';
import { Tutorial } from './subsectionView/common/Tutorial';
import { SubsectionView } from './subsectionView';
import './TutorialsView.scss';
import { BaseButton } from 'components/baseButton';

const TutorialsView = (): JSX.Element => {
	const [sections, setSections] = useState<Section[]>([]);
	const [tutorial, setTutorial] = useState<Tutorial | undefined>(undefined);
	const [tutorialId, setTutorialId] = useState(1);

	useEffect(() => {
		(async () => {
			const result = await get('/api/tutorial/section');
			setSections(result.data);
			handleActiveSubsection(1);
		})();
	}, []);

	const handleActiveSubsection = (id: number | null) => {
		id &&
			(async () => {
				const result = await get('/api/tutorial/' + id);
				document.getElementById('activeSubsection')?.scrollTo(0, 0);
				setTutorialId(id);
				setTutorial(result.data);
			})();
	};

	const handlePrevBtnClick = () => {
		handleActiveSubsection(getPrevId());
	};

	const handleNextBtnClick = () => {
		handleActiveSubsection(getNextId());
	};

	const getSectionsCnt = () => {
		return sections.reduce((sum, section) => (sum = sum + section.tutorials.length), 0);
	};

	const getNextId = () => {
		const next = tutorialId + 1;
		return next <= getSectionsCnt() ? next : null;
	};

	const getPrevId = () => {
		const prev = tutorialId - 1;
		return prev > 0 ? prev : null;
	};

	return (
		<div className="tutorialsView">
			<div className="sectionsList">
				<div>
					<SectionsList sections={sections} handleActiveSubsection={handleActiveSubsection} />
				</div>
			</div>
			<div id="activeSubsection" className="subsectionView">
				<SubsectionView tutorial={tutorial} />
				<div className="navButtons">
					<div className="navButtons__prev">
						{getPrevId() && <BaseButton text=" < Previous" onClick={handlePrevBtnClick} />}
					</div>
					<div className="navButtons__next">
						{getNextId() && <BaseButton text="Next > " onClick={handleNextBtnClick} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export { TutorialsView };
