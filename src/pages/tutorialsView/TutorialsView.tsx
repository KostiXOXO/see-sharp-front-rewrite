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

	useEffect(() => {
		(async () => {
			const result = await get('/api/tutorial/section');
			setSections(result.data);
		})();
	}, []);

	const handleActiveSubsection = (id: number) => {
		(async () => {
			const result = await get('/api/tutorial/' + id);
			document.getElementById('activeSubsection')?.scrollTo(0, 0);
			setTutorial(result.data);
		})();
	};

	const handlePrevBtnClick = () => {
		handleActiveSubsection(getPrevTutorialId() ?? 1);
	};

	const handleNextBtnClick = () => {
		handleActiveSubsection(getNextTutorialId() ?? 1);
	};

	const getNextTutorialId = () => {
		if (tutorial === undefined) {
			return null;
		}

		const next = tutorial?.id + 1;
		const cnt = sections.reduce((sum, section) => (sum = sum + section.tutorials.length), 0);

		return next <= cnt ? next : null;
	};

	const getPrevTutorialId = () => {
		if (tutorial === undefined) {
			return null;
		}

		const prev = tutorial?.id - 1;
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
						{getPrevTutorialId() && <BaseButton text=" < Previous" onClick={handlePrevBtnClick} />}
					</div>
					<div className="navButtons__next">
						{getNextTutorialId() && <BaseButton text="Next > " onClick={handleNextBtnClick} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export { TutorialsView };
