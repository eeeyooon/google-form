import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { RootState } from '../../store';
import { addRequiredCardId } from '../../slices/formSlice';
import { addAnswer } from '../../slices/previewSlice';
import PreviewCard from '../../components/PreviewCard';
import {
	AnswerResetBtn,
	FormDesc,
	FormInfo,
	FormTitle,
	FormTitleSection,
	PreviewBtnWrapper,
	PreviewSubmitBtn,
	PreviewWrapper,
} from './styles';

export default function Preview() {
	const cards = useSelector((state: RootState) => state.form.cards);
	const formData = useSelector((state: RootState) => state.form);
	const questions = useSelector((state: RootState) => state.question.cards);
	const { formTitle, formDesc } = formData;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [inputValues, setInputValues] = useState<{ [cardId: number]: string | string[] }>({});

	const handleInputChange = useCallback((cardId: number, value: string | string[]) => {
		setInputValues((prev) => ({ ...prev, [cardId]: value }));
	}, []);

	const handleSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			let requiredCardId = null;

			for (const cardId of cards) {
				const question = questions[cardId];
				const answer = inputValues[cardId] || '';
				const orderId = cards.indexOf(cardId);

				if (question.isRequired && !answer) {
					requiredCardId = cardId;
					break;
				}

				dispatch(
					addAnswer({
						cardId: cardId,
						answer: Array.isArray(answer) ? answer : [answer],
						isRequired: question.isRequired,
						question: question.cardTitle,
						orderId: orderId,
					}),
				);
			}

			if (requiredCardId !== null) {
				dispatch(addRequiredCardId(requiredCardId));
				return;
			}
			navigate('/preview/submit');
		},
		[cards, questions, inputValues, dispatch, navigate],
	);

	return (
		<PreviewWrapper>
			<FormTitleSection>
				<FormTitle>{formTitle ? formTitle : '제목 없는 설문지'}</FormTitle>
				{formDesc && <FormDesc>{formDesc}</FormDesc>}
				<FormInfo>* 표시는 필수 질문임</FormInfo>
			</FormTitleSection>
			<form name="previewForm" id="previewForm" onSubmit={handleSubmit}>
				{cards.map((cardId) => (
					<PreviewCard key={cardId} cardId={cardId} value={inputValues[cardId]} onInputChange={handleInputChange} />
				))}
				<PreviewBtnWrapper>
					<PreviewSubmitBtn type="submit">제출</PreviewSubmitBtn>
					<AnswerResetBtn
						onClick={() => {
							window.location.reload();
						}}
					>
						양식 지우기
					</AnswerResetBtn>
				</PreviewBtnWrapper>
			</form>
		</PreviewWrapper>
	);
}
