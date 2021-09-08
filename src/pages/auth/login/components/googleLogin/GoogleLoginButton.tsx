import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { clientId } from 'utils/configs/google';
import { logInWithGoogle } from './logInWithGoogle';
import GoogleLogo from 'assets/google.svg';

const GoogleLoginButton = () => {
	const { onSuccess, onFailure } = logInWithGoogle();
	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: false,
	});

	return (
		<button onClick={signIn} className="button">
			<img src={GoogleLogo} alt="SignInWithGoogle" className="icon" />
		</button>
	);
};

export { GoogleLoginButton };
