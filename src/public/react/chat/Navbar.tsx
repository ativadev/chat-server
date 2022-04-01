import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@material-ui/core/styles';

function Navbar(props) {
	const theme = useTheme();
	const [online, setOnline] = useState(1);
	useState(() => {
		setOnline(props.online);
	});
	return (
		<AppBar color="primary" position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{props.title}
				</Typography>
				<Button color="inherit">{`${props.online} Online`}</Button>
			</Toolbar>
		</AppBar>
	);
}

// class Navbar extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
//
// 	render() {
// 		return (
// 			<AppBar color="secondary" position="fixed">
// 				<Toolbar>
// 					<IconButton
// 						size="large"
// 						edge="start"
// 						color="inherit"
// 						aria-label="menu"
// 						sx={{ mr: 2 }}>
// 						<MenuIcon />
// 					</IconButton>
// 					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// 						{this.props.title}
// 					</Typography>
// 					<Button color="inherit">{this.props.buttonTitle}</Button>
// 				</Toolbar>
// 			</AppBar>
// 		);
// 	}
// }

export default Navbar;
