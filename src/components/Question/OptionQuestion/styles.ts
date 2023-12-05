import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { IoRadioButtonOff } from 'react-icons/io5';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

export const OptionQuestionWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
`;

export const DeleteOption = styled.button`
	font-size: 25px;
	height: 30px;
	margin-top: 15px;
	margin-right: 50px;
	color: ${({ theme }) => theme.color.gray};
`;

export const OptionInputBox = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	input {
		width: 600px;
		border: none;
		margin-top: 15px;
		height: 30px;
		font-size: 15px;
	}
`;

export const RadioIcon = styled(IoRadioButtonOff)`
	font-size: 22px;
	margin-top: 15px;
	margin-left: 20px;
	color: ${({ theme }) => theme.color.gray};
`;

export const CheckboxIcon = styled(MdCheckBoxOutlineBlank)`
	font-size: 22px;
	margin-top: 15px;
	margin-left: 20px;
	color: ${({ theme }) => theme.color.gray};
`;

export const DndIndex = styled.div`
	font-size: 13px;
	margin-top: 12px;
	margin-left: 20px;
	color: ${({ theme }) => theme.color.gray};
`;

export const OptionBox = styled(TextField)<{ $isFocused: boolean }>`
	margin-left: 10px;
	::before {
		border-bottom: ${({ $isFocused, theme }) => {
			return $isFocused ? theme.color.gray : 'none';
		}};
	}
	::after {
		border-bottom: ${({ theme }) => `2px solid ${theme.color.primary}`};
	}
`;
