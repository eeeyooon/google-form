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
import { CHECKBOX_TYPE, LONG_TYPE, RADIO_TYPE, SHORT_TYPE } from '../../const/QuestionTypes';

type CardProps = {
	cardId: number;
	dragHandleProps?: DraggableProvidedDragHandleProps | null;
};

export default function Card({ cardId, dragHandleProps }: CardProps) {
	const cardState = useSelector((state: RootState) => state.question.cards[cardId]);

	const dispatch = useDispatch();
	const { questionType, options } = cardState;

	const isFocused = useSelector((state: RootState) => state.question.cards[cardId].isFocused);
	const isRequired = useSelector((state: RootState) => state.question.cards[cardId].isRequired);

	const handleFocus = () => {
		dispatch(updateFocus(cardId));
	};

	return (
		<CardWrapper onClick={handleFocus}>
			<DragButton className="DragIcon" {...dragHandleProps} $isFocused={isFocused}>
				<MdDragIndicator />
			</DragButton>
			{isFocused && <HighlightBar />}
			<CardHeader cardId={cardId} isFocused={isFocused} isRequired={isRequired} />
			<QuestionsWrapper>
				{questionType === SHORT_TYPE || questionType === LONG_TYPE ? (
					<TextQuestion type={questionType} />
				) : (
					options.map((option, index) => (
						<OptionQuestion
							key={option.id}
							index={index}
							type={questionType}
							option={option}
							cardId={cardId}
							isFocused={isFocused}
						/>
					))
				)}

				{isFocused && questionType !== SHORT_TYPE && questionType !== LONG_TYPE ? (
					<AddOptionBox>
						{questionType === RADIO_TYPE ? (
							<RadioIcon />
						) : questionType === CHECKBOX_TYPE ? (
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
