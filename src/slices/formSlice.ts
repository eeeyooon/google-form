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
		addCopiedCard: (state, action: PayloadAction<number>) => {
			const currentCardId = action.payload;
			const currentCardIndex = state.cards.findIndex((cardId) => cardId === currentCardId);
			const newCardId = currentCardId + 1;

			if (currentCardIndex >= 0) {
				state.cards.splice(currentCardIndex + 1, 0, newCardId);
			}
			for (let i = currentCardIndex + 2; i < state.cards.length; i++) {
				state.cards[i] = state.cards[i - 1] + 1;
			}
		},
	},
});

export const { addCard, removeCard, updateFormTitle, updateFormDesc, addCopiedCard } = formSlice.actions;
export default formSlice.reducer;
