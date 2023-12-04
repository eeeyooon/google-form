import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FormState = {
	cards: number[];
	formTitle: string;
	formDesc: string;
};

const initialState: FormState = {
	cards: [1],
	formTitle: '제목 없는 설문지',
	formDesc: '',
};

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		addCard: (state, action: PayloadAction<number>) => {
			const newCardId = action.payload;
			state.cards.push(newCardId);
		},
		removeCard: (state, action: PayloadAction<number>) => {
			state.cards = state.cards.filter((cardId) => cardId !== action.payload);
		},
		updateFormTitle: (state, action: PayloadAction<string>) => {
			state.formTitle = action.payload;
		},
		updateFormDesc: (state, action: PayloadAction<string>) => {
			state.formDesc = action.payload;
		},
	},
});

export const { addCard, removeCard, updateFormTitle, updateFormDesc } = formSlice.actions;
export default formSlice.reducer;
