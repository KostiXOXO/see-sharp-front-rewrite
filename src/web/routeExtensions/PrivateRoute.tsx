import React from 'react';
import { Redirect } from 'react-router-dom';
import { LocalStorageService } from 'services';

const isUserLoggedIn = () => {
	const storage = LocalStorageService();
	try {
		return storage.get('authToken') !== null;
	} catch (error) {
		return null;
	}
};

export const PrivateRoute = ({ children }: { children: any }): JSX.Element => {
	const isuserLoggedIn = isUserLoggedIn();
	return isuserLoggedIn ? <>{children}</> : <Redirect to="/login" />;
};
