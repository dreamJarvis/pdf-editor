/** @format */

import { createSlice } from "@reduxjs/toolkit";
import {
	tempEmploymentData,
	tempEducationData,
	tempPersoanlDetails,
	tempEmploymentData2,
	tempProjetData,
	tempProjetData2,
	tempSkillData,
	tempSkillData2,
} from "./mock-data";

const initialState = {
	personalDetails: tempPersoanlDetails,
	education: [tempEducationData],
	employmentInfo: [tempEmploymentData, tempEmploymentData2],
	projects: [tempProjetData, tempProjetData2],
	skills: [tempSkillData, tempSkillData2],
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
			state.projects = updateProjectData;
		},
		addNewSkillData: (state, action) => {
			const updateSkillData = [...state.skills, action.payload];
			state.skills = updateSkillData;
		},
		addPersonalData: (state, action) => {
			const updatePersonalData = {
				...state.personalDetails,
				...action.payload,
			};
			state.personalDetails = updatePersonalData;
		},
	},
});

export const {
	addNewEducationData,
	addNewEmploymentData,
	addNewProjectData,
	addNewSkillData,
	addPersonalData,
} = resumeDataSlice.actions;
export default resumeDataSlice.reducer;
