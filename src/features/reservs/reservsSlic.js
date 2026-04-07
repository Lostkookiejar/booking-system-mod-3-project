import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3000/";

export const fetchReservsByUser = createAsyncThunk(
  "reservs/fetchByUser",
  async (userId) => {
    const response = await fetch(`${BASE_URL}/reservs/user/${userId}`);
    return response.json();
  },
);

const reservsSlice = createSlice({
  name: "reservs",
  initialState: { reservs: [], loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReservsByUser.fulfilled, (state, action) => {
      state.reservs = action.payload;
      state.loading = false;
    });
  },
});

export default reservsSlice.reducer;
