import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledMenuMobile } from './LeftMenu.styled';
import { theme } from 'styles/theme';
import { NavMenu } from 'components/navMenu/NavMenu';
import { INavRoute } from 'utils/interfaces/route';

interface MenuProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	routes: INavRoute[];
}

export default function LeftMenu({ open, setOpen, routes }: MenuProps): JSX.Element {
	return (
		<StyledMenuMobile open={open} onClick={() => setOpen(!open)} theme={theme} aria-hidden={!open}>
			<NavMenu routes={routes} mobile={true} />
		</StyledMenuMobile>
	);
}
