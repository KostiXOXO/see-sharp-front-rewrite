import React, { useEffect } from 'react';
import { Redirect, Route, RouteComponentProps, Switch, useHistory } from 'react-router-dom';
import { LocalStorageService } from 'services';
import { getCurrentUser } from 'web/webMethods/requests/users';
import { useRecoilState } from 'recoil';
import { userLoginData } from 'utils/store/atoms';
import { routes } from '.';
import { PrivateRoute } from 'web/routeExtensions/PrivateRoute';
import { Header } from 'components/header';
import { useToken } from 'utils/hooks/useAuthToken';
import './Router.scss';

const RouterSwitch = ({ children }: { children?: JSX.Element }): JSX.Element => {
	const storage = LocalStorageService();
	const [userData, setUserData] = useRecoilState(userLoginData);
	const [token] = useToken();
	const isUserLoggedIn = !!token;
	const history = useHistory();
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
		<div className="app">
			<div className="app__header">
				{history.location.pathname !== '/' && <Header isUserLoggedIn={isUserLoggedIn} />}
			</div>
			<div className="app__body">
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
			</div>
		</div>
	);
};

export { RouterSwitch };
