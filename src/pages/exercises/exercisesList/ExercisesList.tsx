import React, { useEffect, useState } from 'react';
import './ExercisesList.scss';
import Pagination from '@material-ui/lab/Pagination';
import { ThemeProvider } from 'utils/helpers';
import { IExercise } from 'utils/interfaces/exercises';
import { getExercises } from 'web/webMethods/requests/exercises';
import { ExercisesListItem } from '../exercisesListItem/ExercisesListItem';

const ExercisesList = (): JSX.Element => {
	const [exercises, setExercises] = useState([]);
	const [pageCount, setPageCount] = useState(10);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async () => {
			const result = await getExercises(1);
			setPage(1);
			setExercises(result.data);
		})();
	}, []);

	return (
		<div>
			<div className="exercisesList">
				{exercises?.map((exercise: IExercise, key: number) => {
					console.log(exercise);
					return <ExercisesListItem exercise={exercise} key={key} />;
				})}
			</div>
			<div className="pagination">
				<ThemeProvider>
					<Pagination count={pageCount} color="secondary" />
				</ThemeProvider>
			</div>
		</div>
	);
};

export { ExercisesList };
