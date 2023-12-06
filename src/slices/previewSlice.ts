import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Answer = {
	cardId: number;
	answer: string;
	isRequired: boolean;
};

type PreviewState = {
	answers: Answer[];
};

const initialState: PreviewState = {
	answers: [],
};

export const previewSlice = createSlice({
	name: 'preview',
	initialState,
	reducers: {
		addAnswer: (state, action: PayloadAction<Answer>) => {
			const existingAnswerIndex = state.answers.findIndex((answer) => answer.cardId === action.payload.cardId);
			if (existingAnswerIndex !== -1) {
				state.answers[existingAnswerIndex] = action.payload;
			} else {
				state.answers.push(action.payload);
			}
		},
	},
});
export const { addAnswer } = previewSlice.actions;
export default previewSlice.reducer;
