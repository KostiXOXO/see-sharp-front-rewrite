import React from 'react';
import './Loading.scss';
interface IProps {
	text: string;
}
const Loading = ({ text }: IProps) => {
	return (
		<div className="spinnerContainer">
			<div className="spinner">
				<span className="spinner-inner-1"></span>
				<span className="spinner-inner-2"></span>
				<span className="spinner-inner-3"></span>
			</div>
			<span>{text}...</span>
		</div>
	);
};

export { Loading };
