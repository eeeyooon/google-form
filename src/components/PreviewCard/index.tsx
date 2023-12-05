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

	const PreviewCardType = () => {
		switch (questionType) {
			case 'RadioType':
				return <PreviewRadio options={options} isRequired={isRequired} />;
			case 'CheckboxType':
				return <PreviewCheckbox options={options} isRequired={isRequired} />;
			case 'DndType':
				return <PreviewDnd options={options} isRequired={isRequired} />;
			case 'ShortType':
				return <PreviewInputText isRequired={isRequired} />;
			case 'LongType':
				return <PreviewInputText isRequired={isRequired} />;
			default:
				return;
		}
	};

	return (
		<PreviewCardWrapper>
			<CardTitle>{cardTitle}</CardTitle>
			{PreviewCardType()}
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
