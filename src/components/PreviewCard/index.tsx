import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styled from 'styled-components';
import PreviewInputText from '../PreviewInputText';
import PreviewRadio from '../PreviewRadio';
import PreviewDnd from '../PreviewDnd';
import PreviewCheckbox from '../PreviewCheckbox';
import { RiErrorWarningLine } from 'react-icons/ri';

type PreviewCardProps = {
	cardId: number;
	value: string | string[];
	onInputChange: (cardId: number, value: string | string[]) => void;
};
export default function PreviewCard({ cardId, value, onInputChange }: PreviewCardProps) {
	const CardData = useSelector((state: RootState) => state.question.cards[cardId]);

	const { questionType, options, cardTitle, isRequired } = CardData;

	const requirdCardId = useSelector((state: RootState) => state.form.requiredCardId);
	const requiredButNotAnswerd = cardId === requirdCardId;

	const PreviewCardType = () => {
		switch (questionType) {
			case 'RadioType':
				return <PreviewRadio cardId={cardId} options={options} value={value as string} onInputChange={onInputChange} />;
			case 'CheckboxType':
				return (
					<PreviewCheckbox cardId={cardId} options={options} value={value as string[]} onInputChange={onInputChange} />
				);
			case 'DndType':
				return <PreviewDnd cardId={cardId} options={options} onInputChange={onInputChange} />;
			case 'ShortType':
			case 'LongType':
				return (
					<PreviewInputText
						cardId={cardId}
						textType={questionType}
						isRequired={isRequired}
						value={value as string}
						onInputChange={onInputChange}
					/>
				);
			default:
				return;
		}
	};

	return (
		<PreviewCardWrapper $isRequired={isRequired} $requiredButNotAnswerd={requiredButNotAnswerd}>
			<CardTitle>
				{cardTitle}
				{isRequired && <RequiredIcon>*</RequiredIcon>}
			</CardTitle>
			{PreviewCardType()}
			{requiredButNotAnswerd && (
				<RequiredInfoWrapper>
					<WarningIcon />
					<RequiredInfo>필수 질문입니다.</RequiredInfo>
				</RequiredInfoWrapper>
			)}
		</PreviewCardWrapper>
	);
}

const PreviewCardWrapper = styled.div<{ $isRequired: boolean; $requiredButNotAnswerd: boolean }>`
	width: 768px;
	min-height: 138px;
	border-radius: 10px;
	margin-top: 12px;
	background-color: ${({ theme }) => theme.color.white};
	padding-top: 12px;
	border: 1px solid
		${({ $isRequired, theme, $requiredButNotAnswerd }) =>
			$isRequired && $requiredButNotAnswerd ? theme.color.red : theme.color.lightgray};
`;
const CardTitle = styled.div`
	height: 40px;
	line-height: 40px;
	padding-left: 20px;
	padding-right: 20px;
`;

const RequiredIcon = styled.span`
	color: ${({ theme }) => theme.color.red};
	font-weight: 600;
	margin-left: 5px;
`;

const RequiredInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.color.red};
	padding-left: 20px;
	margin-top: 15px;
	margin-bottom: 15px;
	height: 40px;
`;

const RequiredInfo = styled.p`
	font-size: 0.75rem;
	margin-left: 10px;
`;

const WarningIcon = styled(RiErrorWarningLine)`
	color: ${({ theme }) => theme.color.red};
	font-size: 23px;
	height: 23px;
`;
