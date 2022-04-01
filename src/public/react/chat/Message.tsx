'use strict';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

interface IProps {
	name?: string;
	text: string;
	timeStamp: string;
}

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'left',
	color: theme.palette.text.secondary,
}));

const DarkItem = styled(Paper)(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark' ? '#1A2027' : 'rgba(0,0,0,0.05)',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'left',
	color: theme.palette.text.secondary,
}));

const InfoItem = styled(Paper)(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark' ? '#1A2027' : theme.palette.secondary.light,
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'left',
	color: theme.palette.text.primary,
}));

const Message = (props: IProps) => {
	return <Item>{`[${props.timeStamp}] ${props.name} >> ${props.text}`}</Item>;
};

const ExternalMessage = (props: IProps) => {
	return (
		<DarkItem>{`[${props.timeStamp}] ${props.name} >> ${props.text}`}</DarkItem>
	);
};

const SystemMessage = (props: IProps) => {
	return <InfoItem>{`[${props.timeStamp}] >> ${props.text}`}</InfoItem>;
};

export { Message, ExternalMessage, SystemMessage };
