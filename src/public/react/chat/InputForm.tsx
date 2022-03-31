'use strict';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface IMessage {
	data: string;
	type: string;
	name?: string;
	timeStamp?: string;
}

interface IProps {
	value: string;
	handleSubmit: any;
	handleChange: any;
}

interface IState {
	value: string;
}

const InputForm = function (props: IProps) {
	const [value, setValue] = useState('');

	useEffect(() => {
		setValue(props.value);
	});

	return (
		<Box>
			<form id={'form'} onSubmit={props.handleSubmit}>
				<TextField
					fullWidth
					value={value}
					autoComplete="off"
					onChange={props.handleChange}
				/>
				<button type={'submit'} className={'btn-primary'}>
					Enviar
				</button>
			</form>
		</Box>
	);
};

// class InputForm extends React.Component<IProps, IState> {
// 	constructor(props) {
// 		super(props);
// 		this.state = { value: this.props.value };
// 		// this.handleChange = this.handleChange.bind(this);
// 		// this.handleSubmit = this.handleSubmit.bind(this);
// 	}
//
// 	componentWillReceiveProps(nextProps: IProps) {
// 		this.setState(nextProps);
// 	}
//
// 	// handleSubmit(e) {
// 	// 	this.props.handleSubmit(e, this);
// 	// }
//
// 	render() {
// 		return (
// 			<Box>
// 				<form id={'form'} onSubmit={this.props.handleSubmit}>
// 					<TextField
// 						fullWidth
// 						value={this.state.value}
// 						autoComplete="off"
// 						onChange={this.props.handleChange}
// 					/>
// 					<button type={'submit'} className={'btn-primary'}>
// 						Enviar
// 					</button>
// 				</form>
// 			</Box>
// 		);
// 	}
// }

export default InputForm;
