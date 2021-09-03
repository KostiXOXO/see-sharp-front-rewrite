import React, { useEffect } from 'react';
import { BrowserRouter as Router, Redirect, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LocalStorageService } from 'services';
import { useToken } from 'utils/hooks/useAuthToken';
import { userLoginData } from 'utils/store/atoms';
import { getCurrentUser } from 'web/webMethods/requests/users';
import { RouterSwitch } from './routing';

const App = () => {
	// const storage = LocalStorageService();
	// const [userData, setUserData] = useRecoilState(userLoginData);
	// const [token] = useToken();
	// const isUserLoggedIn = !!token;
	// const history = useHistory();
	// useEffect(() => {
	// 	(async () => {
	// 		const token = storage.get('authToken');
	// 		if (token) {
	// 			const { data } = await getCurrentUser();
	// 			return setUserData(
	// 				Object.assign({}, userData, {
	// 					isLoggedIn: true,
	// 					username: data,
	// 				})
	// 			);
	// 		}
	// 		return <Redirect to="/" />;
	// 	})();
	// }, []);

	return (
		<Router>
			<RouterSwitch />
		</Router>
	);
};

export default App;
