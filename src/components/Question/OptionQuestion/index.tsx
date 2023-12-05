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

type OptionTypeProps = {
	cardId: number;
	type: string;
	option: Option;
	index: number;
	isFocused: boolean;
};
export default function OptionQuestion({ cardId, type, option, index, isFocused }: OptionTypeProps) {
	const dispatch = useDispatch();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateOption({ cardId, optionId: option.id, value: e.target.value }));
	};

	const SelectedOption = () => {
		switch (type) {
			case 'RadioType':
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
			case 'CheckboxType':
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
			case 'DndType':
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
				{type === 'RadioType' ? (
					<RadioIcon />
				) : type === 'CheckboxType' ? (
					<CheckboxIcon />
				) : type === 'DndType' ? (
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
}
