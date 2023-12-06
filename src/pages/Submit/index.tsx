import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { RequiredIcon } from '../../components/styles';
import {
	CheckedIcon,
	NotAnswered,
	SubmitAnswer,
	SubmitCard,
	SubmitCheckbox,
	SubmitCheckboxWrapper,
	SubmitQuestion,
	SubmitTitle,
	SubmitWrapper,
} from './styles';

export default function Submit() {
	const submitAnswers = useSelector((state: RootState) => state.preview.answers);
	return (
		<SubmitWrapper>
			<SubmitTitle>제출 응답</SubmitTitle>
			{submitAnswers.map((answer) => (
				<SubmitCard key={answer.cardId}>
					<SubmitQuestion>
						{answer.question}
						{answer.isRequired && <RequiredIcon>*</RequiredIcon>}
					</SubmitQuestion>
					<SubmitAnswer>
						{answer.answer[0] ? (
							answer.answer.length > 1 ? (
								answer.answer.map((option, index) => (
									<SubmitCheckboxWrapper key={index}>
										<SubmitCheckbox>
											<CheckedIcon />
											{option}
										</SubmitCheckbox>
									</SubmitCheckboxWrapper>
								))
							) : (
								answer.answer
							)
						) : (
							<NotAnswered>미응답</NotAnswered>
						)}
					</SubmitAnswer>
				</SubmitCard>
			))}
		</SubmitWrapper>
	);
}
