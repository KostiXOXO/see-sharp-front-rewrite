import React from 'react';

const GoogleLoginButton = () => {
	const signIn = () => {
		console.log('cock');
	};
	return (
		<button onClick={signIn} className="button">
			<img src="assets/google.svg" alt="LogInWithGoogle" className="icon" />
		</button>
	);
};

export { GoogleLoginButton };
