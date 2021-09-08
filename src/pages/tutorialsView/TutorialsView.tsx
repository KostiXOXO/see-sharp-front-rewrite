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
	const [tutorial, setTutorial] = useState<Tutorial | null>(null);

	useEffect(() => {
		(async () => {
			const result = await get('/api/tutorial/section');
			setSections(result.data);
			handleSubsectionChange(1);
		})();
	}, []);

	const handleSubsectionChange = (id: number | null) => {
		id &&
			(async () => {
				const result = await get('/api/tutorial/' + id);
				document.getElementById('activeSubsection')?.scrollTo(0, 0);
				setTutorial(result.data);
			})();
	};

	const handlePrevBtnClick = () => {
		tutorial && handleSubsectionChange(getPrevId(tutorial.id));
	};

	const handleNextBtnClick = () => {
		tutorial && handleSubsectionChange(getNextId(tutorial.id));
	};

	const getSectionsCnt = () => {
		return sections.reduce((sum, section) => (sum = sum + section.tutorials.length), 0);
	};

	const getNextId = (id: number) => {
		const next = id + 1;
		return next <= getSectionsCnt() ? next : null;
	};

	const getPrevId = (id: number) => {
		const prev = id - 1;
		return prev > 0 ? prev : null;
	};

	return (
		<div className="tutorialsView">
			<div className="sectionsList">
				<div>
					<SectionsList
						sections={sections}
						activeSubsection={tutorial?.id ?? null}
						handleSubsectionChange={handleSubsectionChange}
					/>
				</div>
			</div>
			<div id="activeSubsection" className="subsectionView">
				<SubsectionView tutorial={tutorial} />
				<div className="navButtons">
					<div className="navButtons__prev">
						{tutorial && getPrevId(tutorial?.id) && (
							<BaseButton text=" < Previous" onClick={handlePrevBtnClick} />
						)}
					</div>
					<div className="navButtons__next">
						{tutorial && getNextId(tutorial?.id) && (
							<BaseButton text="Next > " onClick={handleNextBtnClick} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export { TutorialsView };
