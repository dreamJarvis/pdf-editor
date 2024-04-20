/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { tempPersoanlDetails } from "./constants";
import {
	IEducationInfo,
	IEmploymentInfo,
	IPersonalInfo,
	IProjectInfo,
	ISkill,
} from "./types";

/* 
	TODO: resolve webpack issue
	fetching data from a function in common.ts to fill personalDetails gives WEBPACK Error
*/
const initialState: {
	personalDetails: IPersonalInfo;
	education: IEducationInfo[];
	employmentInfo: IEmploymentInfo[];
	projects: IProjectInfo[];
	skills: ISkill[];
} = {
	personalDetails: tempPersoanlDetails, // to avoid webpack issue
	education: [],
	employmentInfo: [],
	projects: [],
	skills: [],
};

export const resumeDataSlice = createSlice({
	name: "resumeData",
	initialState,
	reducers: {
		addNewEmploymentData: (state, action) => {
			const updateEmploymentData = [...state.employmentInfo, action.payload];
			state.employmentInfo = updateEmploymentData;
		},
		updateEmploymentDate: (state, action) => {
			const updatedData = { ...action.payload };
			const updatedEmploymentInfo = state.employmentInfo.map((info) => {
				if (info.id === updatedData.id) return { ...info, ...updatedData };
				return info;
			});
			state.employmentInfo = updatedEmploymentInfo;
		},
		addNewEducationData: (state, action) => {
			const updateEducationData = [...state.education, action.payload];
			state.education = updateEducationData;
		},
		updateEducationDate: (state, action) => {
			const updatedData = { ...action.payload };
			const updatedEducationInfo = state.education.map((info) => {
				if (info.id === updatedData.id) return { ...info, ...updatedData };
				return info;
			});
			state.education = updatedEducationInfo;
		},
		addNewProjectData: (state, action) => {
			const updateProjectData = [...state.projects, action.payload];
			state.projects = updateProjectData;
		},
		updateProjectData: (state, action) => {
			const updatedData = { ...action.payload };
			const updatedProjectInfo = state.projects.map((info) => {
				if (info.id === updatedData.id) return { ...info, ...updatedData };
				return info;
			});
			state.projects = updatedProjectInfo;
		},
		addNewSkillData: (state, action) => {
			const updateSkillData = [...state.skills, action.payload];
			state.skills = updateSkillData;
		},
		updateSkillData: (state, action) => {
			const updatedData = { ...action.payload };
			const updatedSkillInfo = state.skills.map((info) => {
				if (info.id === updatedData.id) return { ...info, ...updatedData };
				return info;
			});
			state.skills = updatedSkillInfo;
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
	updateEducationDate,
	updateEmploymentDate,
	updateProjectData,
	updateSkillData,
} = resumeDataSlice.actions;
export default resumeDataSlice.reducer;
