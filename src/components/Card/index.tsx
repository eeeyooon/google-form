import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import { OptionQuestion, TextQuestion } from '../Question';
import { CardWrapper } from './styles';

export default function Card() {
	return (
		<CardWrapper>
			<CardHeader />
			<TextQuestion type="short" />
			<OptionQuestion type="dropdown" />
			<CardFooter />
		</CardWrapper>
	);
}
