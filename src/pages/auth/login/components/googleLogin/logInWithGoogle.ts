import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginThroughtGoogle } from 'utils/web/webMethods/requests';
import { userLoginData } from 'utils/store/atoms';
import { LocalStorageService } from 'utils/services';

const logInWithGoogle = () => {
	const [userData, setUserData] = useRecoilState(userLoginData);

	const history = useHistory();
	const storage = LocalStorageService();

	return {
		async onSuccess({ profileObj }: any) {
			const data = {
				emailAddress: profileObj.email,
				username: profileObj.givenName,
				googleId: profileObj.googleId,
				name: 'Number 12',
				surname: 'Cock',
			};

			return loginThroughtGoogle(data)
				.then((result) => {
					setUserData(
						Object.assign({}, userData, {
							isLoggedIn: true,
							username: data.username,
							JWT: result.data,
						})
					);
					storage.set('authToken', result.data);
					history.push('/');
					return result;
				})
				.catch(() => {
					return 'Something went wrong';
				});
		},
		onFailure(res: any) {
			return res;
		},
	};
};

export { logInWithGoogle };
