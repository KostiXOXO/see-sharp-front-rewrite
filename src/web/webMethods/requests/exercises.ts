import { get } from '../adapters';

const getExercises = async (page: number) => {
	return await get('/api/exercise/page/' + page);
};

export { getExercises };
