import React, { useEffect, useState } from 'react';
import { BaseButton } from 'components/baseButton';
import { useParams } from 'react-router';
import { IExcercise } from 'utils/interfaces/excercise';
import { getExcercise } from 'web/webMethods/requests/excercises';
import { Comments } from './components';
import { Examples } from './components';
import { DifficultyLevel } from 'components/difficultyLevelBar/DifficultyLevelBar';
import './Excercise.scss';
import upvote from 'assets/upvote.svg';
import downvote from 'assets/downvote.svg';

interface IParams {
	exId: string;
}

const Excercise = () => {
	const { exId } = useParams<IParams>();

	const [excercise, setExcercise] = useState<IExcercise | null>({
		name: 'Ex title',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eius quaerat neque aspernatur hic! Et aperiam, magni ullam quas ad quisquam ea est laudantium error earum soluta consequuntur dolor sed recusandae impedit a nemo ipsa neque? Et harum dolor fugit? Eum modi accusamus, optio tempore corporis veniam minima voluptas aspernatur, omnis iusto ducimus quidem deleniti deserunt, accusantium laboriosam eius id esse veritatis dicta quaerat doloremque perferendis fuga error. Numquam sequi impedit fugiat excepturi error rem? Exercitationem necessitatibus, quibusdam amet ex soluta facere quae deleniti atque. Atque architecto excepturi necessitatibus perferendis et. Suscipit ducimus quia maxime, quos rem soluta nesciunt minima?',
		creatorName: 'creator',
		examples: [
			{
				input: 'inp',
				output: 'out',
			},
			{
				input: 'cock',
				output: 'cocker',
			},
			{
				input: 'dick',
				output: 'dickens',
			},
			{
				input: 'number 12',
				output: 'cock',
			},
		],
		difficultyLevel: 7,
		rating: {
			upvotes: 69,
			downvotes: 420,
		},
	});

	useEffect(() => {
		(async () => {
			const ex = await getExcercise(exId);
			setExcercise(ex.data);
		})();
	}, [exId]);

	return (
		excercise && (
			// <div className="excerciseContainer">
			// 	<div className="excercise">
			// 		<div className="excercise__header">
			// 			<div className="excercise__header__name">{excercise.name}</div>
			// 		</div>
			// 		<div className="excercise__body">
			// 			<div className="excercise__body__description">{excercise.name}</div>
			// 			<div className="excercise__body__examples">
			// 				<Examples examples={excercise.examples} />
			// 			</div>
			// 			<div className="excercise__body__callToAction">
			// 				<span>Does this excercise seem fun or challenging? Give it a try!</span>
			// 				<BaseButton text="Try solving" style="outlined" />
			// 			</div>
			// 		</div>
			// 		<div className="excercise__comments">
			// 			<Comments exId={exId} />
			// 		</div>
			// 	</div>
			// </div>
			<div className="excerciseContainer">
				<div className="excercise">
					<div className="excercise__body">
						<div className="title">
							<h2>{excercise.name}</h2>
						</div>
						<div className="description"></div>
						{excercise.description}
					</div>
					<div className="excercise__info">
						<div className="creationDate">
							<span>Created: 2021/09/16</span>
						</div>
						<div className="author">
							<span>Creator:</span>
							<span>{excercise.creatorName}</span>
						</div>
						<div className="difficulty">
							<span>Difficulty:</span>
							<DifficultyLevel level={7} />
						</div>
					</div>
					<div className="excercise__examples">
						<Examples examples={excercise.examples} />
					</div>
					<div className="excercise__rating">
						<div className="rating__upvotes">
							<span>{excercise.rating.upvotes}</span>
							<BaseButton style="outlined" size="small" icon={<img className="upvote" src={upvote} />} />
						</div>
						<div className="rating__downvotes">
							<BaseButton
								style="outlined"
								size="small"
								icon={<img className="downvote" src={downvote} />}
							/>
							<span>{excercise.rating.downvotes}</span>
						</div>
					</div>
					<div className="excercise__callToAction">
						<span>Does this excercise seem fun or challenging?</span>
						<BaseButton text="Give it a try!" />
					</div>
				</div>
				<div className="comments">
					<Comments exId={exId} />
				</div>
			</div>
		)
	);
};

export { Excercise };
