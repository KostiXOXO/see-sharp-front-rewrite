import React from 'react';
import './DifficultyLevelBar.scss';

export const DifficultyLevel = ({ level }: { level: number }): JSX.Element => {
	level = level / 2;
	const full_nr = level > 5 ? 5 : Math.floor(level);
	const half_nr = full_nr === level || full_nr === 5 ? 0 : 1;
	const items = [];

	for (let i = 0; i < full_nr; i++) {
		items.push(<div className="level__full"></div>);
	}

	for (let i = 0; i < half_nr; i++) {
		items.push(
			<div className="level__half">
				<div className="level__half__sep"></div>
			</div>
		);
	}

	for (let i = 0; i < 5 - (full_nr + half_nr); i++) {
		items.push(<div className="level__empty"></div>);
	}

	return <div className="level">{items}</div>;
};
