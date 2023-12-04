import { RootState } from '../../store';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import { OptionQuestion, TextQuestion } from '../Question';
import { CardWrapper } from './styles';
import { useSelector } from 'react-redux';
import { addOption, removeOption } from '../../slices/questionSlice';
import { useDispatch } from 'react-redux';

type CardProps = {
	id: number;
};

export default function Card({ id }: CardProps) {
	const cardState = useSelector((state: RootState) => state.question.cards[id]);
	const dispatch = useDispatch();

	if (!cardState) {
		<div>로딩중 ...</div>;
	}

	const { questionType, options } = cardState;

	// console.log(options);
	// console.log(textQuestion);

	return (
		<CardWrapper>
			<CardHeader cardId={id} />
			{questionType === 'ShortType' || questionType === 'LongType' ? (
				<TextQuestion type={questionType} />
			) : (
				options.map((option, index) => (
					<div key={index}>
						<OptionQuestion index={index} type={questionType} value={option} cardId={id} />
						<button onClick={() => dispatch(removeOption({ cardId: id, optionIndex: index }))}>삭제</button>
					</div>
				))
			)}

			{questionType !== 'ShortType' && questionType !== 'LongType' ? (
				<button onClick={() => dispatch(addOption(id))}>질문추가</button>
			) : null}
			<CardFooter cardId={id} />
		</CardWrapper>
	);
}
