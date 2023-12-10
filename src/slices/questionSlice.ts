import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RADIO_TYPE } from '../const/QuestionTypes';

export type Option = {
	id: string;
	text: string;
};

type QuestionCard = {
	questionType: string;
	options: Option[];
	cardTitle: string;
	isRequired: boolean;
	isFocused: boolean;
};

type QuestionState = {
	cards: {
		[cardId: number]: QuestionCard;
	};
};

const initialState: QuestionState = {
	cards: {
		1: {
			questionType: RADIO_TYPE,
			options: [{ id: '1', text: '옵션1' }],
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
			state.cards[cardId].options = [{ id: '1', text: '옵션1' }];
		},
		addOption: (state, action: PayloadAction<number>) => {
			const cardId = action.payload;
			const newOptionId = `${state.cards[cardId].options.length + 1}`;
			state.cards[cardId].options.push({ id: newOptionId, text: `옵션${newOptionId}` });
		},
		removeOption: (state, action: PayloadAction<{ cardId: number; optionId: string }>) => {
			const { cardId, optionId } = action.payload;
			state.cards[cardId].options = state.cards[cardId].options.filter((option) => option.id !== optionId);
		},
		updateOption: (state, action: PayloadAction<{ cardId: number; optionId: string; value: string }>) => {
			const { cardId, optionId, value } = action.payload;
			const optionIndex = state.cards[cardId].options.findIndex((option) => option.id === optionId);
			if (optionIndex !== -1) {
				state.cards[cardId].options[optionIndex].text = value;
			}
		},
		addCardState: (state, action: PayloadAction<number>) => {
			const newCardId = action.payload;
			state.cards[newCardId] = {
				questionType: RADIO_TYPE,
				options: [{ id: '1', text: '옵션1' }],
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
		moveOption: (state, action: PayloadAction<{ cardId: number; sourceIndex: number; destinationIndex: number }>) => {
			const { cardId, sourceIndex, destinationIndex } = action.payload;
			const newOptions = Array.from(state.cards[cardId].options);
			const movedOption = newOptions.splice(sourceIndex, 1)[0];
			newOptions.splice(destinationIndex, 0, movedOption);

			state.cards[cardId].options = newOptions;
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
	moveOption,
} = questionSlice.actions;
export default questionSlice.reducer;
