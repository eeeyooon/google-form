import styled from 'styled-components';
import { RiErrorWarningLine } from 'react-icons/ri';

export const PreviewCardWrapper = styled.div<{ $isRequired: boolean; $requiredButNotAnswerd: boolean }>`
	width: 768px;
	min-height: 138px;
	border-radius: 10px;
	margin-top: 12px;
	background-color: ${({ theme }) => theme.color.white};
	padding-top: 12px;
	padding-bottom: 10px;
	border: 1px solid
		${({ $isRequired, theme, $requiredButNotAnswerd }) =>
			$isRequired && $requiredButNotAnswerd ? theme.color.red : theme.color.lightgray};
`;
export const CardTitle = styled.div`
	height: 40px;
	line-height: 40px;
	padding-left: 20px;
	padding-right: 20px;
	margin-bottom: 15px;
`;

export const RequiredInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.color.red};
	padding-left: 20px;
	margin-top: 15px;
	margin-bottom: 15px;
	height: 40px;
`;

export const RequiredInfo = styled.p`
	font-size: 0.75rem;
	margin-left: 10px;
`;

export const WarningIcon = styled(RiErrorWarningLine)`
	color: ${({ theme }) => theme.color.red};
	font-size: 23px;
	height: 23px;
`;
