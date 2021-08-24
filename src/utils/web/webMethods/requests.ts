import { IRegisterData, IGoogleLoginData, ILoginData } from 'utils/interfaces/auth';
import { get, post } from './adapters';

const getCurrentUser = async () => {
	const userData = await get('/api/account/me');
	return userData;
};

const loginUser = async ({ email, password }: ILoginData) => {
	const loginResponseData = await post('/api/account/login', { email, password });
	return loginResponseData;
};

const loginThroughtGoogle = async ({ emailAddress, username, googleId }: IGoogleLoginData) => {
	const data = {
		emailAddress,
		username,
		googleId,
	};
	const loginResponseData = await post('/api/account/login/google', data);

	return loginResponseData;
};

const registerUser = async ({ username, password, passwordRetyped, email }: IRegisterData) => {
	const registerResponseData = await post('/api/account/register', { username, password, passwordRetyped, email });
	return registerResponseData;
};

const getTutorialsList = async () => {
	const tutorialsList = await get('/api/tutorials');
	return tutorialsList;
};

export { getCurrentUser, registerUser, loginUser, loginThroughtGoogle, getTutorialsList };
