import React from 'react';
import { NavLink } from 'react-router-dom';
import { INavRoute } from 'utils/interfaces/route';

interface IProps {
	routes: INavRoute[];
	mobile?: boolean;
}

const NavMenu = ({ routes, mobile = false }: IProps) => {
	return (
		<div className="menu">
			{mobile && (
				<NavLink className="menu__item" to="/">
					<div className="menu__item__link">Home</div>
				</NavLink>
			)}
			{routes.map(({ path, text }: INavRoute, key) => {
				return (
					<NavLink key={key} className="menu__item" to={path}>
						<div className="menu__item__link">{text}</div>
					</NavLink>
				);
			})}
		</div>
	);
};

export { NavMenu };
