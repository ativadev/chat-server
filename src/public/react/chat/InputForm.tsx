'use strict';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface IProps {
	value: string;
	handleSubmit: any;
	handleChange: any;
}

const InputForm = function (props: IProps) {
	const [value, setValue] = useState('');

	useEffect(() => {
		setValue(props.value);
	});

	return (
		<Box color="secondary">
			<form id={'form'} onSubmit={props.handleSubmit}>
				<TextField
					value={value}
					onChange={props.handleChange}
					color="primary"
					autoComplete="off"
					variant="outlined"
					fullWidth
				/>
				<Button
					variant="contained"
					color="primary"
					endIcon={<SendIcon />}
					type={'submit'}
					className={'btn-primary'}>
					Enviar
				</Button>
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
