import axios, { AxiosInstance, AxiosResponse } from 'axios';

const putAuthToken = (instance: AxiosInstance) => {
	const authToken = localStorage.getItem('authToken');

	instance.interceptors.request.use(
		(req) => {
			// const authToken = useRecoilValue(userLoginData).JWT;
			['tutorials', 'tutorial', 'excercises', 'profile', 'classrooms', 'compilation', 'account', 'exercise'].some(
				(item) => req.url?.includes(item)
			) && (req.headers['Authorization'] = `Bearer ${authToken}`);

			return req;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
};

function returnAxiosInstance() {
	return axios.create({ baseURL: 'https://localhost:5001' });
}

export function get(url: string): Promise<AxiosResponse> {
	const instance = returnAxiosInstance();
	putAuthToken(instance);
	return instance.get(url);
}

export function post(url: string, requestData: Record<string, unknown>): Promise<AxiosResponse> {
	const instance = returnAxiosInstance();
	!url.includes('login') && putAuthToken(instance);
	return instance.post(url, requestData);
}

export function put(url: string, requestData: Record<string, unknown>): Promise<AxiosResponse> {
	const instance = returnAxiosInstance();
	putAuthToken(instance);
	return instance.put(url, requestData);
}
