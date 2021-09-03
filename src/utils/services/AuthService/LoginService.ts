import { ILoginData } from 'utils/interfaces';
import { loginUser } from 'utils/web/webMethods/requests';
import { LocalStorageService } from '..';

async function Login({ email, password }: ILoginData): Promise<string | null> {
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

export { Login as login };
