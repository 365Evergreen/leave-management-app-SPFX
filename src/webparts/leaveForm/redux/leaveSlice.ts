import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LeaveFormData } from "../components/pages/request/Request";
import { SPFI } from "@pnp/sp";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { addLeaveRequest } from "../services/leaveService";


type SubmitLeaveArgs = { sp: SPFI; formData: LeaveFormData };

export const submitLeave = createAsyncThunk<
    LeaveFormData,
    SubmitLeaveArgs,
    { rejectValue: string }
>(
    "leave/submitLeave",
    async ({ sp, formData }, thunkAPI) => {
        try {
            await addLeaveRequest(sp, formData);
            alert("Data Added to SP list 🎇")
            return formData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const leaveSlice = createSlice({
    name: "leave",
    initialState: {
        loading: false,
        success: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitLeave.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(submitLeave.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(submitLeave.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default leaveSlice.reducer;