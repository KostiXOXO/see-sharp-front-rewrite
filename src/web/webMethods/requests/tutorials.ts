import { get } from '../adapters';

const getTutorialsList = async () => {
	return await get('/api/tutorials');
};

export { getTutorialsList };
