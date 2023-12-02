import { CardHeaderWrapper, InputCardTitle } from './styles';
import SelectType from '../SelectType';

export default function CardHeader() {
	return (
		<CardHeaderWrapper>
			<InputCardTitle id="question-input" variant="filled" placeholder="질문" multiline />
			<SelectType />
		</CardHeaderWrapper>
	);
}
