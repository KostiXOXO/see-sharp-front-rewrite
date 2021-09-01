const validateEmail = (email: string): boolean => {
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(String(email).toLowerCase());
};

const validatePassword = (password: string): boolean => {
	const passwordRegex = /.{12,}/;
	return passwordRegex.test(String(password));
};

const validateUsername = (username: string): boolean => {
	const usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
	return usernameRegex.test(String(username)) && username.length >= 6;
};

export { validateEmail, validatePassword, validateUsername };
