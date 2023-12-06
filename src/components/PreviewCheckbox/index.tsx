import { useDispatch } from 'react-redux';
import { PreviewOptionProps } from '../../types/options';
import { addAnswer } from '../../slices/previewSlice';
import { useState } from 'react';

export default function PreviewCheckbox({ cardId, options, isRequired, question }: PreviewOptionProps) {
	const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

	const dispatch = useDispatch();
	const handleChange = (option: string, checked: boolean) => {
		const updatedAnswers = checked
			? [...selectedAnswers, option]
			: selectedAnswers.filter((answer) => answer !== option);
		setSelectedAnswers(updatedAnswers);
		dispatch(addAnswer({ cardId, answer: updatedAnswers, isRequired, question }));
	};
	return (
		<>
			{options.map((option) => (
				<div key={option.id}>
					<input
						type="checkbox"
						id={`${cardId}-${option.id}`}
						value={option.text}
						onChange={(e) => handleChange(option.text, e.target.checked)}
					/>
					<label htmlFor={`${cardId}-${option.id}`}>{option.text}</label>
				</div>
			))}
		</>
	);
}
