import { configureStore } from '@reduxjs/toolkit';
import { questionSlice } from './../slices/questionSlice';
import { formSlice } from '../slices/formSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	form: formSlice.reducer,
	question: questionSlice.reducer,
});

const persistConfg = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfg, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
