/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	personalDetails: {
		about: null,
		firstName: null,
		lastName: null,
		dob: null,
		address1: null,
		address2: null,
		address3: null,
		workPhoneNumber: null,
		personalPhoneNumber: null,
		additionalInfo: {
			linkedIn: null,
			portfolio: null,
			github: null,
		},
	},
	education: {
		highestQualification: null,
		cgpa: null,
		university: null,
		admissionYear: null,
		passingYear: null,
	},
	employmentInfo: {},
};

export const resumeDataSlice = createSlice({
	name: "resumeData",
	initialState,
	reducers: {
		addResumeData: (state, action) => {},
	},
});

export const { addResumeData } = resumeDataSlice.actions;
export default resumeDataSlice.reducer;
