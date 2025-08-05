import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitLeave = createAsyncThunk(
    "leave/submitLeave",
    async (formData, thunkAPI) => {
        try {
            console.log("Form data to be posted:", formData);
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