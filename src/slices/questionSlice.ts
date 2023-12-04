import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type QuestionState = {
	questionType: string;
	options: string[];
	textQuestion: string;
};

const initialState: QuestionState = {
	questionType: 'RadioType',
	options: ['옵션1'],
	textQuestion: '',
};

export const questionSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		setQuestionType: (state, action: PayloadAction<string>) => {
			state.questionType = action.payload;
			state.options = ['옵션1'];
		},
		addOption: (state) => {
			const newOptionNumber = state.options.length + 1;
			state.options.push(`옵션${newOptionNumber}`);
		},
		removeOption: (state, action: PayloadAction<number>) => {
			state.options.splice(action.payload, 1);
		},
		updateOption: (state, action: PayloadAction<{ index: number; value: string }>) => {
			const { index, value } = action.payload;
			state.options[index] = value;
		},
		updateTextQuestion: (state, action: PayloadAction<string>) => {
			state.textQuestion = action.payload;
		},
	},
});

export const { setQuestionType, addOption, removeOption, updateOption, updateTextQuestion } = questionSlice.actions;
export default questionSlice.reducer;
