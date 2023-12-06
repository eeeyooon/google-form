import { configureStore } from '@reduxjs/toolkit';
import { questionSlice } from './../slices/questionSlice';
import { formSlice } from '../slices/formSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import { previewSlice } from '../slices/previewSlice';

const rootReducer = combineReducers({
	form: formSlice.reducer,
	question: questionSlice.reducer,
	preview: previewSlice.reducer,
});

const persistConfg = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfg, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
