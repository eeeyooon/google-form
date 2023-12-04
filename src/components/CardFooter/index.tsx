import { MdContentCopy } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CardFooterWrapper, CopyCard, DeleteCard, RequiredCard, RequiredSwitch } from './styles';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../slices/formSlice';
import { removeCardState } from '../../slices/questionSlice';

type CardFooterProps = {
	cardId: number;
};
export default function CardFooter({ cardId }: CardFooterProps) {
	const dispatch = useDispatch();

	const handleDeleteCard = () => {
		dispatch(removeCard(cardId));
		dispatch(removeCardState(cardId));
	};

	return (
		<CardFooterWrapper>
			<CopyCard className="CopyCard">
				<MdContentCopy />
			</CopyCard>
			<DeleteCard className="DeleteCard" onClick={handleDeleteCard}>
				<FaRegTrashAlt />
			</DeleteCard>
			<RequiredCard>
				필수 <RequiredSwitch />
			</RequiredCard>
		</CardFooterWrapper>
	);
}
