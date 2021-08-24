import { useHistory } from 'react-router-dom';
import { IRegisterData, ILoginData } from 'utils/interfaces/auth';
import { loginUser, registerUser } from 'utils/web/webMethods/requests';
import { LocalStorageService } from '.';

const AuthService = () => {
	return {
		async login({ email, password }: ILoginData): Promise<string | null> {
			const localStorage = LocalStorageService();
			const loginResponseData = await loginUser({ email, password });
			const token = loginResponseData.data.token;

			if (loginResponseData.data.statusCode === 200) {
				localStorage.set('authToken', token);
				return null;
			}

			const error = loginResponseData.data.statusCode > 400 ? 'Bad request' : 'Server down';
			throw new Error(`Error has occured ${error}`);
		},

		async register({ username, password, passwordRetyped, email }: IRegisterData) {
			const history = useHistory();

			const userRegistrationData = {
				username,
				password,
				passwordRetyped,
				email,
			};

			await registerUser(userRegistrationData).then(() => {
				history.push('/login');
			});
		},
	};
};

export { AuthService };
