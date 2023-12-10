import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateCardTitle } from '../../slices/questionSlice';
import SelectType from '../SelectType';
import { CardHeaderWrapper, InputCardTitle } from './styles';

type CardHeaderProps = {
	cardId: number;
	isFocused: boolean;
	isRequired: boolean;
};

export default function CardHeader({ cardId, isFocused, isRequired }: CardHeaderProps) {
	const dispatch = useDispatch();
	const cardTitle = useSelector((state: RootState) => state.question.cards[cardId].cardTitle);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateCardTitle({ cardId, title: e.target.value }));
	};

	return (
		<CardHeaderWrapper>
			<InputCardTitle
				variant="filled"
				name={`${cardId}-질문`}
				id={`${cardId}-질문`}
				placeholder="질문"
				multiline
				value={cardTitle}
				onChange={handleInputChange}
				$isFocused={isFocused}
				$isRequired={isRequired}
			/>
			{isFocused && <SelectType cardId={cardId} />}
		</CardHeaderWrapper>
	);
}
