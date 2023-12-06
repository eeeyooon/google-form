import { useDispatch } from 'react-redux';
import { addAnswer } from '../../slices/previewSlice';

type InputTextProps = {
	cardId: number;
	isRequired: boolean;
	textType: string;
	question: string;
};

export default function PreviewInputText({ cardId, isRequired, textType, question }: InputTextProps) {
	const dispatch = useDispatch();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const answer = event.target.value || '';
		dispatch(addAnswer({ cardId, answer, isRequired, question }));
	};
	return <input type="text" name="previewInputText" onChange={handleChange} />;
}
