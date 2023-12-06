import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styled from 'styled-components';
import { RequiredIcon } from '../../components/styles';
import { IoMdCheckbox } from 'react-icons/io';

export default function Submit() {
	const submitAnswers = useSelector((state: RootState) => state.preview.answers);
	console.log(submitAnswers);
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

const SubmitWrapper = styled.div`
	width: 768px;
	background-color: ${({ theme }) => theme.color.white};
	margin-top: 12px;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.color.lightgray};
	border-top: 10px solid ${({ theme }) => theme.color.primary};
	padding: 20px;
`;

const SubmitTitle = styled.div`
	font-size: 20px;
	margin-bottom: 20px;
`;

const SubmitCard = styled.div`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.color.lightgray};
	padding: 20px;
	margin-bottom: 15px;
`;

const SubmitQuestion = styled.p`
	margin-bottom: 12px;
`;

const SubmitAnswer = styled.div`
	font-size: 0.8125rem;
`;

const NotAnswered = styled.span`
	color: ${({ theme }) => theme.color.primary};
`;

const SubmitCheckboxWrapper = styled.p`
	margin-bottom: 10px;
	height: 20px;
`;

const SubmitCheckbox = styled.div`
	display: flex;
	align-items: center;
`;

const CheckedIcon = styled(IoMdCheckbox)`
	font-size: 20px;
	color: ${({ theme }) => theme.color.primary};
	margin-right: 10px;
`;
