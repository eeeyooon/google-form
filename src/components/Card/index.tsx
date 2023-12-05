import { RootState } from '../../store';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import { OptionQuestion, TextQuestion } from '../Question';
import { CardWrapper, AddOption, AddOptionBox, QuestionsWrapper, DragButton } from './styles';
import { useSelector } from 'react-redux';
import { addOption, updateFocus } from '../../slices/questionSlice';
import { useDispatch } from 'react-redux';
import { CheckboxIcon, DndIndex, RadioIcon } from '../Question/OptionQuestion/styles';
import { HighlightBar } from '../styles';
import { MdDragIndicator } from 'react-icons/md';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

type CardProps = {
	cardId: number;
	dragHandleProps?: DraggableProvidedDragHandleProps | null;
};

export default function Card({ cardId, dragHandleProps }: CardProps) {
	const cardState = useSelector((state: RootState) => state.question.cards[cardId]);

	const dispatch = useDispatch();
	const { questionType, options } = cardState;

	const isFocused = useSelector((state: RootState) => state.question.cards[cardId].isFocused);

	const handleFocus = () => {
		dispatch(updateFocus(cardId));
	};

	return (
		<CardWrapper onClick={handleFocus}>
			<DragButton className="DragIcon" {...dragHandleProps}>
				<MdDragIndicator />
			</DragButton>
			{isFocused && <HighlightBar />}
			<CardHeader cardId={cardId} isFocused={isFocused} />
			<QuestionsWrapper>
				{questionType === 'ShortType' || questionType === 'LongType' ? (
					<TextQuestion type={questionType} />
				) : (
					options.map((option, index) => (
						<OptionQuestion
							key={index}
							index={index}
							type={questionType}
							value={option}
							cardId={cardId}
							isFocused={isFocused}
						/>
					))
				)}

				{isFocused && questionType !== 'ShortType' && questionType !== 'LongType' ? (
					<AddOptionBox>
						{questionType === 'RadioType' ? (
							<RadioIcon />
						) : questionType === 'CheckboxType' ? (
							<CheckboxIcon />
						) : (
							<DndIndex>{options.length + 1}</DndIndex>
						)}
						<AddOption onClick={() => dispatch(addOption(cardId))}>옵션 추가</AddOption>
					</AddOptionBox>
				) : null}
			</QuestionsWrapper>
			{isFocused && <CardFooter cardId={cardId} />}
		</CardWrapper>
	);
}
