/** @format */

import { createSlice } from "@reduxjs/toolkit";
import {
	tempEmploymentData,
	tempEducationData,
	tempPersoanlDetails,
	tempEmploymentData2,
	tempProjetData,
	tempProjetData2,
} from "./mock-data";

const initialState = {
	personalDetails: tempPersoanlDetails,
	education: [tempEducationData],
	employmentInfo: [tempEmploymentData, tempEmploymentData2],
	projects: [tempProjetData, tempProjetData2],
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
		addNewProjectData: (state, action) => {
			const updateProjectData = [...state.projects, action.payload];
			console.log("updateProjectData : ", updateProjectData);
			state.projects = updateProjectData;
		},
	},
});

export const { addNewEducationData, addNewEmploymentData, addNewProjectData } =
	resumeDataSlice.actions;
export default resumeDataSlice.reducer;
