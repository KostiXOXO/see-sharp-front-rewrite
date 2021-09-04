import { IRegisterData, IGoogleLoginData, ILoginData, IPasswordChange } from 'utils/interfaces/auth';
import { post, put } from '../adapters';

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

const resetPassword = async ({
	password,
	passwordRetyped,
	changePasswordGuid,
}: IPasswordChange & { changePasswordGuid: string }) => {
	const data = { newPassword: password, retypedNewPassword: passwordRetyped, changePasswordGuid };
	await put('/api/account/passwordreset', data);
};

export { registerUser, loginUser, loginThroughtGoogle, forgotPassword, verifyEmail, resetPassword };
