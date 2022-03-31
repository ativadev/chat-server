'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
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
				<Chat
					title={'Chat'}
					socket={this.state.socket}
					username={this.state.username}
					messages={messages}
				/>
			</React.StrictMode>
		);
	}
}

const root = document.getElementById('app-root');
ReactDOM.render(<App />, root);
