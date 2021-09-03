import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LocalStorageService } from 'services';
import { userLoginData } from 'utils/store/atoms';

const logOutWithGoogle = () => {
	const [userData, setUserData] = useRecoilState(userLoginData);
	const history = useHistory();
	const storage = LocalStorageService();

	return {
		onLogoutSuccess() {
			storage.remove('authToken');
			setUserData(
				Object.assign({}, userData, {
					isLoggedIn: false,
					username: '',
					JWT: '',
				})
			);
			history.replace('/');
			return null;
		},

		onFailure() {
			return 'Logout failed, try again';
		},
	};
};
export { logOutWithGoogle };
