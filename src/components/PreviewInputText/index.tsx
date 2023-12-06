type PreviewInputTextProps = {
	cardId: number;
	textType: string;
	value: string;
	onInputChange: (cardId: number, value: string) => void;
};

export default function PreviewInputText({ cardId, textType, value, onInputChange }: PreviewInputTextProps) {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onInputChange(cardId, event.target.value);
	};
	return <input type="text" value={value || ''} onChange={handleChange} />;
}
