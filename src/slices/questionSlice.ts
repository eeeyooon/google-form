import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type QuestionState = {
	cards: {
		[cardId: number]: {
			questionType: string;
			options: string[];
			cardTitle: string;
			isRequired: boolean;
			isFocused: boolean;
		};
	};
};

const initialState: QuestionState = {
	cards: {
		1: {
			questionType: 'RadioType',
			options: ['옵션1'],
			cardTitle: '질문',
			isRequired: false,
			isFocused: false,
		},
	},
};
export const questionSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		updateCardTitle: (state, action: PayloadAction<{ cardId: number; title: string }>) => {
			const { cardId, title } = action.payload;
			state.cards[cardId].cardTitle = title;
		},
		setQuestionType: (state, action: PayloadAction<{ cardId: number; questionType: string }>) => {
			const { cardId, questionType } = action.payload;
			state.cards[cardId].questionType = questionType;
			state.cards[cardId].options = ['옵션1'];
		},
		addOption: (state, action: PayloadAction<number>) => {
			const cardId = action.payload;
			const newOptionNumber = state.cards[cardId].options.length + 1;
			state.cards[cardId].options.push(`옵션${newOptionNumber}`);
		},
		removeOption: (state, action: PayloadAction<{ cardId: number; optionIndex: number }>) => {
			const { cardId, optionIndex } = action.payload;
			state.cards[cardId].options.splice(optionIndex, 1);
		},
		updateOption: (state, action: PayloadAction<{ cardId: number; index: number; value: string }>) => {
			const { cardId, index, value } = action.payload;
			state.cards[cardId].options[index] = value;
		},
		addCardState: (state, action: PayloadAction<number>) => {
			const newCardId = action.payload;
			state.cards[newCardId] = {
				questionType: 'RadioType',
				options: ['옵션1'],
				cardTitle: '질문',
				isRequired: false,
				isFocused: true,
			};
		},
		removeCardState: (state, action: PayloadAction<number>) => {
			delete state.cards[action.payload];
		},
		toggleRequired: (state, action: PayloadAction<{ cardId: number; isRequired: boolean }>) => {
			const { cardId, isRequired } = action.payload;
			if (state.cards[cardId]) {
				state.cards[cardId].isRequired = isRequired;
			}
		},
		copyCardState: (state, action: PayloadAction<{ originCardId: number; newCardId: number }>) => {
			const { originCardId, newCardId } = action.payload;
			const originCard = state.cards[originCardId];
			if (originCard) {
				state.cards[newCardId] = { ...originCard };
			}
		},
		updateFocus: (state, action: PayloadAction<number>) => {
			if (action.payload === -1) {
				Object.keys(state.cards).forEach((cardId) => {
					state.cards[parseInt(cardId)].isFocused = false;
				});
				return;
			}

			Object.keys(state.cards).forEach((cardId) => {
				state.cards[parseInt(cardId)].isFocused = parseInt(cardId) === action.payload;
			});
		},
	},
});

export const {
	updateCardTitle,
	setQuestionType,
	addOption,
	removeOption,
	updateOption,
	addCardState,
	removeCardState,
	toggleRequired,
	copyCardState,
	updateFocus,
} = questionSlice.actions;
export default questionSlice.reducer;
