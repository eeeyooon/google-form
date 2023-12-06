import { MdContentCopy } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CardFooterWrapper, CopyCard, DeleteCard, RequiredCard, RequiredSwitch } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addCopiedCard, removeCard } from '../../slices/formSlice';
import { copyCardState, removeCardState, toggleRequired, updateFocus } from '../../slices/questionSlice';
import { RootState } from '../../store';

type CardFooterProps = {
	cardId: number;
};

export default function CardFooter({ cardId }: CardFooterProps) {
	const dispatch = useDispatch();
	const cards = useSelector((state: RootState) => state.form.cards);
	const isRequired = useSelector((state: RootState) => state.question.cards[cardId].isRequired);

	const handleDeleteCard = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		const cardIndex = cards.indexOf(cardId);
		const newFocusCardId = cardIndex > 0 ? cards[cardIndex - 1] : -1;

		dispatch(removeCard(cardId));
		dispatch(removeCardState(cardId));
		dispatch(updateFocus(newFocusCardId));
	};
	const handleCopyCard = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		const newCardId = Math.max(...cards) + 1;
		dispatch(addCopiedCard({ copyId: newCardId, originId: cardId }));
		dispatch(copyCardState({ originCardId: cardId, newCardId }));
		dispatch(updateFocus(newCardId));
	};

	const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const RequiredStatus = e.target.checked;
		dispatch(toggleRequired({ cardId, isRequired: RequiredStatus }));
	};

	return (
		<CardFooterWrapper>
			<CopyCard className="CopyCard" onClick={handleCopyCard}>
				<MdContentCopy />
			</CopyCard>
			<DeleteCard className="DeleteCard" onClick={handleDeleteCard}>
				<FaRegTrashAlt />
			</DeleteCard>
			<RequiredCard>
				필수 <RequiredSwitch name={`필수옵션선택-${cardId}`} checked={isRequired} onChange={handleSwitchChange} />
			</RequiredCard>
		</CardFooterWrapper>
	);
}
