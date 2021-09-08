import { get } from '../adapters';

const getTutorialsList = async () => {
	return await get('/api/tutorial/section');
};

const getTutorial = async (id: number) => {
	return await get(`'/api/tutorial/${id}`);
};

export { getTutorialsList, getTutorial };
