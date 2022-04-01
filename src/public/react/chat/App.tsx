'use strict';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme.jsx';
import Chat from './ChatApp.jsx';

interface IProps {}

interface IState {
	socket: any;
	username: string;
}
class App extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
		let username: string;
		while (!username) {
			username = window.prompt('Qual seu nome?');
		}
		const socket = io();

		this.state = {
			socket: socket,
			username: username,
		};
	}
	render() {
		const messages: {
			data: string;
			type: string;
			name?: string;
			timeStamp?: string;
		}[] = [
			{
				type: 'info',
				data: `Bem vindo, ${this.state.username}`,
			},
		];
		return (
			<React.StrictMode>
				<ThemeProvider theme={theme}>
					<Chat
						title={'Chat'}
						socket={this.state.socket}
						username={this.state.username}
						messages={messages}
					/>
				</ThemeProvider>
			</React.StrictMode>
		);
	}
}

const root = document.getElementById('app-root');
ReactDOM.render(<App />, root);
