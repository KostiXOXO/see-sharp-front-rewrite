import { get } from '../adapters';

const getCurrentUser = async () => {
	return await get('/api/account/me');
};

export { getCurrentUser };
