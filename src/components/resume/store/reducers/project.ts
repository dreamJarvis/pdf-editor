/** @format */

import { IProjectInfo } from "../../../../services/types";
import { PROJECT_INFO_ACTIONS } from "../resumeReducerActions";

export const projectInfoReducer = (
	state: IProjectInfo,
	action: { type: any; payload: {} }
) => {
	switch (action.type) {
		case PROJECT_INFO_ACTIONS.ADD_ACTIONS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
