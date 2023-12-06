import { useDispatch } from 'react-redux';
import { PreviewOptionProps } from '../../types/options';
import { addAnswer } from '../../slices/previewSlice';

export default function PreviewCheckbox({ cardId, options, isRequired }: PreviewOptionProps) {
	const dispatch = useDispatch();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const answer = event.target.value || '';
		dispatch(addAnswer({ cardId, answer, isRequired }));
	};
	return (
		<>
			{options.map((option) => (
				<div key={option.id}>
					<input type="checkbox" id={`${cardId}-${option.id}`} value={option.text} onChange={handleChange} />
					<label htmlFor={`${cardId}-${option.id}`}>{option.text}</label>
				</div>
			))}
		</>
	);
}
