import styled from 'styled-components';
import TitleSection from '../../components/TitleSection';
import SideMenu from '../../components/SideMenu';
import Card from '../../components/Card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addCard } from '../../slices/formSlice';
import { addCardState } from '../../slices/questionSlice';

export default function Form() {
	const dispatch = useDispatch();
	const cards = useSelector((state: RootState) => state.form.cards);

	const cardsData = useSelector((state: RootState) => state.question.cards);

	console.log(cardsData);

	const handleAddCard = () => {
		const newCardId = cards.length + 1;
		dispatch(addCard(newCardId));
		dispatch(addCardState(newCardId));
	};

	return (
		<FormWrapper>
			<TitleSection />
			{cards.map((cardId) => (
				<Card key={cardId} id={cardId} />
			))}
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
