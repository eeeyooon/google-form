import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import PreviewInputText from '../PreviewInputText';
import PreviewRadio from '../PreviewRadio';
import PreviewDnd from '../PreviewDnd';
import PreviewCheckbox from '../PreviewCheckbox';
import { RequiredIcon } from '../styles';
import { CardTitle, PreviewCardWrapper, RequiredInfo, RequiredInfoWrapper, WarningIcon } from './styles';

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
