import styled from 'styled-components';

export const TextBox = styled.div<{ $type: string }>`
	font-size: 0.875rem;
	color: ${({ theme }) => theme.color.gray};
	margin-left: 20px;
	margin-top: 20px;
	margin-bottom: 50px;
	width: ${({ $type }) => ($type === 'ShortType' ? '270px' : '600px')};
	padding-bottom: 10px;
	border-bottom: 1px dotted ${({ theme }) => theme.color.mediumgray};
`;
