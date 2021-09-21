import React from 'react';
import './ExercisesListItem.scss';
import { IExercise } from 'utils/interfaces/exercises';

const ExercisesListItem = ({ exercise }: { exercise: IExercise }): JSX.Element => {
	return (
		<div>
			<div>{exercise.id}</div>
			<div>{exercise.name}</div>
			<div>{exercise.creatorName}</div>
			<div>{exercise.solvedByCount}</div>
		</div>
	);
};

export { ExercisesListItem };
