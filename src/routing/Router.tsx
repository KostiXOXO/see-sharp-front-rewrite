import React, { useEffect } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { LocalStorageService } from 'services';
import { getCurrentUser } from 'web/webMethods/requests/users';
import { useRecoilState } from 'recoil';
import { userLoginData } from 'utils/store/atoms';
import { routes } from '.';
import { PrivateRoute } from 'web/routeExtensions/PrivateRoute';

const RouterSwitch = ({ children }: { children?: JSX.Element }): JSX.Element => {
	const storage = LocalStorageService();
	const [userData, setUserData] = useRecoilState(userLoginData);

	useEffect(() => {
		(async () => {
			const token = storage.get('authToken');
			if (token) {
				const { data } = await getCurrentUser();
				return setUserData(
					Object.assign({}, userData, {
						isLoggedIn: true,
						username: data,
					})
				);
			}
			return <Redirect to="/" />;
		})();
	}, []);

	return (
		<Switch>
			{routes.map((route, key) => (
				<Route
					key={key}
					path={route.path}
					exact={route.exact}
					render={(routeProps: RouteComponentProps<any>) => {
						if (route.protected)
							return (
								<PrivateRoute>
									<route.component {...routeProps} />
								</PrivateRoute>
							);

						return <route.component {...routeProps} />;
					}}
				/>
			))}
			{children}
		</Switch>
	);
};

export { RouterSwitch };
