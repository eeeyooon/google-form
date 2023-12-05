import styled from 'styled-components';

export const HighlightBar = styled.div`
	background-color: ${({ theme }) => theme.color.blue};
	position: absolute;
	min-height: 100%;
	width: 6px;
	top: 0;
	left: 0;
`;
