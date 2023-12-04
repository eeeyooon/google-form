import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FormState = {
	cards: number[];
};

const initialState: FormState = {
	cards: [1],
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
	},
});

export const { addCard, removeCard } = formSlice.actions;
export default formSlice.reducer;
