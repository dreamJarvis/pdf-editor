/** @format */

import {
	Button,
	FormControlLabel,
	FormLabel,
	MenuItem,
	Paper,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { IEducationInfo } from "../../../services/types";
import {
	addNewEducationData,
	updateEducationDate,
} from "../../../services/resumeReducers";
import { getInitializedEducationData } from "../../utils/common";
import { educationInfoReducer } from "../store/reducers/education";
import { EDUCATION_INFO_ACTIONS } from "../store/resumeReducerActions";
import { EDUCATION_LEVEL, GRADING_SYSTEM } from "../../utils/constants";

export const EducationInfoModal = ({
	action,
	setOpenEducationModal,
	educationInfo,
}: {
	action: string;
	setOpenEducationModal: Function;
	educationInfo: IEducationInfo | null;
}) => {
	const [educationData, dispatchEducationData] = useReducer(
		educationInfoReducer,
		getInitializedEducationData(educationInfo)
	);
	const dispatch = useDispatch();

	const addEducationInfo = () => {
		if (action === "EDIT") dispatch(updateEducationDate(educationData));
		else if (action === "ADD") dispatch(addNewEducationData(educationData));
		setOpenEducationModal(false);
	};

	return (
		<div className='employment-info'>
			<form className='flex flex-row justify-center mt-14'>
				<Paper elevation={2} className='w-4/6'>
					<div className='flex flex-wrap justify-center py-7'>
						<div className='employment-type w-4/6 flex flex-col items-start mt-6'>
							<FormLabel id='employment-type-row-radio-group-label'>
								Education completed ?
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby='demo-row-radio-buttons-group-label'
								name='row-radio-buttons-group'
								defaultValue={educationData?.completed}
								onChange={(e) => {
									dispatchEducationData({
										type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
										payload: {
											completed: e.target.value,
										},
									});
								}}>
								<FormControlLabel value='yes' control={<Radio />} label='yes' />
								<FormControlLabel value='no`' control={<Radio />} label='no' />
							</RadioGroup>
						</div>
						<div className='employment-type w-4/6 flex flex-col items-center mt-3'>
							<div className='m-2 w-full'>
								<TextField
									id='Education'
									select
									label='Education'
									value={educationData?.education}
									onChange={(e) => {
										dispatchEducationData({
											type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
											payload: {
												education: e.target.value,
											},
										});
									}}
									defaultValue=''
									fullWidth>
									{EDUCATION_LEVEL.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</div>
							<div className='m-2 w-full'>
								<TextField
									id='University/Institute'
									label='Institute'
									value={educationData?.university}
									onChange={(e) => {
										dispatchEducationData({
											type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
											payload: {
												university: e.target.value,
											},
										});
									}}
									defaultValue=''
									fullWidth
								/>
							</div>
							<div className='m-2 w-full'>
								<TextField
									id='course'
									label='course'
									value={educationData?.course}
									onChange={(e) => {
										dispatchEducationData({
											type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
											payload: {
												course: e.target.value,
											},
										});
									}}
									defaultValue=''
									fullWidth></TextField>
							</div>
							<div className='m-2 w-full'>
								<TextField
									id='specialization'
									label='specialization'
									value={educationData?.specialization}
									onChange={(e) => {
										dispatchEducationData({
											type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
											payload: {
												specialization: e.target.value,
											},
										});
									}}
									defaultValue=''
									fullWidth
								/>
							</div>
						</div>
						<div className='employment-type w-4/6 flex flex-col items-start mt-6'>
							<FormLabel id='employment-type-row-radio-group-label'>
								Education Type
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby='demo-row-radio-buttons-group-label'
								name='row-radio-buttons-group'
								defaultValue={educationData?.courseType}
								onChange={(e) => {
									dispatchEducationData({
										type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
										payload: {
											courseType: e.target.value,
										},
									});
								}}>
								<FormControlLabel
									value='full time'
									control={<Radio />}
									label='full time'
								/>
								<FormControlLabel
									value='part-time'
									control={<Radio />}
									label='part-time'
								/>
								<FormControlLabel
									value='correspondance/Distance Learning'
									control={<Radio />}
									label='correspondance/Distance Learning'
								/>
							</RadioGroup>
						</div>
						<div className='joining-date mt-6 w-4/6 flex gap-2'>
							<div className='joining-date basis-2/4'>
								<label htmlFor='joiningDate' className='basis-2/4'>
									started :{" "}
								</label>
								<input
									type='date'
									value={educationData?.startingYear}
									onChange={(e) => {
										dispatchEducationData({
											type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
											payload: {
												startingYear: e.target.value,
											},
										});
									}}
									className='h-12 bg-slate-200 p-4 rounded-md'
								/>
							</div>
							{educationData?.completed === "yes" && (
								<div className='leaving-date basis-2/4'>
									<label htmlFor='joiningDate' className='basis-2/4'>
										completed :{" "}
									</label>
									<input
										type='date'
										value={educationData?.graduationYear}
										onChange={(e) => {
											dispatchEducationData({
												type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
												payload: {
													graduationYear: e.target.value,
												},
											});
										}}
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
							)}
						</div>
						{educationData?.completed === "yes" && (
							<div className='employment-type w-4/6 flex flex-col items-center mt-6 mb-4'>
								<div className='m-2 w-full'>
									<TextField
										id='gradingSystem'
										select
										label='Grading System'
										value={educationData?.gradingSystem}
										onChange={(e) => {
											dispatchEducationData({
												type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
												payload: {
													gradingSystem: e.target.value,
												},
											});
										}}
										defaultValue=''
										fullWidth>
										{GRADING_SYSTEM.map((option) => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</div>
								<div className='m-2 w-full'>
									<TextField
										id='marks'
										label='marks'
										value={educationData?.marks}
										onChange={(e) => {
											dispatchEducationData({
												type: EDUCATION_INFO_ACTIONS.ADD_ACTIONS,
												payload: {
													marks: e.target.value,
												},
											});
										}}
										defaultValue=''
										fullWidth
									/>
								</div>
							</div>
						)}
						<div className='employment-type w-4/6 flex flex-row justify-center mt-8 mb-4'>
							<Button
								variant='contained'
								color='primary'
								onClick={addEducationInfo}
								sx={{ marginRight: "2rem" }}>
								{action}
							</Button>
							<Button
								variant='contained'
								color='error'
								onClick={() => setOpenEducationModal(false)}>
								Close
							</Button>
						</div>
					</div>
				</Paper>
			</form>
		</div>
	);
};
