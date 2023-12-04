import { RootState } from '../../store';
import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import { OptionQuestion, TextQuestion } from '../Question';
import { CardWrapper } from './styles';
import { useSelector } from 'react-redux';
import { addOption, removeOption } from '../../slices/questionSlice';
import { useDispatch } from 'react-redux';

export default function Card() {
	const { questionType, options, textQuestion, cardTitle } = useSelector((state: RootState) => state.question);
	const dispatch = useDispatch();

	// console.log(cardTitle);
	// console.log(options);
	// console.log(textQuestion);

	return (
		<CardWrapper>
			<CardHeader />
			{questionType === 'ShortType' || questionType === 'LongType' ? (
				<TextQuestion type={questionType} />
			) : (
				options.map((option, index) => (
					<div key={index}>
						<OptionQuestion index={index} key={index} type={questionType} value={option} />
						<button onClick={() => dispatch(removeOption(index))}>삭제</button>
					</div>
				))
			)}

			{questionType !== 'ShortType' && questionType !== 'LongType' ? (
				<button onClick={() => dispatch(addOption())}>질문추가</button>
			) : (
				<></>
			)}

			<CardFooter />
		</CardWrapper>
	);
}
