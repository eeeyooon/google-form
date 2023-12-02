import { useState } from 'react';
import { FormControl, SelectChangeEvent } from '@mui/material';
import { TypeSelect, TypeItem } from './styles';

export default function SelectType() {
	const [questionType, setQuestionType] = useState('RadioType');

	const handleTypeChange = (event: SelectChangeEvent) => {
		setQuestionType(event.target.value);
	};

	return (
		<FormControl sx={{ m: 1, minWidth: 180 }}>
			<TypeSelect id="select-type" value={questionType} onChange={handleTypeChange}>
				<TypeItem value="ShortType">단답형</TypeItem>
				<TypeItem value="LongType">장문형</TypeItem>
				<TypeItem value="RadioType" defaultChecked>
					객관식 질문
				</TypeItem>
				<TypeItem value="CheckboxType">체크박스</TypeItem>
				<TypeItem value="DndType">드롭다운</TypeItem>
			</TypeSelect>
		</FormControl>
	);
}
