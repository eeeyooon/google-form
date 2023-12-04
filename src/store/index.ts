import { configureStore } from '@reduxjs/toolkit';
import { questionSlice } from './../slices/questionSlice';

const store = configureStore({
	reducer: {
		question: questionSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
