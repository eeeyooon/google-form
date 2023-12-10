import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import PreviewInputText from '../PreviewInputText';
import PreviewRadio from '../PreviewRadio';
import PreviewDnd from '../PreviewDnd';
import PreviewCheckbox from '../PreviewCheckbox';
import { RequiredIcon } from '../styles';
import { CardTitle, PreviewCardWrapper, RequiredInfo, RequiredInfoWrapper, WarningIcon } from './styles';
import { CHECKBOX_TYPE, DND_TYPE, LONG_TYPE, RADIO_TYPE, SHORT_TYPE } from '../../const/QuestionTypes';
import React from 'react';

type PreviewCardProps = {
	cardId: number;
	value: string | string[];
	onInputChange: (cardId: number, value: string | string[]) => void;
};
const PreviewCard = React.memo(({ cardId, value, onInputChange }: PreviewCardProps) => {
	const CardData = useSelector((state: RootState) => state.question.cards[cardId]);

	const { questionType, options, cardTitle, isRequired } = CardData;

	const requirdCardId = useSelector((state: RootState) => state.form.requiredCardId);
	const requiredButNotAnswerd = cardId === requirdCardId;

	const PreviewCardType = () => {
		switch (questionType) {
			case RADIO_TYPE:
				return <PreviewRadio cardId={cardId} options={options} value={value as string} onInputChange={onInputChange} />;
			case CHECKBOX_TYPE:
				return (
					<PreviewCheckbox cardId={cardId} options={options} value={value as string[]} onInputChange={onInputChange} />
				);
			case DND_TYPE:
				return <PreviewDnd cardId={cardId} options={options} onInputChange={onInputChange} />;
			case SHORT_TYPE:
			case LONG_TYPE:
				return (
					<PreviewInputText
						cardId={cardId}
						textType={questionType}
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
});

PreviewCard.displayName = 'PreviewCard';
export default PreviewCard;
