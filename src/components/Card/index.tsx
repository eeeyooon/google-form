import { RootState } from '../../store';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import { OptionQuestion, TextQuestion } from '../Question';
import { CardWrapper, AddOption, AddOptionBox, QuestionsWrapper, DragButton } from './styles';
import { useSelector } from 'react-redux';
import { addOption, moveOption, updateFocus } from '../../slices/questionSlice';
import { useDispatch } from 'react-redux';
import { CheckboxIcon, DndIndex, RadioIcon } from '../Question/OptionQuestion/styles';
import { HighlightBar } from '../styles';
import { MdDragIndicator } from 'react-icons/md';
import {
	DragDropContext,
	Draggable,
	DraggableProvidedDragHandleProps,
	DropResult,
	Droppable,
} from 'react-beautiful-dnd';
import { CHECKBOX_TYPE, LONG_TYPE, RADIO_TYPE, SHORT_TYPE } from '../../const/QuestionTypes';
import React, { useCallback } from 'react';

type CardProps = {
	cardId: number;
	dragHandleProps?: DraggableProvidedDragHandleProps | null;
};

const Card = React.memo(({ cardId, dragHandleProps }: CardProps) => {
	const cardState = useSelector((state: RootState) => state.question.cards[cardId]);

	const dispatch = useDispatch();
	const { questionType, options } = cardState;

	const isFocused = useSelector((state: RootState) => state.question.cards[cardId].isFocused);
	const isRequired = useSelector((state: RootState) => state.question.cards[cardId].isRequired);

	const handleFocus = useCallback(() => {
		dispatch(updateFocus(cardId));
	}, [cardId, dispatch]);

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		dispatch(moveOption({ cardId, sourceIndex: result.source.index, destinationIndex: result.destination.index }));
	};

	return (
		<CardWrapper onClick={handleFocus}>
			<DragButton className="DragIcon" {...dragHandleProps} $isFocused={isFocused}>
				<MdDragIndicator />
			</DragButton>
			{isFocused && <HighlightBar />}
			<CardHeader cardId={cardId} isFocused={isFocused} isRequired={isRequired} />
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId={`options-${cardId}`}>
					{(provided) => (
						<QuestionsWrapper ref={provided.innerRef} {...provided.droppableProps}>
							{questionType === SHORT_TYPE || questionType === LONG_TYPE ? (
								<TextQuestion type={questionType} />
							) : (
								options.map((option, index) => (
									<Draggable key={option.id} draggableId={option.id} index={index}>
										{(provided) => (
											<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
												<OptionQuestion
													index={index}
													type={questionType}
													option={option}
													cardId={cardId}
													isFocused={isFocused}
												/>
											</div>
										)}
									</Draggable>
								))
							)}
							{provided.placeholder}
						</QuestionsWrapper>
					)}
				</Droppable>
			</DragDropContext>
			{isFocused && questionType !== SHORT_TYPE && questionType !== LONG_TYPE && (
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
			)}
			{isFocused && <CardFooter cardId={cardId} />}
		</CardWrapper>
	);
});

Card.displayName = 'Card';
export default Card;
