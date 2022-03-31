'use strict';
import * as React from 'react';

interface IProps {
	className: string;
	text: string;
}

interface IState {}

const Message = function (props: IProps) {
	return <li className={props.className}>{props.text}</li>;
};

export default Message;
