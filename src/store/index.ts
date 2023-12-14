import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { productSlice } from "./entities/product/index";
import { pageSlice } from "./entities/page";

const rootReducer = combineReducers({
  product: productSlice.reducer,
  page: pageSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
