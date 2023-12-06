import styled from 'styled-components';
import { IoMdCheckbox } from 'react-icons/io';

export const SubmitWrapper = styled.div`
	width: 768px;
	background-color: ${({ theme }) => theme.color.white};
	margin-top: 12px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.color.lightgray};
	border-top: 10px solid ${({ theme }) => theme.color.primary};
	padding: 20px;
`;

export const SubmitTitle = styled.div`
	font-size: 20px;
	margin-bottom: 20px;
`;

export const SubmitCard = styled.div`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.color.lightgray};
	padding: 20px;
	margin-bottom: 15px;
`;

export const SubmitQuestion = styled.p`
	margin-bottom: 12px;
`;

export const SubmitAnswer = styled.div`
	font-size: 0.8125rem;
`;

export const NotAnswered = styled.span`
	color: ${({ theme }) => theme.color.primary};
`;

export const SubmitCheckboxWrapper = styled.p`
	margin-bottom: 10px;
	height: 20px;
`;

export const SubmitCheckbox = styled.div`
	display: flex;
	align-items: center;
`;

export const CheckedIcon = styled(IoMdCheckbox)`
	font-size: 20px;
	color: ${({ theme }) => theme.color.primary};
	margin-right: 10px;
`;
