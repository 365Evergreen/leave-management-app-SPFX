import { configureStore } from "@reduxjs/toolkit";
import LeaveReduser from './leaveSlice'

// emplty store
export const store = configureStore({
    reducer:{
        leave : LeaveReduser
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;