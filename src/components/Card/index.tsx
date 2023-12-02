import CardFooter from '../CardFooter';
import CardHeader from '../CardHeader';
import { CardWrapper } from './styles';

export default function Card() {
	return (
		<CardWrapper>
			<CardHeader />
			<CardFooter />
		</CardWrapper>
	);
}
