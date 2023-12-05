import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const TitleSectionWrapper = styled.div`
	width: 768px;
	height: 138px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.color.white};
	margin-top: 12px;
	border-top: 10px solid ${({ theme }) => theme.color.primary};
	position: relative;
	overflow: hidden;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InputTitle = styled(TextField)`
	height: 65px;
	margin-left: 20px;
	margin-right: 20px;
	font-size: 32px;
	padding-top: 12px;

	&::placeholder {
		color: ${({ theme }) => theme.color.black};
	}

	div {
		font-size: 2rem;
	}

	::after {
		border-bottom: ${({ theme }) => `2px solid ${theme.color.primary}`};
	}
`;

export const InputDesc = styled(TextField)`
	height: 24px;
	font-size: 0.875rem;
	margin-left: 20px;
	margin-right: 20px;
	color: ${({ theme }) => theme.color.gray};
	margin-top: 8px;

	div {
		font-size: 12px;
	}

	::after {
		border-bottom: ${({ theme }) => `2px solid ${theme.color.primary}`};
	}
`;
