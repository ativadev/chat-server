'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

interface IProps {
	className: string;
	text: string;
}

interface IState {}

class Message extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
	}

	render() {
		return <li className={this.props.className}>{this.props.text}</li>;
	}
}

export default Message;
