import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storiesService from "./storiesService";

const initialState = {
  storiesData: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getStoesData = createAsyncThunk(
  "stores/getStores",
  async (_, thunkAPI) => {
    try {
      return await storiesService.getStoesData();
    } catch (error) {
      return error.message;
    }
  }
);

export const storiesSlice = createSlice({
  name: "stories",
  initialState: initialState,
  reducers: {
    storiesAdded: {
      reducer(state, action) {
        // console.log(state.push(action.payload));
        // state.storiesData.push(action.payload);
      },
    },
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStoesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStoesData.fulfilled, (state, action) => {
        // console.log("hello");
        // console.log(action.payload);

        state.isLoading = false;
        state.isSuccess = true;
        state.storiesData.push(action.payload);
      })
      .addCase(getStoesData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { storiesAdded, reset } = storiesSlice.actions;
export default storiesSlice.reducer;
