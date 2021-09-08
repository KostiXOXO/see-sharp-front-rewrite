import { forgotPassword } from 'web/webMethods/requests/auth';

async function Reset(email: string) {
	try {
		return await forgotPassword(email)
			.then(() => {
				return null;
			})
			.catch((err) => {
				if (err.response.status >= 500) {
					return ['Unexpected error has occured, try refreshing page or contact admin'];
				} else {
					return null;
				}
			});
	} catch (error) {
		return ['Server is probably down'];
	}
}

export { Reset as resetPass };
