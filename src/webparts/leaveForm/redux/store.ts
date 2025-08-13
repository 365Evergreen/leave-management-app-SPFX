import { configureStore } from "@reduxjs/toolkit";
import LeaveReduser from './leaveSlice'
import { SPFI } from "@pnp/sp";

// emplty store
export const store = configureStore({
    reducer:{
        leave : LeaveReduser
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          sp: SPFI,
        },
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;