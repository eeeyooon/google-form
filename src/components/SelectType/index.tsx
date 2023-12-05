import { useEffect, useState } from 'react';
import { FormControl, SelectChangeEvent } from '@mui/material';
import { TypeSelect, TypeItem } from './styles';
import { useDispatch } from 'react-redux';
import { setQuestionType } from '../../slices/questionSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

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
				<TypeItem value="ShortType">단답형</TypeItem>
				<TypeItem value="LongType">장문형</TypeItem>
				<TypeItem value="RadioType">객관식 질문</TypeItem>
				<TypeItem value="CheckboxType">체크박스</TypeItem>
				<TypeItem value="DndType">드롭다운</TypeItem>
			</TypeSelect>
		</FormControl>
	);
}
