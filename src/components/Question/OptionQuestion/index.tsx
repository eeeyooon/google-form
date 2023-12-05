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

type OptionTypeProps = {
	cardId: number;
	type: string;
	value: string;
	index: number;
	isFocused: boolean;
};
export default function OptionQuestion({ cardId, type, value, index, isFocused }: OptionTypeProps) {
	const dispatch = useDispatch();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateOption({ cardId, index, value: e.target.value }));
	};

	const SelectedOption = () => {
		switch (type) {
			case 'RadioType':
				return (
					<OptionBox
						className="RadioType"
						type="text"
						value={value}
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
						value={value}
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
						value={value}
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
				<DeleteOption onClick={() => dispatch(removeOption({ cardId: cardId, optionIndex: index }))}>
					<MdOutlineClose />
				</DeleteOption>
			)}
		</OptionQuestionWrapper>
	);
}
