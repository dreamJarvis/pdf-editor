/** @format */

import { IEmploymentInfo } from "../../../services/types";
import { EMPLOYMENT_INFO_ACTIONS } from "./resumeActions";

export const employmentInfoReducer = (
	state: IEmploymentInfo,
	action: { type: any; payload: {} }
) => {
	switch (action.type) {
		case EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
