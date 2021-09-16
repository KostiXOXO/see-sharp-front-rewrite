import React from 'react';
import { MainFrame } from './MainFrame';
import { useIsHome } from 'utils/hooks/useIsHome';
import './LandingPage.scss';

const LandingPage = (): JSX.Element => {
	const { isHome } = useIsHome();

	return (
		<main className="landingPage">
			<MainFrame />
			<div className="furtherContent">
				<div className="whatWeOffer">
					<div className="whatWeOffer__forIndividuals">
						<h3>For individuals learners</h3>
						<ul className="whatWeOffer__forIndividuals__ul">
							<li>learn easily with our step-by-step tutorials</li>
							<li>solve algorithm problems and programming excercises</li>
							<li>practice good coding and design patterns</li>
							<li>learn about objectt oriented programming on example of a powerful modern language </li>
							<li>get to the top of our rank through solving excercises</li>
						</ul>
					</div>
					<div className="whatWeOffer__forTeams">
						<h3>For organised teams</h3>
						<ul className="whatWeOffer__forTeams__ul">
							<li>set up a classroom with just a few clicks</li>
							<li>
								give your students homework using our base of excercises or create programming tasks all
								by yourself
							</li>
							<li>discuss topics online</li>
							<li>support your students with our wide range of learning materials</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
};

export { LandingPage };
