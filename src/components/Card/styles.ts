import styled from 'styled-components';
export const CardWrapper = styled.div`
	width: 768px;
	min-height: 138px;
	border-radius: 10px;
	margin-top: 12px;
	background-color: ${({ theme }) => theme.color.white};
	padding-top: 12px;
	position: relative;
	overflow: hidden;
`;

export const QuestionsWrapper = styled.div`
	margin-bottom: 20px;
`;

export const AddOption = styled.button`
	color: ${({ theme }) => theme.color.gray};
	border: none;
	margin: 5px;
	height: 30px;
	margin-left: 10px;
	margin-top: 15px;
	border-bottom: 1px solid ${({ theme }) => theme.color.white};
	&:hover {
		border-bottom: 1px solid ${({ theme }) => theme.color.mediumgray};
	}
`;

export const AddOptionBox = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

export const DragButton = styled.div`
	cursor: move;
	margin-left: auto;
`;
