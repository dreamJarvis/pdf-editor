/** @format */

import { configureStore } from "@reduxjs/toolkit";
import resumeDataReducer from "./services/resumeReducers";

export const store = configureStore({
	reducer: resumeDataReducer,
});

export type RootState = ReturnType<typeof store.getState>;
