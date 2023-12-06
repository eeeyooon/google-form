import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styled from 'styled-components';
import PreviewInputText from '../PreviewInputText';
import PreviewRadio from '../PreviewRadio';
import PreviewDnd from '../PreviewDnd';
import PreviewCheckbox from '../PreviewCheckbox';

type PreviewCardProps = {
	cardId: number;
};
export default function PreviewCard({ cardId }: PreviewCardProps) {
	const CardData = useSelector((state: RootState) => state.question.cards[cardId]);

	const { questionType, options, cardTitle, isRequired } = CardData;

	const requirdCardId = useSelector((state: RootState) => state.form.requiredCardId);
	const requiredButNotAnswerd = cardId === requirdCardId;

	const PreviewCardType = () => {
		switch (questionType) {
			case 'RadioType':
				return <PreviewRadio cardId={cardId} options={options} isRequired={isRequired} />;
			case 'CheckboxType':
				return <PreviewCheckbox cardId={cardId} options={options} isRequired={isRequired} />;
			case 'DndType':
				return <PreviewDnd cardId={cardId} options={options} isRequired={isRequired} />;
			case 'ShortType':
			case 'LongType':
				return <PreviewInputText cardId={cardId} isRequired={isRequired} textType={questionType} />;
			default:
				return;
		}
	};

	return (
		<PreviewCardWrapper>
			<CardTitle>{cardTitle}</CardTitle>
			{PreviewCardType()}
			{requiredButNotAnswerd && <div>필수 질문입니다.</div>}
		</PreviewCardWrapper>
	);
}

const PreviewCardWrapper = styled.div`
	width: 768px;
	min-height: 138px;
	border-radius: 10px;
	margin-top: 12px;
	background-color: ${({ theme }) => theme.color.white};
	padding-top: 12px;
`;
const CardTitle = styled.div``;
