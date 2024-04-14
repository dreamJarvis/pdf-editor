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
		addNewEmploymentData: (state, action) => {
			const updateEmploymentData = [...state.employmentInfo, action.payload];
			state.employmentInfo = updateEmploymentData;
		},
		addNewEducationData: (state, action) => {
			const updateEducationData = [...state.education, action.payload];
			state.education = updateEducationData;
		},
	},
});

export const { addNewEducationData, addNewEmploymentData } =
	resumeDataSlice.actions;
export default resumeDataSlice.reducer;
