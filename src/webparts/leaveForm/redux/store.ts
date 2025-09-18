// Removed useTypedSelector export from here. Will re-add after RootState is defined.
import { configureStore } from "@reduxjs/toolkit";
import LeaveReduser from './leaveSlice'
import { SPFI } from "@pnp/sp";

// Create a store creator function that accepts sp
export const createStore = (sp: SPFI): ReturnType<typeof configureStore> => {
  return configureStore({
    reducer: {
      leave: LeaveReduser
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { sp }, // Pass the actual sp instance
        },
        serializableCheck: false // Disable for SPFI
      }),
  });
}

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

import { TypedUseSelectorHook, useSelector } from 'react-redux';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;