import React, { useEffect, useState } from 'react';
import { Loading } from 'components/loading/Loading';
import { IExcerciseComment } from 'utils/interfaces/excercise';
import { getExcerciseComments } from 'web/webMethods/requests/excercises';
import { Comment } from '../.';

import './Comments.scss';

interface IProps {
	exId: string;
}

const Comments = ({ exId }: IProps) => {
	const [comments, setComments] = useState<IExcerciseComment[] | null>(null);

	useEffect(() => {
		(async () => {
			const comments = await getExcerciseComments(exId);
			setComments(comments.data);
		})();
	}, [exId]);

	return !comments ? (
		<Loading text="Loading comments" />
	) : (
		<div>
			{comments.map((comment, key) => {
				<Comment key={key} comment={comment} />;
			})}
		</div>
	);
};

export { Comments };
