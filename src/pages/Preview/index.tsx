import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import PreviewCard from '../../components/PreviewCard';

export default function Preview() {
	const cards = useSelector((state: RootState) => state.form.cards);
	const formData = useSelector((state: RootState) => state.form);
	const { formTitle, formDesc } = formData;
	const questions = useSelector((state: RootState) => state.question.cards);
	const previewAnswers = useSelector((state: RootState) => state.preview.answers);

	const handleSubmit = () => {
		const isAllRequiredAnswered = cards.every((cardId) => {
			const question = questions[cardId];
			if (question && question.isRequired) {
				const answer = previewAnswers.find((answer) => answer.cardId === cardId);
				return answer && answer.answer.trim() !== '';
			}
			return true;
		});

		if (!isAllRequiredAnswered) {
			alert('모든 필수 질문에 답변해주세요.');
			return;
		}

		console.log('제출된 답변:', previewAnswers);
	};
	return (
		<PreviewWrapper>
			<FormTitleSection>
				<FormTitle>{formTitle}</FormTitle>
				<FormDesc>{formDesc}</FormDesc>
				<FormInfo>*표시는 필수 질문임</FormInfo>
			</FormTitleSection>
			<form name="previewForm" id="previewForm">
				{cards.map((cardId) => (
					<PreviewCard key={cardId} cardId={cardId} />
				))}
			</form>
			<PreviewSubmitBtn onClick={handleSubmit}>제출</PreviewSubmitBtn>
		</PreviewWrapper>
	);
}

const PreviewWrapper = styled.div`
	background-color: ${({ theme }) => theme.color.background};
	width: 100%;
	margin-bottom: 40px;
`;

const FormTitleSection = styled.div`
	width: 768px;
	height: 160px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.color.white};
	margin-top: 12px;
	border-top: 10px solid ${({ theme }) => theme.color.primary};
`;

const FormTitle = styled.h1`
	height: 65px;
	font-size: 32px;
	padding-top: 12px;

	&::placeholder {
		color: ${({ theme }) => theme.color.black};
	}
`;

const FormDesc = styled.div`
	height: 24px;
	font-size: 0.875rem;
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 8px;
`;

const FormInfo = styled.p`
	border-top: 1px solid ${({ theme }) => theme.color.lightgray};
	padding-top: 10px;
	font-size: 18px;
`;

const PreviewSubmitBtn = styled.button`
	width: 70px;
	text-align: center;
	background-color: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	padding: 10px 5px;
	border-radius: 8px;
	margin-top: 10px;
	font-size: 1.125rem;
`;
