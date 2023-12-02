import styled from 'styled-components';

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

	input {
		margin-left: 24px;
		margin-right: 24px;
		border: none;
		border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};
		outline: none;
	}
`;

export const InputTitle = styled.input`
	height: 65px;
	display: flex;
	align-items: center;
	font-size: 2rem;

	&::placeholder {
		color: ${({ theme }) => theme.color.black};
	}
`;

export const InputDesc = styled.input`
	height: 24px;
	font-size: 0.875rem;

	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.color.gray};

	margin-top: 8px;
`;

export const HighlightBar = styled.div`
	background-color: ${({ theme }) => theme.color.blue};
	position: absolute;
	min-height: 100%;
	width: 6px;
	top: 0;
	left: 0;
`;
