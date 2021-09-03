import { useState } from 'react';
import { LocalStorageService } from 'utils/services';

export const useToken = () => {
	const storage = LocalStorageService();

	const [token, setTokenInternal] = useState(() => {
		return storage.get('authToken');
	});

	const setToken = (newToken: string) => {
		storage.set('authToken', newToken);
		setTokenInternal(newToken);
	};

	return [token, setToken];
};
