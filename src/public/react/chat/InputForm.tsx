'use strict';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

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
		<Stack
			direction="row"
			justifyContent="flex-end"
			alignItems="baseline"
			spacing={1}>
			<form id={'form'} onSubmit={props.handleSubmit}>
				<TextField
					size="small"
					label="Mensagem"
					value={value}
					onChange={props.handleChange}
					color="primary"
					autoComplete="off"
					variant="outlined"
					sx={{ bgcolor: 'white' }}
					fullWidth
				/>
				<Button
					variant="contained"
					color="secondary"
					endIcon={<SendIcon />}
					type={'submit'}
					sx={{ ml: '5px' }}>
					Enviar
				</Button>
			</form>
		</Stack>
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
