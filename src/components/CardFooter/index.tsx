import { MdContentCopy } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CardFooterWrapper, CopyCard, DeleteCard, RequiredCard, RequiredSwitch } from './styles';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../slices/formSlice';
import { removeCardState, toggleRequired } from '../../slices/questionSlice';
import { useState } from 'react';

type CardFooterProps = {
	cardId: number;
};
export default function CardFooter({ cardId }: CardFooterProps) {
	const dispatch = useDispatch();

	const handleDeleteCard = () => {
		dispatch(removeCard(cardId));
		dispatch(removeCardState(cardId));
	};

	const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const RequiredStatus = e.target.checked;
		dispatch(toggleRequired({ cardId, isRequired: RequiredStatus }));
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
				필수 <RequiredSwitch onChange={handleSwitchChange} />
			</RequiredCard>
		</CardFooterWrapper>
	);
}
