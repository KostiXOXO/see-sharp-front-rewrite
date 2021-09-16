import { createTheme } from '@material-ui/core/styles';

const theme = {
	primaryDark: '#444',
	primaryLight: '#fff',
	primaryHover: '#03a4d7',
	mobile: '576px',
};

const materialTheme = createTheme({
	palette: {
		primary: {
			main: '#00bdb0',
		},
		secondary: {
			main: '#25dab3',
		},
	},
});

export const clrConsole = '#2f4858';
export { theme, materialTheme };
