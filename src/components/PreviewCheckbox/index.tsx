import { PreviewOptionProps } from '../../types/options';

export default function PreviewCheckbox({ options, isRequired }: PreviewOptionProps) {
	return (
		<>
			{options.map((option) => (
				<div key={option.id}>
					<input type="checkbox" id={`checkbox-${option.id}`} value={option.text} />
					<label htmlFor={`checkbox-${option.id}`}>{option.text}</label>
				</div>
			))}
		</>
	);
}
