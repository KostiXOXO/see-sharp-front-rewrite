import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { locationData } from 'utils/store/atoms';

export const useIsHome = (): { isHome: boolean } => {
	const history = useHistory();
	const [data, setData] = useRecoilState(locationData);
	const { isHome } = useRecoilValue(locationData);
	useEffect(() => {
		setData(
			Object.assign({}, data, {
				isHome: history.location.pathname === '/',
			})
		);
	}, [history.location.pathname]);

	return { isHome };
};
