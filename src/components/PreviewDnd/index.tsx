import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

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
		<Select value={selectedValue} onChange={handleChange} displayEmpty>
			{options.map((option) => (
				<MenuItem key={`${cardId}-${option.id}`} value={option.text}>
					{option.text}
				</MenuItem>
			))}
		</Select>
	);
}
