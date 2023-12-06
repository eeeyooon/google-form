import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { PreviewOptionProps } from '../../types/options';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnswer } from '../../slices/previewSlice';

export default function PreviewDnd({ cardId, options, isRequired, question }: PreviewOptionProps) {
	const [selectedValue, setSelectedValue] = useState('');
	const dispatch = useDispatch();

	const handleChange = (event: SelectChangeEvent) => {
		const answer = event.target.value || '';
		setSelectedValue(answer);
		dispatch(addAnswer({ cardId, answer, isRequired, question }));
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
