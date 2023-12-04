import { RootState } from '../../store';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import { OptionQuestion, TextQuestion } from '../Question';
import { CardWrapper, AddOption, AddOptionBox } from './styles';
import { useSelector } from 'react-redux';
import { addOption } from '../../slices/questionSlice';
import { useDispatch } from 'react-redux';
import { CheckboxIcon, DndIndex, RadioIcon } from '../Question/OptionQuestion/styles';

type CardProps = {
	id: number;
};

export default function Card({ id }: CardProps) {
	const cardState = useSelector((state: RootState) => state.question.cards[id]);
	const dispatch = useDispatch();
	const { questionType, options } = cardState;

	return (
		<CardWrapper>
			<CardHeader cardId={id} />
			{questionType === 'ShortType' || questionType === 'LongType' ? (
				<TextQuestion type={questionType} />
			) : (
				options.map((option, index) => (
					<OptionQuestion key={index} index={index} type={questionType} value={option} cardId={id} />
				))
			)}

			{questionType !== 'ShortType' && questionType !== 'LongType' ? (
				<AddOptionBox>
					{questionType === 'RadioType' ? (
						<RadioIcon />
					) : questionType === 'CheckboxType' ? (
						<CheckboxIcon />
					) : (
						<DndIndex>{options.length + 1}</DndIndex>
					)}
					<AddOption onClick={() => dispatch(addOption(id))}>옵션 추가</AddOption>
				</AddOptionBox>
			) : null}
			<CardFooter cardId={id} />
		</CardWrapper>
	);
}
