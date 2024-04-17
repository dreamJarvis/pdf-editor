/** @format */
/** @format */

import { Button, Paper, TextField } from "@mui/material";
import { useReducer } from "react";
import { ISkill } from "../../../services/types";
import { useDispatch } from "react-redux";
import {
	addNewSkillData,
	updateSkillData,
} from "../../../services/resumeReducers";
import { getInitializedSkillInfo } from "../../utils/common";
import { skillInfoReducer } from "../store/skillStore";
import { SKILL_INFO_ACTIONS } from "../store/resumeReducerActions";

export const SkillInfoModal = ({
	setOpenSkillModal,
	skillInfo,
	actionType,
}: {
	setOpenSkillModal: Function;
	skillInfo: ISkill | null;
	actionType: string;
}) => {
	const dispatch = useDispatch();
	const [SkillData, dispatchSkillData] = useReducer(
		skillInfoReducer,
		getInitializedSkillInfo(skillInfo)
	);

	const addSkillInfo = () => {
		if (actionType === "ADD") dispatch(addNewSkillData(SkillData));
		if (actionType === "EDIT") dispatch(updateSkillData(SkillData));
		setOpenSkillModal(false);
	};

	return (
		<div className='employment-info'>
			<form className='flex flex-row justify-center mt-14'>
				<Paper elevation={2} className='w-4/6'>
					<div className='flex flex-wrap justify-center py-7'>
						<div className='text-gray-700 text-pretty w-[80%] flex flex-col items-start justify-start text-start border-black p-3 text-base'>
							<h1 className='font-semibold text-xl'>IT Skills</h1>
							<small>
								Mention skills like programming languages (Java, Python),
								softwares (Microsoft Word, Excel) and more, to show your
								technical expertise.
							</small>
						</div>
						<div className='employment-type w-4/6 flex flex-row items-start mt-6'>
							<div className='m-2 w-1/2'>
								<TextField
									id='skill'
									label='skill'
									onChange={(e) => {
										dispatchSkillData({
											type: SKILL_INFO_ACTIONS.ADD_ACTIONS,
											payload: { skill: e.target.value },
										});
									}}
									defaultValue={SkillData?.skill}
									value={SkillData?.skill}
									fullWidth
								/>
							</div>
							<div className='m-2 w-1/2'>
								<TextField
									id='softwareVersion'
									label='version'
									onChange={(e) => {
										dispatchSkillData({
											type: SKILL_INFO_ACTIONS.ADD_ACTIONS,
											payload: { softwareVersion: e.target.value },
										});
									}}
									defaultValue={SkillData?.softwareVersion}
									value={SkillData?.softwareVersion}
									fullWidth
								/>
							</div>
						</div>
						<div className='employment-type w-4/6 flex flex-row justify-center mb-4'>
							<div className='joining-date mt-6 w-4/6 flex gap-2'>
								<div className='joining-date basis-2/4'>
									<label htmlFor='joiningDate' className='basis-2/4'>
										from :{" "}
									</label>
									<input
										type='date'
										defaultValue={SkillData?.usedFrom}
										value={SkillData?.usedFrom}
										onChange={(e) => {
											dispatchSkillData({
												type: SKILL_INFO_ACTIONS.ADD_ACTIONS,
												payload: { usedFrom: e.target.value },
											});
										}}
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
								<div className='leaving-date basis-2/4'>
									<label htmlFor='leavingDate' className='basis-2/4'>
										to :{" "}
									</label>
									<input
										type='date'
										defaultValue={SkillData?.usedTill}
										value={SkillData?.usedTill}
										onChange={(e) => {
											dispatchSkillData({
												type: SKILL_INFO_ACTIONS.ADD_ACTIONS,
												payload: {
													usedTill: e.target.value,
													lastUsed: e.target.value,
												},
											});
										}}
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
							</div>
						</div>
						<div className='employment-type w-4/6 flex flex-row justify-center mt-8 mb-4'>
							<Button
								variant='contained'
								color='primary'
								onClick={addSkillInfo}
								sx={{ marginRight: "2rem" }}>
								{actionType}
							</Button>
							<Button
								variant='contained'
								color='error'
								onClick={() => setOpenSkillModal(false)}>
								Close
							</Button>
						</div>
					</div>
				</Paper>
			</form>
		</div>
	);
};
