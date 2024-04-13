/** @format */

import { createSlice } from "@reduxjs/toolkit";
import {
	tempEmploymentData,
	tempEducationData,
	tempPersoanlDetails,
	tempEmploymentData2,
} from "./mock-data";

const initialState = {
	personalDetails: tempPersoanlDetails,
	education: [tempEducationData],
	employmentInfo: [tempEmploymentData, tempEmploymentData2],
};

export const resumeDataSlice = createSlice({
	name: "resumeData",
	initialState,
	reducers: {
		addResumeData: (state, action) => {},
		addNewEmploymentData: (state, action) => {
			const updateEmploymentData = [...state.employmentInfo, action.payload];
			state.employmentInfo = updateEmploymentData;
		},
	},
});

export const { addResumeData, addNewEmploymentData } = resumeDataSlice.actions;
export default resumeDataSlice.reducer;
