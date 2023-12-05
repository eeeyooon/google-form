import { PreviewOptionProps } from '../../types/options';

export default function PreviewRadio({ options, isRequired }: PreviewOptionProps) {
	return (
		<>
			{options.map((option) => (
				<div key={option.id}>
					<input type="radio" id={`radio-${option.id}`} value={option.text} name="radio-group" />
					<label htmlFor={`radio-${option.id}`}>{option.text}</label>
				</div>
			))}
		</>
	);
}
