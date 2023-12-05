type InputTextProps = {
	isRequired: boolean;
};

export default function PreviewInputText({ isRequired }: InputTextProps) {
	return <input type="text" name="previewInputText" />;
}
