import storage from 'redux-persist/lib/storage';

export const persistConfigUser = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};
