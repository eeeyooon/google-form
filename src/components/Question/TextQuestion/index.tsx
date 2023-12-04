import styled from 'styled-components';

type TextQuestionProps = {
	type: string;
};
export default function TextQuestion({ type }: TextQuestionProps) {
	return <TextBox type={type}>{type === 'ShortType' ? '단답형 텍스트' : '장문형 텍스트'}</TextBox>;
}

const TextBox = styled.div<TextQuestionProps>`
	font-size: 0.875rem;
	color: ${({ theme }) => theme.color.gray};
	margin-left: 20px;
	margin-top: 20px;
	margin-bottom: 50px;
	width: ${({ type }) => (type === 'ShortType' ? '270px' : '600px')};
	padding-bottom: 10px;
	border-bottom: 1px dotted ${({ theme }) => theme.color.mediumgray};
`;
