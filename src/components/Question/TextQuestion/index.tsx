import styled from 'styled-components';

type TextQuestionProps = {
	type: string;
};
export default function TextQuestion({ type }: TextQuestionProps) {
	return (
		<TextQuestionWrapper>
			<input type="text" placeholder={type === 'short' ? '단답형 텍스트' : '장문형 텍스트'} />
		</TextQuestionWrapper>
	);
}

const TextQuestionWrapper = styled.div``;