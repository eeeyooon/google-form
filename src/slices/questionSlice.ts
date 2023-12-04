import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type QuestionState = {
	cards: {
		[cardId: number]: {
			questionType: string;
			options: string[];
			textQuestion: string;
			cardTitle: string;
		};
	};
};

const initialState: QuestionState = {
	cards: {
		1: {
			questionType: 'RadioType',
			options: ['옵션1'],
			textQuestion: '',
			cardTitle: '질문',
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
		updateTextQuestion: (state, action: PayloadAction<{ cardId: number; text: string }>) => {
			const { cardId, text } = action.payload;
			state.cards[cardId].textQuestion = text;
		},
		addCardState: (state, action: PayloadAction<number>) => {
			const newCardId = action.payload;
			state.cards[newCardId] = {
				questionType: 'RadioType',
				options: ['옵션1'],
				textQuestion: '',
				cardTitle: '질문',
			};
		},
	},
});

export const {
	updateCardTitle,
	setQuestionType,
	addOption,
	removeOption,
	updateOption,
	updateTextQuestion,
	addCardState,
} = questionSlice.actions;
export default questionSlice.reducer;
