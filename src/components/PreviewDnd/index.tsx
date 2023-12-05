import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { PreviewOptionProps } from '../../types/options';
import { useState } from 'react';

export default function PreviewDnd({ options, isRequired }: PreviewOptionProps) {
	const [selectedValue, setSelectedValue] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setSelectedValue(event.target.value);
	};

	return (
		<Select value={selectedValue} onChange={handleChange} displayEmpty>
			{options.map((option) => (
				<MenuItem key={option.id} value={option.text}>
					{option.text}
				</MenuItem>
			))}
		</Select>
	);
}
