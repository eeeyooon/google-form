import { SelectBoxInput } from '../styles';

type PreviewRadioProps = {
	cardId: number;
	options: { id: string; text: string }[];
	value: string;
	onInputChange: (cardId: number, value: string) => void;
};

export default function PreviewRadio({ cardId, options, value, onInputChange }: PreviewRadioProps) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onInputChange(cardId, event.target.value);
	};

	return (
		<>
			{options.map((option) => (
				<SelectBoxInput key={`${cardId}-${option.id}`}>
					<input
						type="radio"
						id={`${cardId}-${option.id}`}
						value={option.text}
						name={`radio${cardId}-${option.id}`}
						checked={value === option.text}
						onChange={handleChange}
					/>
					<label htmlFor={`${cardId}-${option.id}`}>{option.text}</label>
				</SelectBoxInput>
			))}
		</>
	);
}
