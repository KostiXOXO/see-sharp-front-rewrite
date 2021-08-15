import React from 'react';
import { BaseButton } from 'components/shared/BaseButton';
import './LandingPage.scss';

export const MainFrame = (): JSX.Element => {
	return (
		<div className="mainFrame">
			<div className="mainFrame__contentArea">
				<h1>
					<span>Learn, code, and </span>
					<span>See Sharp</span>
				</h1>
				<img src="icons/logo.svg" alt="logo" />
				<span className="encourage">
					Use our base of knowledge and practical excercises to learn C# from scratch!
				</span>
				<BaseButton linkTo="/login" additionalClass="start_now_button" text="Start now" />
			</div>
		</div>
	);
};
