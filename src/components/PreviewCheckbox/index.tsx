type PreviewCheckboxProps = {
	cardId: number;
	options: { id: string; text: string }[];
	value: string[] | undefined;
	onInputChange: (cardId: number, value: string[]) => void;
};

export default function PreviewCheckbox({ cardId, options, value = [], onInputChange }: PreviewCheckboxProps) {
	const handleChange = (optionText: string, isChecked: boolean) => {
		const updatedValues = isChecked ? [...value, optionText] : value.filter((text) => text !== optionText);
		onInputChange(cardId, updatedValues);
	};

	return (
		<>
			{options.map((option) => (
				<div key={option.id}>
					<input
						type="checkbox"
						id={`${cardId}-${option.id}`}
						value={option.text}
						checked={value.includes(option.text)}
						onChange={(e) => handleChange(option.text, e.target.checked)}
					/>
					<label htmlFor={`${cardId}-${option.id}`}>{option.text}</label>
				</div>
			))}
		</>
	);
}
