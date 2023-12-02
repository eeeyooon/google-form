import styled from 'styled-components';

export const CardWrapper = styled.div`
	width: 768px;
	min-height: 138px;
	border-radius: 10px;
	margin-top: 12px;
	background-color: ${({ theme }) => theme.color.white};
	padding-top: 12px;
`;
