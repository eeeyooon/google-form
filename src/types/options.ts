import { Option } from '../slices/questionSlice';

export type PreviewOptionProps = {
	options: Option[];
	cardId: number;
	isRequired: boolean;
};
