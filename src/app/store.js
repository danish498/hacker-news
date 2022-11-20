import { configureStore } from "@reduxjs/toolkit";

import storiesReducer from "../features/stories/storiesSlice";
import newsReducer from "../features/comments/newsSlice";

export const store = configureStore({
  reducer: { news: newsReducer },
});
