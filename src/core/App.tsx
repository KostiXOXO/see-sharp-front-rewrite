import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { get } from 'web/actions';
import { userLoginData } from 'store/atoms';
import { RouterSwitch } from './RouterSwitch';

const App = () => {
	// const { isLoggedIn, username } = useRecoilValue(userLoginData);
	// const [userData, setUserData] = useRecoilState(userLoginData);

	// useEffect(() => {
	// 	localStorage.getItem('authToken') &&
	// 		get('/api/account/me')
	// 			.then(({ data }) => {
	// 				return setUserData(
	// 					Object.assign({}, userData, {
	// 						isLoggedIn: true,
	// 						username: data,
	// 					})
	// 				);
	// 			})
	// 			.catch(() => {
	// 				//throw error, couldn't get user data using authToken
	// 				return;
	// 			});
	// }, []);

	return (
		<div className="app">
			<RouterSwitch />
		</div>
	);
};

export { App };
// {!isLoggedIn ? (
// 	<RouterSwitch>
// 		<LandingPage />
// 	</RouterSwitch>
// ) : (
// 	<>
// 		<header className="app__header">
// 			{/* <Navbar loggedIn={isLoggedIn} username={username} /> */}
// 		</header>
// 		<main className="app__main">
// 			<RouterSwitch />
// 		</main>
// 	</>
// )}
