import React, { lazy } from 'react';
import { PrivateRoute } from 'web/route-extensions/PrivateRoute';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import LandingPage from 'pages/landing-page';
export const RouterSwitch = ({ children }: { children?: JSX.Element }): JSX.Element => {
	// const LandingPage = lazy(() => import('pages/landing-page'));
	return (
		<Switch>
			<Route
				path="/"
				exact
				render={() => {
					return <LandingPage />;
				}}
			/>
			{children}
		</Switch>
	);
};
