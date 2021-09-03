import { IRegisterData } from 'utils/interfaces/auth';
import { registerUser } from 'utils/web/webMethods/requests';

async function Register({ username, password, passwordRetyped, email }: IRegisterData, history: any) {
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

export { Register as register };
