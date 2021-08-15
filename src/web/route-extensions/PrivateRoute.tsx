import React from 'react';
import { Redirect } from 'react-router-dom';

const performValidationHere = () => {
	try {
		return localStorage.getItem('authToken') !== null;
	} catch (error) {
		return null;
	}
};

export const PrivateRoute = ({ children }: { children: any }): JSX.Element => {
	const condition = performValidationHere();
	return condition ? <>{children}</> : <Redirect to="/login" />;
};
