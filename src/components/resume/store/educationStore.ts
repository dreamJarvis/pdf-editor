/** @format */

import { IEducationInfo } from "../../../services/types";
import { EDUCATION_INFO_ACTIONS } from "./resumeReducerActions";

export const educationInfoReducer = (
	state: IEducationInfo,
	action: { type: any; payload: {} }
) => {
	switch (action.type) {
		case EDUCATION_INFO_ACTIONS.ADD_ACTIONS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
