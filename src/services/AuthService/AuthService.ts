import { login } from './LoginService';
import { register } from './RegisterService';
import { resetPass } from './ResetPasswordService';

const AuthService = () => {
	return {
		login,
		register,
		resetPass,
	};
};

export { AuthService };
