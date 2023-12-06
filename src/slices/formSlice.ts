import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FormState = {
	cards: number[];
	formTitle: string;
	formDesc: string;
	requiredCardId: number | null;
};

const initialState: FormState = {
	cards: [1],
	formTitle: '제목 없는 설문지',
	formDesc: '',
	requiredCardId: null,
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
		addCopiedCard: (state, action: PayloadAction<{ copyId: number; originId: number }>) => {
			const { copyId, originId } = action.payload;

			const destinationIndex = state.cards.findIndex((cardId) => cardId === originId) + 1;

			if (destinationIndex >= 0) {
				state.cards.splice(destinationIndex, 0, copyId);
			}
		},
		moveCard: (state, action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>) => {
			const { sourceIndex, destinationIndex } = action.payload;
			const newCards = [...state.cards];
			const movedCard = newCards.splice(sourceIndex, 1)[0];
			newCards.splice(destinationIndex, 0, movedCard);

			state.cards = newCards;
		},
		addRequiredCardId: (state, action) => {
			state.requiredCardId = action.payload;
		},
	},
});

export const { addCard, removeCard, updateFormTitle, updateFormDesc, addCopiedCard, moveCard, addRequiredCardId } =
	formSlice.actions;
export default formSlice.reducer;
