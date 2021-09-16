import { IExcercise, IExcerciseComment } from 'utils/interfaces/excercise';
import { get } from '../adapters';

const getExcercise = async (id: string): Promise<{ data: IExcercise }> => {
	return await get(`/api/excercise/${id}`);
};

const getExcerciseComments = async (id: string): Promise<{ data: IExcerciseComment[] }> => {
	return await get(`/api/excercise/comments/${id}`);
};
export { getExcercise, getExcerciseComments };
