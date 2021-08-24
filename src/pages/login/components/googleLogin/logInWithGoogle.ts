import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginThroughtGoogle } from 'utils/web/webMethods/requests';
import { useGoogleLogin } from 'react-google-login';
import { clientId } from './config';
import { userLoginData } from 'utils/store/atoms';

const logInWithGoogle = () => {
	const [userData, setUserData] = useRecoilState(userLoginData);

	const history = useHistory();

	const onFailure = (res: any) => {
		return res;
	};

	const onSuccess = async ({ profileObj }: any) => {
		const data = {
			emailAddress: profileObj.email,
			username: profileObj.givenName,
			googleId: profileObj.googleId,
		};

		return await loginThroughtGoogle(data)
			.then((result) => {
				setUserData(
					Object.assign({}, userData, {
						isLoggedIn: true,
						username: data.username,
						JWT: result.data,
					})
				);
				localStorage.setItem('authToken', result.data);
				history.push('/');
				return result;
			})
			.catch(() => {
				return 'Something went wrong';
			});
	};

	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: false,
	});
};

export { logInWithGoogle };
