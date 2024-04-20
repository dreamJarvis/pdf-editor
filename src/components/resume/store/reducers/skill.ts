/** @format */

import { ISkill } from "../../../../services/types";
import { SKILL_INFO_ACTIONS } from "../resumeReducerActions";

export const skillInfoReducer = (
	state: ISkill,
	action: { type: any; payload: {} }
) => {
	switch (action.type) {
		case SKILL_INFO_ACTIONS.ADD_ACTIONS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
