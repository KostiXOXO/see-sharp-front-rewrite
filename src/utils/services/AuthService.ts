import { IRegisterData, ILoginData } from 'utils/interfaces/auth';
import { forgotPassword, loginUser, registerUser } from 'utils/web/webMethods/requests';
import { LocalStorageService } from '.';

async function login({ email, password }: ILoginData): Promise<string | null> {
	const localStorage = LocalStorageService();
	const loginResponseData = await loginUser({ email, password });
	const token = loginResponseData.data;

	if (loginResponseData.status === 200) {
		localStorage.set('authToken', token);
		return null;
	}
	//w body response jest wiaodmość że invalid username or pass ale już post do serwera throwuje error i kończy wywołanie funkcji, jak

	const error = loginResponseData.status > 400 ? 'Bad request' : 'Server down';
	throw new Error(`Error has occured ${error}`);
}

async function register({ username, password, passwordRetyped, email }: IRegisterData, history: any) {
	const userRegistrationData = {
		username,
		password,
		passwordRetyped,
		email,
	};

	await registerUser(userRegistrationData).then(() => {
		history.push('/login');
	});
}
async function reset(email: string) {
	try {
		return await forgotPassword(email)
			.then(() => {
				return null;
			})
			.catch((err) => {
				if (err.response.status >= 500) {
					return ['Server is probably down'];
				} else {
					return null;
				}
			});
	} catch (error) {
		return ['Unexpected error has occured, try refreshing page or contact admin'];
	}
}

const AuthService = () => {
	return {
		login,
		register,
		reset,
	};
};

export { AuthService };
