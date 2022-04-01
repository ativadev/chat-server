import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		background: {
			default: '#232C33',
		},
		primary: {
			main: '#FF8400',
			light: '#2edb5c',
			dark: '#0a2411',
			contrastText: '#fff',
		},
		secondary: {
			main: '#232C33',
			light: '#A0C1D1',
			dark: '#090b0d',
			contrastText: '#fff',
		},
	},
});

export default theme;
