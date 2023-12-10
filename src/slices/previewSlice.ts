import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Answer = {
	cardId: number;
	answer: string[];
	isRequired: boolean;
	question: string;
	orderId: number;
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
			const sortAnswers = () => {
				state.answers.sort((a, b) => a.orderId - b.orderId);
			};

			const currentAnswerIndex = state.answers.findIndex((answer) => answer.cardId === action.payload.cardId);

			if (currentAnswerIndex !== -1) {
				state.answers[currentAnswerIndex] = action.payload;
			} else {
				state.answers.push(action.payload);
			}
			sortAnswers();
		},
	},
});
export const { addAnswer } = previewSlice.actions;
export default previewSlice.reducer;
