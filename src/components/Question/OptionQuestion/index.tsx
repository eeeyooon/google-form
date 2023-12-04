import { useDispatch } from 'react-redux';
import { removeOption, updateOption } from '../../../slices/questionSlice';
import {
	OptionQuestionWrapper,
	Checkbox,
	Radio,
	DropDown,
	DeleteOption,
	OptionInputBox,
	CheckboxIcon,
	RadioIcon,
	DndIndex,
} from './styles';
import { MdOutlineClose } from 'react-icons/md';

type OptionTypeProps = {
	cardId: number;
	type: string;
	value: string;
	index: number;
};
export default function OptionQuestion({ cardId, type, value, index }: OptionTypeProps) {
	const dispatch = useDispatch();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateOption({ cardId, index, value: e.target.value }));
	};

	const SelectedOption = () => {
		switch (type) {
			case 'RadioType':
				return <Radio type="text" value={value} onChange={handleInputChange} variant="standard" />;
			case 'CheckboxType':
				return <Checkbox type="text" value={value} onChange={handleInputChange} variant="standard" />;
			case 'DndType':
				return <DropDown type="text" value={value} onChange={handleInputChange} variant="standard" />;
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
				) : (
					<DndIndex>{index + 1}</DndIndex>
				)}
				{SelectedOption()}
			</OptionInputBox>

			<DeleteOption onClick={() => dispatch(removeOption({ cardId: cardId, optionIndex: index }))}>
				<MdOutlineClose />
			</DeleteOption>
		</OptionQuestionWrapper>
	);
}
