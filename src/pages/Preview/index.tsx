import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import PreviewCard from '../../components/PreviewCard';
import { useDispatch } from 'react-redux';
import { addRequiredCardId } from '../../slices/formSlice';
import { addAnswer } from '../../slices/previewSlice';
import { useNavigate } from 'react-router-dom';

export default function Preview() {
	const cards = useSelector((state: RootState) => state.form.cards);
	const formData = useSelector((state: RootState) => state.form);
	const { formTitle, formDesc } = formData;
	const questions = useSelector((state: RootState) => state.question.cards);
	const previewAnswers = useSelector((state: RootState) => state.preview.answers);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = () => {
		let requiredCardId = null;

		for (const cardId of cards) {
			const question = questions[cardId];
			const currentAnswer = previewAnswers.find((a) => a.cardId === cardId);

			if (question.isRequired) {
				if (!currentAnswer || currentAnswer.answer.trim() === '') {
					requiredCardId = cardId;
					break;
				}
			}

			dispatch(
				addAnswer({
					cardId: cardId,
					answer: currentAnswer ? currentAnswer.answer : '',
					isRequired: question.isRequired,
					question: question.cardTitle,
				}),
			);
		}

		if (requiredCardId !== null) {
			dispatch(addRequiredCardId(requiredCardId));
			return;
		}

		navigate('/preview/submit');
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
			<PreviewBtnWrapper>
				<PreviewSubmitBtn onClick={handleSubmit}>제출</PreviewSubmitBtn>
				<AnswerResetBtn
					onClick={() => {
						window.location.reload();
					}}
				>
					양식 지우기
				</AnswerResetBtn>
			</PreviewBtnWrapper>
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
	width: 80px;
	text-align: center;
	background-color: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.white};
	padding: 10px 5px;
	border-radius: 5px;
	font-size: 1.0625rem;
`;

const PreviewBtnWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
`;
const AnswerResetBtn = styled.button`
	font-size: 0.9375rem;
	color: ${({ theme }) => theme.color.primary};
`;
