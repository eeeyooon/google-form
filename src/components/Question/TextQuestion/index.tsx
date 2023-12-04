import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../store';
import { updateTextQuestion } from '../../../slices/questionSlice';

type TextQuestionProps = {
	type: string;
};
export default function TextQuestion({ type }: TextQuestionProps) {
	const dispatch = useDispatch();
	const textQuestion = useSelector((state: RootState) => state.question.textQuestion);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateTextQuestion(e.target.value));
	};

	return (
		<TextQuestionWrapper>
			<input
				type="text"
				placeholder={type === 'ShortType' ? '단답형 텍스트' : '장문형 텍스트'}
				value={textQuestion}
				onChange={handleInputChange}
			/>
		</TextQuestionWrapper>
	);
}

const TextQuestionWrapper = styled.div``;
