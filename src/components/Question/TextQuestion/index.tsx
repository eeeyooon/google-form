import { SHORT_TYPE } from '../../../const/QuestionTypes';
import { TextBox } from './styles';

type TextQuestionProps = {
	type: string;
};
export default function TextQuestion({ type }: TextQuestionProps) {
	return <TextBox $type={type}>{type === SHORT_TYPE ? '단답형 텍스트' : '장문형 텍스트'}</TextBox>;
}
