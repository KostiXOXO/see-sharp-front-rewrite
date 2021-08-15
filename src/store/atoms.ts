import { atom } from 'recoil';

export const userLoginData = atom({
	key: 'userLoginData',
	default: {
		isLoggedIn: false,
		username: '',
		JWT: '',
	},
});
