import { CardHeaderWrapper, InputCardTitle } from './styles';
import SelectType from '../SelectType';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateCardTitle } from '../../slices/questionSlice';

type CardHeaderProps = {
	cardId: number;
	isFocused: boolean;
};

export default function CardHeader({ cardId, isFocused }: CardHeaderProps) {
	const dispatch = useDispatch();
	const cardTitle = useSelector((state: RootState) => state.question.cards[cardId].cardTitle);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateCardTitle({ cardId, title: e.target.value }));
	};

	return (
		<CardHeaderWrapper>
			<InputCardTitle
				variant="filled"
				placeholder="질문"
				multiline
				value={cardTitle}
				onChange={handleInputChange}
				$isFocused={isFocused}
			/>
			{isFocused && <SelectType cardId={cardId} />}
		</CardHeaderWrapper>
	);
}
