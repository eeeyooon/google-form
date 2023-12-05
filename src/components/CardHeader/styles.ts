import styled from 'styled-components';
import { TextField } from '@mui/material';

export const CardHeaderWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

export const InputCardTitle = styled(TextField)<{ $isFocused: boolean }>`
	height: 55px;
	width: 500px;

	div {
		background-color: ${({ $isFocused, theme }) => {
			return $isFocused ? theme.color.inputgray : 'transparent';
		}};
		margin-left: ${({ $isFocused }) => {
			return $isFocused ? '20px' : '10px';
		}};
	}
	::before {
		border-bottom: ${({ $isFocused, theme }) => {
			return $isFocused ? `1px solid ${theme.color.white}` : 'none';
		}};
	}

	::after {
		border-bottom: ${({ theme }) => `2px solid ${theme.color.primary}`};
	}

	&::placeholder {
		color: ${({ theme }) => theme.color.mediumgray};
	}
`;
