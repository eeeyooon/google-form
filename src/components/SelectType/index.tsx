import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setQuestionType } from '../../slices/questionSlice';
import { SHORT_TYPE, LONG_TYPE, RADIO_TYPE, CHECKBOX_TYPE, DND_TYPE } from '../../const/QuestionTypes';
import { FormControl, SelectChangeEvent } from '@mui/material';
import { TypeSelect, TypeItem } from './styles';

type SelectTypeProps = {
	cardId: number;
};

export default function SelectType({ cardId }: SelectTypeProps) {
	const dispatch = useDispatch();
	const currentType = useSelector((state: RootState) => state.question.cards[cardId]).questionType;
	const [selectedType, setSelectedType] = useState(currentType);

	useEffect(() => {
		setSelectedType(currentType);
	}, [currentType]);

	const handleTypeChange = (event: SelectChangeEvent) => {
		setSelectedType(event.target.value);
		dispatch(setQuestionType({ cardId, questionType: event.target.value }));
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 180 }}>
			<TypeSelect id="select-type" value={selectedType} onChange={handleTypeChange}>
				<TypeItem value={SHORT_TYPE}>단답형</TypeItem>
				<TypeItem value={LONG_TYPE}>장문형</TypeItem>
				<TypeItem value={RADIO_TYPE}>객관식 질문</TypeItem>
				<TypeItem value={CHECKBOX_TYPE}>체크박스</TypeItem>
				<TypeItem value={DND_TYPE}>드롭다운</TypeItem>
			</TypeSelect>
		</FormControl>
	);
}
