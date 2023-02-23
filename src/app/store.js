import { configureStore, combineReducers } from '@reduxjs/toolkit';

import AuthReducer from '../features/AuthSlice';

const RootReducer = combineReducers({
  Auth: AuthReducer,
});

export const store = configureStore({ reducer: RootReducer });
