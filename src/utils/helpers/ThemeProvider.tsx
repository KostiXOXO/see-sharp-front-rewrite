import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { materialTheme } from 'styles/theme';

export default function PickersProvider({ children }: { children: JSX.Element }) {
	return <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>;
}
