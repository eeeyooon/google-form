import { TextField } from '@mui/material';
import styled from 'styled-components';

type PreviewInputTextProps = {
	cardId: number;
	textType: string;
	value: string;
	onInputChange: (cardId: number, value: string) => void;
};

export default function PreviewInputText({ cardId, textType, value, onInputChange }: PreviewInputTextProps) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onInputChange(cardId, event.target.value);
	};
	return (
		<TextFieldInput
			type="text"
			value={value || ''}
			onChange={handleChange}
			variant="standard"
			multiline={textType === 'LongType'}
			$textType={textType}
		/>
	);
}

const TextFieldInput = styled(TextField)<{ $textType: string }>`
	width: ${({ $textType }) => ($textType === 'LongType' ? '100%' : '350px')};
	padding-left: 20px;
	padding-right: 20px;
	margin-top: 20px;
	margin-bottom: 10px;

	div {
		font-size: 14px;
	}

	::before {
		border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};
	}

	::after {
		border-bottom: ${({ theme }) => `2px solid ${theme.color.primary}`};
	}
`;
