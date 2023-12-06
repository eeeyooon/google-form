import { InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

type PreviewDndProps = {
	cardId: number;
	options: { id: string; text: string }[];
	onInputChange: (cardId: number, value: string) => void;
};

export default function PreviewDnd({ cardId, options, onInputChange }: PreviewDndProps) {
	const [selectedValue, setSelectedValue] = useState('');
	const handleChange = (event: SelectChangeEvent) => {
		const answer = event.target.value;
		setSelectedValue(answer);
		onInputChange(cardId, event.target.value);
	};

	return (
		<SelectInput
			value={selectedValue}
			onChange={handleChange}
			inputProps={{ 'aria-label': 'selectDropDown' }}
			autoWidth
			displayEmpty
		>
			<MenuItemBox value="" disabled>
				<em>선택</em>
			</MenuItemBox>
			{options.map((option) => (
				<MenuItemBox key={`${cardId}-${option.id}`} value={option.text}>
					{option.text}
				</MenuItemBox>
			))}
		</SelectInput>
	);
}

const SelectInput = styled(Select)`
	padding-right: 20px;
	margin-left: 20px;
	margin-bottom: 20px;
	fieldset {
		border: 1px solid ${({ theme }) => theme.color.lightgray} !important;
	}
`;

const MenuItemBox = styled(MenuItem)`
	padding-left: 20px;
	padding-right: 30px;
`;
