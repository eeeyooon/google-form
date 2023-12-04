import styled from 'styled-components';

type OptionTypeProps = {
	type: string;
	value: string;
};
export default function OptionQuestion({ type, value }: OptionTypeProps) {
	const SelectedOption = () => {
		switch (type) {
			case 'RadioType':
				return <Radio type="text" value={value} />;
			case 'CheckboxType':
				return <Checkbox type="text" value={value} />;
			case 'DndType':
				return <DropDown type="text" value={value} />;
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
