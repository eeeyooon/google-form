import styled from 'styled-components';
import { TextField } from '@mui/material';

export const CardWrapper = styled.div`
	width: 768px;
	min-height: 138px;
	border-radius: 10px;
	margin-top: 12px;
	background-color: ${({ theme }) => theme.color.white};
	padding-top: 12px;
`;

export const CardHeader = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

export const InputCardTitle = styled(TextField)`
	height: 55px;
	width: 500px;
	font-size: 1rem;
	margin-left: 10px;

	::after {
		border-bottom: ${({ theme }) => `2px solid ${theme.color.primary}`};
	}

	&::placeholder {
		color: ${({ theme }) => theme.color.mediumgray};
	}
`;
