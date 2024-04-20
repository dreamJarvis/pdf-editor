/** @format */

import { IPersonalInfo } from "../../../../services/types";
import { PERSONAL_INFO_ACTIONS } from "../resumeReducerActions";

export const personalInfoReducer = (
	state: IPersonalInfo,
	action: { type: any; payload: {} }
) => {
	switch (action.type) {
		case PERSONAL_INFO_ACTIONS.ADD_PERSONAL:
			return { ...state, ...action.payload };
		case PERSONAL_INFO_ACTIONS.ADD_ADDRESS:
			return { ...state, address: { ...state.address, ...action.payload } };
		case PERSONAL_INFO_ACTIONS.ADD_CONTACT:
			return {
				...state,
				contactNumbers: { ...state.contactNumbers, ...action.payload },
			};
		case PERSONAL_INFO_ACTIONS.ADD_ADDITONAL:
			return {
				...state,
				additionalInfo: { ...state.additionalInfo, ...action.payload },
			};
		default:
			return state;
	}
};
