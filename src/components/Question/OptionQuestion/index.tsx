import styled from 'styled-components';

type OptionTypeProps = {
	type: 'radio' | 'check' | 'dropdown';
};
export default function OptionQuestion({ type }: OptionTypeProps) {
	const SelectedOption = () => {
		switch (type) {
			case 'radio':
				return <Radio type="radio" />;
			case 'check':
				return <Checkbox type="checkbox" />;
			case 'dropdown':
				return <DropDown type="text" />;
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
