'use strict';
import * as React from 'react';

import Messages from './Messages.jsx';
import InputForm from './InputForm.jsx';
import Navbar from './Navbar.jsx';

interface IMessage {
	data: string;
	type: string;
	name?: string;
	timeStamp?: string;
}

interface IProps {
	title: string;
	socket: any;
	username: string;
	messages: IMessage[];
}

interface IState {
	messages: IMessage[];
	socket: any;
	username: string;
	value: string;
	online: number;
	title: string;
}

class Chat extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
		const socket = this.props.socket;
		const username = this.props.username;
		const messages = this.props.messages;
		const title = this.props.title;

		this.state = {
			messages: messages,
			socket: socket,
			username: username,
			value: '',
			online: 0,
			title: title,
		};

		socket.on('connect', () => {
			const credentials = { name: this.props.username, userId: socket.id };
			socket.emit('setId', credentials);
		});

		socket.on('online', (content) => {
			this.setState({ online: content.data });
		});

		socket.on('left', (content) => {
			this.addItem(content);
		});

		socket.on('joined', (content) => {
			this.addItem(content);
		});

		socket.on('chat message', (content) => {
			this.addItem(content);
		});

		this.onSubmit.bind(this);
		this.onChange.bind(this);
	}

	addItem(content: IMessage) {
		const messages = [...this.state.messages].concat([...[content]]);
		this.setState({ messages: messages });
		window.scrollTo(0, document.body.scrollHeight);
	}

	onChange(e: Event) {
		this.setState({ value: event.target.value });
	}

	onSubmit(e: Event) {
		e.preventDefault();
		const value: string = this.state.value;
		if (value) {
			console.log('Submeteu!', value);
			this.state.socket.emit('chat message', { data: value, type: 'message' });
			this.setState({ value: '' });
		}
	}

	render() {
		return (
			<>
				<Navbar title={this.state.title} online={this.state.online} />
				<Messages
					username={this.state.username}
					content={this.state.messages}
				/>
				<InputForm
					value={this.state.value}
					handleChange={(e) => this.onChange(e)}
					handleSubmit={(e) => this.onSubmit(e)}
				/>
			</>
		);
	}
}

export default Chat;
