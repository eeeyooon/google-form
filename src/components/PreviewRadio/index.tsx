type PreviewRadioProps = {
	cardId: number;
	options: { id: string; text: string }[];
	isRequired: boolean;
	value: string;
	onInputChange: (cardId: number, value: string) => void;
};

export default function PreviewRadio({ cardId, options, isRequired, value, onInputChange }: PreviewRadioProps) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onInputChange(cardId, event.target.value);
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
						checked={value === option.text}
						onChange={handleChange}
					/>
					<label htmlFor={`${cardId}-${option.id}`}>{option.text}</label>
				</div>
			))}
		</>
	);
}
