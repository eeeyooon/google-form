import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateOption } from '../../../slices/questionSlice';

type OptionTypeProps = {
	type: string;
	value: string;
	index: number;
};
export default function OptionQuestion({ type, value, index }: OptionTypeProps) {
	const dispatch = useDispatch();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateOption({ index, value: e.target.value }));
	};
	const SelectedOption = () => {
		switch (type) {
			case 'RadioType':
				return <Radio type="text" value={value} onChange={handleInputChange} />;
			case 'CheckboxType':
				return <Checkbox type="text" value={value} onChange={handleInputChange} />;
			case 'DndType':
				return <DropDown type="text" value={value} onChange={handleInputChange} />;
			default:
				return;
		}
	};

	return <OptionQuestionWrapper>{SelectedOption()}</OptionQuestionWrapper>;
}

const OptionQuestionWrapper = styled.div``;

const Checkbox = styled.input``;
const Radio = styled.input``;
const DropDown = styled.input``;
