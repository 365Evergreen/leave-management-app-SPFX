import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LeaveFormData } from "../components/pages/request/Request";
import { SPFI } from "@pnp/sp";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { addLeaveRequest, LeaveRequest } from "../services/leaveService";


export const submitLeave = createAsyncThunk<
  LeaveFormData,
  LeaveFormData,
  {
    rejectValue: string;
    extra: { sp: SPFI };
  }
>(
  "leave/submitLeave",
  async (formData, { extra, rejectWithValue }) => { // Destructure rejectWithValue from the thunkAPI
    const { sp } = extra;
    try {
      await addLeaveRequest(sp, formData);
      alert("Data Added to SP list 🎇");
      return formData;
    } catch (error) {
      return rejectWithValue(error.message); // Use the destructured rejectWithValue
    }
  }
);

// slice file
export const fetchLeaveRequests = createAsyncThunk<
  any[], // type of items returned
  void,
  { rejectValue: string; extra: { sp: SPFI } }
>(
  "leave/fetchLeaveRequests",
  async (_, { extra, rejectWithValue }) => {
    const { sp } = extra;
    if (!sp) return [];
    try {
      const items = await LeaveRequest(sp);
      console.log("Sp List Items : ✨", items);
      return items;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);


const leaveSlice = createSlice({
  name: "leave",
  initialState: {
    loading: false,
    success: false,
    error: null as string | null,
    items: [] as any[],
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
      })

      // Fetch Leave Requests
      .addCase(fetchLeaveRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeaveRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchLeaveRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default leaveSlice.reducer;
