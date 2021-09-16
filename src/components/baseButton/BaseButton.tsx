import React from 'react';

import { DefaultButtonProps } from '.';
import './BaseButton.scss';
import { Link } from 'react-router-dom';

const BaseButton = ({
	onClick,
	text = '',
	type = 'rounded',
	size = 'medium',
	style = 'filled',
	icon,
	additionalClass,
	linkTo,
	disabled,
}: DefaultButtonProps): JSX.Element => {
	return linkTo ? (
		<Link to={linkTo} replace={location.pathname == linkTo}>
			<button
				className={['baseButton', type, size, style, additionalClass].join(' ')}
				disabled={disabled}
				onClick={onClick}
			>
				{<span>{[icon, text]}</span>}
				{/* {<span>{text}</span>} */}
			</button>
		</Link>
	) : (
		<button
			className={['baseButton', type, size, style, additionalClass].join(' ')}
			disabled={disabled}
			onClick={onClick}
		>
			{<span>{[icon, text]}</span>}
			{/* {<span>{text}</span>} */}
		</button>
	);
};

export default BaseButton;
