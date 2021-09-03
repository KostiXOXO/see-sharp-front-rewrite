import React from 'react';
import { StyledBurger } from './Burger.styled';

interface IMenuProps {
	open: boolean;
	setOpen: (arg: boolean) => void;
}

const Burger = ({ open, setOpen, ...props }: IMenuProps): JSX.Element => {
	return (
		<StyledBurger
			aria-label="Toggle menu"
			aria-expanded={open}
			open={open}
			onClick={() => setOpen(!open)}
			{...props}
		>
			<span />
			<span />
			<span />
		</StyledBurger>
	);
};

export default Burger;
