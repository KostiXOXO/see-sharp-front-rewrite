import { atom } from 'recoil';

export const userLoginData = atom({
	key: 'userLoginData',
	default: {
		isLoggedIn: false,
		username: '',
		JWT: '',
	},
});

export const locationData = atom({
	key: 'locationData',
	default: {
		isHome: !!(location.pathname === '/'),
	},
});
