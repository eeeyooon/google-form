import { configureStore } from '@reduxjs/toolkit';
import { questionSlice } from './../slices/questionSlice';
import { formSlice } from '../slices/formSlice';

const store = configureStore({
	reducer: {
		form: formSlice.reducer,
		question: questionSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
