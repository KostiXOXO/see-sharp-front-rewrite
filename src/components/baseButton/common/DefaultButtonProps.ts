import React from 'react';
import { ButtonSize, ButtonStyle, ButtonType } from '../index';

export interface IDefaultButtonProps {
	onClick?: (event: React.MouseEvent) => void;
	text?: string;
	size?: ButtonSize;
	type?: ButtonType;
	style?: ButtonStyle;
	icon?: any;
	additionalClass?: string;
	linkTo?: string;
	disabled?: boolean;
}

export type DefaultButtonProps = IDefaultButtonProps;
