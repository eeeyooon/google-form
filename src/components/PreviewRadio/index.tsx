import { useDispatch } from 'react-redux';
import { PreviewOptionProps } from '../../types/options';
import { addAnswer } from '../../slices/previewSlice';

export default function PreviewRadio({ cardId, options, isRequired, question }: PreviewOptionProps) {
	const dispatch = useDispatch();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const answer = event.target.value || '';
		dispatch(addAnswer({ cardId, answer: [answer], isRequired, question }));
	};

	return (
		<>
			{options.map((option) => (
				<div key={option.id}>
					<input
						type="radio"
						id={`${cardId}-${option.id}`}
						value={option.text}
						name="radio-group"
						onChange={handleChange}
					/>
					<label htmlFor={`${cardId}-${option.id}`}>{option.text}</label>
				</div>
			))}
		</>
	);
}
