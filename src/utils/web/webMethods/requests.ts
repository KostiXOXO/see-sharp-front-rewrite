import { IRegisterData, IGoogleLoginData, ILoginData } from 'utils/interfaces/auth';
import { get, post, put } from './adapters';

const getCurrentUser = async () => {
	return await get('/api/account/me');
};

const loginUser = async ({ email, password }: ILoginData) => {
	return await post('/api/account/login', { emailAddress: email, password });
};

const loginThroughtGoogle = async ({ emailAddress, username, googleId, name, surname }: IGoogleLoginData) => {
	const data = {
		emailAddress,
		username,
		googleId,
		name,
		surname,
	};

	return await post('/api/account/login/google', data);
};

const registerUser = async ({ username, password, passwordRetyped, email }: IRegisterData) => {
	return await post('/api/account/register', {
		userName: username,
		password,
		retypedPassword: passwordRetyped,
		emailAddress: email,
	});
};

const verifyEmail = async (guid: string) => {
	return await put(`/api/account/verify/${guid}`, {});
};

const forgotPassword = async (emailAddress: string) => {
	await post('/api/account/forgotpassword', { emailAddress });
};

const getTutorialsList = async () => {
	return await get('/api/tutorials');
};

export { getCurrentUser, registerUser, loginUser, loginThroughtGoogle, getTutorialsList, forgotPassword, verifyEmail };
