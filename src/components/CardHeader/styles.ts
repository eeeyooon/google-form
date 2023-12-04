import styled from 'styled-components';
import { TextField } from '@mui/material';

export const CardHeaderWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

export const InputCardTitle = styled(TextField)`
	height: 55px;
	width: 500px;
	font-size: 1rem;
	margin-left: 20px;

	::after {
		border-bottom: ${({ theme }) => `2px solid ${theme.color.primary}`};
	}

	&::placeholder {
		color: ${({ theme }) => theme.color.mediumgray};
	}
`;
