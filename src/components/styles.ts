import styled from 'styled-components';

export const HighlightBar = styled.div`
	background-color: ${({ theme }) => theme.color.blue};
	position: absolute;
	min-height: 100%;
	width: 6px;
	top: 0;
	left: 0;
`;

export const SelectBoxInput = styled.div`
	margin-left: 20px;
	height: 25px;
	display: flex;
	align-items: center;
	margin-bottom: 10px;

	input {
		accent-color: ${({ theme }) => theme.color.primary};
		width: 18px;
		height: 18px;
	}

	label {
		font-size: 14px;
		margin-left: 8px;
	}
`;

export const RequiredIcon = styled.span`
	color: ${({ theme }) => theme.color.red};
	font-weight: 600;
	margin-left: 5px;
`;
