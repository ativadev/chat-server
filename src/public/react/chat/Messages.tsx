'use strict';
import * as React from 'react';
import Stack from '@mui/material/Stack';

import { Message, ExternalMessage, SystemMessage } from './Message.jsx';

interface IMessage {
	data: string;
	type: string;
	name?: string;
	timeStamp?: string;
}

interface IProps {
	username: string;
	content: IMessage[];
}

interface IState {
	content: IMessage[];
	username: string;
}

class Messages extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
		const content = this.props.content;
		const username = this.props.username;
		this.state = {
			content: content,
			username: username,
		};
	}

	componentWillReceiveProps(nextProps: IProps) {
		this.setState(nextProps);
	}

	listarMensagens(messages: IMessage[]) {
		return messages.map((item) => {
			const timeStamp = new Date().toLocaleString();
			if (item.type === 'info') {
				return <SystemMessage timeStamp={timeStamp} text={item.data} />;
			}
			return item.name === this.state.username ? (
				<Message timeStamp={item.timeStamp} name={item.name} text={item.data} />
			) : (
				<ExternalMessage
					timeStamp={item.timeStamp}
					name={item.name}
					text={item.data}
				/>
			);
		});
	}

	render() {
		const messages = this.listarMensagens(this.state.content);
		return (
			<Stack
				direction="column"
				justifyContent="flex-start"
				alignItems="flex-start"
				spacing={1}>
				{messages}
			</Stack>
		);
	}
}

export default Messages;
