import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  newsData: null,
  newsItem: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getNewsData = createAsyncThunk(
  "news/getdata",
  async (requestParams, thunkAPI) => {
    console.log("=========check request parameter========", requestParams);
    try {
      return await newsService.getNewsData(requestParams);
    } catch (error) {
      console.log("errrorrrr", error);
      return error.message;
    }
  }
);
export const getNewsItemData = createAsyncThunk(
  "news/getnewsItem",
  async (requestParams, thunkAPI) => {
    console.log("=========check request parameter========", requestParams);
    try {
      return await newsService.getNewsDataById(requestParams);
    } catch (error) {
      console.log("errrorrrr", error);
      return error.message;
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getNewsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsData.fulfilled, (state, action) => {
        // console.log("hello");
        // console.log(action.payload);

        state.isLoading = false;
        state.isSuccess = true;
        state.newsData = action.payload;
      })
      .addCase(getNewsData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getNewsItemData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsItemData.fulfilled, (state, action) => {
        // console.log("hello");
        // console.log(action.payload);

        state.isLoading = false;
        state.isSuccess = true;
        state.newsItem = action.payload;
      })
      .addCase(getNewsItemData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = newsSlice.actions;
export default newsSlice.reducer;
