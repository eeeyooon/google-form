import { useDispatch } from 'react-redux';
import { addAnswer } from '../../slices/previewSlice';

type InputTextProps = {
	cardId: number;
	isRequired: boolean;
	textType: string;
};

export default function PreviewInputText({ cardId, isRequired, textType }: InputTextProps) {
	const dispatch = useDispatch();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const answer = event.target.value || '';
		dispatch(addAnswer({ cardId, answer, isRequired }));
	};
	return <input type="text" name="previewInputText" onChange={handleChange} />;
}
