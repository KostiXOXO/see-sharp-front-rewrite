import React, { useEffect } from 'react';
import { Route, RouteComponentProps, Switch, useHistory } from 'react-router-dom';
import { getCurrentUser } from 'web/webMethods/requests/users';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userLoginData, locationData } from 'utils/store/atoms';
import { routes } from '.';
import { PrivateRoute } from 'web/routeExtensions/PrivateRoute';
import { Header } from 'components/header';
import { useToken } from 'utils/hooks/useAuthToken';
import './Router.scss';

const RouterSwitch = ({ children }: { children?: JSX.Element }): JSX.Element => {
	const history = useHistory();

	const { isLoggedIn } = useRecoilValue(userLoginData);
	const [userData, setUserData] = useRecoilState(userLoginData);
	const [token] = useToken();

	useEffect(() => {
		(async () => {
			if (token) {
				const { data } = await getCurrentUser();
				setUserData(
					Object.assign({}, userData, {
						isLoggedIn: true,
						username: data,
					})
				);
				// return history.push('/tutorials');
				return;
			}
			return;
		})();
	}, []);

	return (
		<div className="app">
			<div className="app__header">
				<Header isUserLoggedIn={isLoggedIn} />
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
