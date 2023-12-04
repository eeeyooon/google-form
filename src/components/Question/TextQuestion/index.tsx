import styled from 'styled-components';

type TextQuestionProps = {
	type: string;
};
export default function TextQuestion({ type }: TextQuestionProps) {
	return (
		<TextQuestionWrapper>
			<div>{type === 'ShortType' ? '단답형 텍스트' : '장문형 텍스트'}</div>
		</TextQuestionWrapper>
	);
}

const TextQuestionWrapper = styled.div``;
