import styled from 'styled-components';
import TitleSection from '../../components/TitleSection';
import SideMenu from '../../components/SideMenu';
import Card from '../../components/Card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addCard, moveCard } from '../../slices/formSlice';
import { addCardState, reorderCards, updateFocus } from '../../slices/questionSlice';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { useEffect } from 'react';

export default function Form() {
	const dispatch = useDispatch();
	const cards = useSelector((state: RootState) => state.form.cards);
	const cardsData = useSelector((state: RootState) => state.question.cards);

	console.log(cardsData);
	console.log(cards);

	const handleAddCard = () => {
		const newCardId = Math.max(...cards, 0) + 1;
		dispatch(addCard(newCardId));
		dispatch(addCardState(newCardId));
		dispatch(updateFocus(newCardId));
	};

	useEffect(() => {
		dispatch(reorderCards(cards));
	}, [cards, dispatch]);

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		dispatch(
			moveCard({
				sourceIndex: result.source.index,
				destinationIndex: result.destination.index,
			}),
		);
	};

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
}

const FormWrapper = styled.div`
	background-color: ${({ theme }) => theme.color.background};
	height: 100vh;
	width: 100%;
	position: relative;
`;
