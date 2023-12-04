import styled from 'styled-components';
import { Switch } from '@mui/material';

export const CardFooterWrapper = styled.div`
	border-top: 1px solid ${({ theme }) => theme.color.lightgray};
	margin: 20px 20px 20px 10px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 66px;
	color: ${({ theme }) => theme.color.gray};
`;

export const CopyCard = styled.button`
	font-size: 20px;
	margin-right: 30px;
`;
export const DeleteCard = styled.button`
	font-size: 20px;
	margin-right: 50px;
`;
export const RequiredCard = styled.div`
	font-size: 14px;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		height: 33px;
		width: 1px;
		top: 0;
		left: -20%;
		background: ${({ theme }) => theme.color.lightgray};
	}
`;

export const RequiredSwitch = styled(Switch)`
	.Mui-checked {
		color: ${({ theme }) => theme.color.primary} !important;
	}
	.MuiSwitch-track {
		background-color: ${({ theme }) => theme.color.secondary} !important;
	}
`;
