import { useDispatch } from 'react-redux';
import { removeOption, updateOption } from '../../../slices/questionSlice';
import {
	OptionQuestionWrapper,
	DeleteOption,
	OptionInputBox,
	CheckboxIcon,
	RadioIcon,
	DndIndex,
	OptionBox,
} from './styles';
import { MdOutlineClose } from 'react-icons/md';
import { Option } from '../../../slices/questionSlice';
import { CHECKBOX_TYPE, DND_TYPE, RADIO_TYPE } from '../../../const/QuestionTypes';
import React from 'react';

type OptionTypeProps = {
	cardId: number;
	type: string;
	option: Option;
	index: number;
	isFocused: boolean;
};
const OptionQuestion = React.memo(({ cardId, type, option, index, isFocused }: OptionTypeProps) => {
	const dispatch = useDispatch();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateOption({ cardId, optionId: option.id, value: e.target.value }));
	};

	const SelectedOption = () => {
		switch (type) {
			case RADIO_TYPE:
				return (
					<OptionBox
						className="RadioType"
						type="text"
						value={option.text}
						onChange={handleInputChange}
						variant="standard"
						$isFocused={isFocused}
					/>
				);
			case CHECKBOX_TYPE:
				return (
					<OptionBox
						className="CheckboxType"
						type="text"
						value={option.text}
						onChange={handleInputChange}
						variant="standard"
						$isFocused={isFocused}
					/>
				);
			case DND_TYPE:
				return (
					<OptionBox
						className="DndType"
						type="text"
						value={option.text}
						onChange={handleInputChange}
						variant="standard"
						$isFocused={isFocused}
					/>
				);
			default:
				return;
		}
	};

	return (
		<OptionQuestionWrapper>
			<OptionInputBox>
				{type === RADIO_TYPE ? (
					<RadioIcon />
				) : type === CHECKBOX_TYPE ? (
					<CheckboxIcon />
				) : type === DND_TYPE ? (
					<DndIndex>{index + 1}</DndIndex>
				) : null}
				{SelectedOption()}
			</OptionInputBox>
			{isFocused && (
				<DeleteOption onClick={() => dispatch(removeOption({ cardId, optionId: option.id }))}>
					<MdOutlineClose />
				</DeleteOption>
			)}
		</OptionQuestionWrapper>
	);
});

OptionQuestion.displayName = 'OptionQuestion';
export default OptionQuestion;
