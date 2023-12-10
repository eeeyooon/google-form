import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TitleSection from '../../components/TitleSection';
import SideMenu from '../../components/SideMenu';
import Card from '../../components/Card';
import { RootState } from '../../store';
import { addCard, moveCard } from '../../slices/formSlice';
import { addCardState, updateFocus } from '../../slices/questionSlice';
import { useCallback } from 'react';
import React from 'react';

const Form = React.memo(() => {
	const dispatch = useDispatch();
	const cards = useSelector((state: RootState) => state.form.cards);

	const handleAddCard = useCallback(() => {
		const newCardId = Math.max(...cards, 0) + 1;
		dispatch(addCard(newCardId));
		dispatch(addCardState(newCardId));
		dispatch(updateFocus(newCardId));
	}, [cards, dispatch]);

	const onDragEnd = useCallback(
		(result: DropResult) => {
			if (!result.destination) return;
			dispatch(
				moveCard({
					sourceIndex: result.source.index,
					destinationIndex: result.destination.index,
				}),
			);
		},
		[dispatch],
	);

	return (
		<FormWrapper>
			<TitleSection />
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppableId" key="droppableId">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{cards.map((cardId, index) => (
								<Draggable key={cardId} draggableId={cardId.toString()} index={index}>
									{(provided) => (
										<div ref={provided.innerRef} {...provided.draggableProps}>
											<Card cardId={cardId} dragHandleProps={provided.dragHandleProps} />
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
			<SideMenu addCard={handleAddCard} />
		</FormWrapper>
	);
});

const FormWrapper = styled.div`
	background-color: ${({ theme }) => theme.color.background};
	width: 100%;
	position: relative;
	margin-bottom: 50px;
`;

Form.displayName = 'Form';
export default Form;
