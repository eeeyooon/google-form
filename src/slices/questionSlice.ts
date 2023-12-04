import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type QuestionState = {
	questionType: string;
	options: string[];
};

const initialState: QuestionState = {
	questionType: 'RadioType',
	options: ['옵션1'],
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
	},
});

export const { setQuestionType, addOption, removeOption } = questionSlice.actions;
export default questionSlice.reducer;
