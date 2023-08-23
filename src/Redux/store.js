import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './Contacts/phonebookSlise';
import { userReducer } from './Auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistConfigUser } from './persistConfigs';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    user: persistReducer(persistConfigUser, userReducer),
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
