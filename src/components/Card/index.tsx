import SelectType from '../SelectType';
import { CardWrapper, CardHeader, InputCardTitle } from './styles';

export default function Card() {
	return (
		<CardWrapper>
			<CardHeader>
				<InputCardTitle id="question-input" variant="filled" placeholder="질문" multiline />
				<SelectType />
			</CardHeader>
		</CardWrapper>
	);
}
