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
	},
});

export const { addCard } = formSlice.actions;
export default formSlice.reducer;
