import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// Import reducera ze Slice
import  appReducer  from "../slices/app.slice"

// Stworzenie Store
export const store = configureStore({
  //Rejestracja Reducerów
  reducer: {
    app: appReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
