import { CardHeaderWrapper, InputCardTitle } from './styles';
import SelectType from '../SelectType';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateCardTitle } from '../../slices/questionSlice';

export default function CardHeader() {
	const dispatch = useDispatch();
	const cardTitle = useSelector((state: RootState) => state.question.cardTitle);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateCardTitle(e.target.value));
	};

	return (
		<CardHeaderWrapper>
			<InputCardTitle
				id="question-input"
				variant="filled"
				placeholder="질문"
				multiline
				value={cardTitle}
				onChange={handleInputChange}
			/>
			<SelectType />
		</CardHeaderWrapper>
	);
}
