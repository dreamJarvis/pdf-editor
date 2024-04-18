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
import {
	addNewEmploymentData,
	updateEmploymentDate,
} from "../../../services/resumeReducers";
import { IEmploymentInfo } from "../../../services/types";
import {
	getInitializedEmploymentInfo,
	getTodaysDateISOFormat,
	getTotalExperienceInMonths,
} from "../../utils/common";
import { employmentInfoReducer } from "../store/employmentStore";
import { NOTICE_PERIOD } from "../../utils/constants";
import { EMPLOYMENT_INFO_ACTIONS } from "../store/resumeReducerActions";

export const EmploymentInfoModal = ({
	employmentInfo,
	closeModal,
	action,
}: {
	closeModal: any;
	action: string;
	employmentInfo: IEmploymentInfo | null;
}) => {
	const [employmentData, dispatchEmploymentData] = useReducer(
		employmentInfoReducer,
		getInitializedEmploymentInfo(employmentInfo)
	);
	const dispatch = useDispatch();

	const addEmploymentInfo = () => {
		const newEmploymentData = {
			...employmentData,
			totalExperience: getTotalExperienceInMonths(
				new Date(employmentData?.joiningDate),
				new Date(employmentData?.leavingDate ?? "")
			),
		};
		if (action === "ADD") {
			dispatch(addNewEmploymentData(newEmploymentData));
		} else if (action === "EDIT") {
			dispatch(updateEmploymentDate(newEmploymentData));
		}
		closeModal(false);
	};

	return (
		<div className='employment-info'>
			<form className='flex flex-row justify-center mt-10'>
				<Paper elevation={2} className='w-4/6'>
					<div className='flex flex-wrap justify-center py-7'>
						<div className='employment-type w-4/6 flex flex-col items-start'>
							<FormLabel id='employment-type-row-radio-group-label'>
								Employment Type
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby='demo-row-radio-buttons-group-label'
								name='row-radio-buttons-group'
								defaultValue={employmentData?.employmenttype}
								// value={employmentData?.employmenttype}
								onChange={(e) => {
									dispatchEmploymentData({
										type: EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS,
										payload: {
											employmenttype: e.target.value,
										},
									});
								}}>
								<FormControlLabel
									value='full time'
									control={<Radio />}
									label='full time'
								/>
								<FormControlLabel
									value='contract'
									control={<Radio />}
									label='contract'
								/>
								<FormControlLabel
									value='internship'
									control={<Radio />}
									label='internship'
								/>
							</RadioGroup>
						</div>
						<div className='current-working w-4/6 mt-2 flex flex-col items-start'>
							<FormLabel id='current-employer-row-radio-group-label'>
								is this your current employment ?
							</FormLabel>
							<RadioGroup
								row
								defaultValue={employmentData?.currentEmployer ? "yes" : "no"}
								// value={employmentData?.currentEmployer}
								onChange={(e) => {
									dispatchEmploymentData({
										type: EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS,
										payload: {
											currentEmployer: e.target.value === "yes",
											leavingDate: getTodaysDateISOFormat(),
										},
									});
								}}
								aria-labelledby='current-employer-group-label'
								name='row-radio-buttons-group'>
								<FormControlLabel value='no' control={<Radio />} label='no' />
								<FormControlLabel value='yes' control={<Radio />} label='yes' />
							</RadioGroup>
						</div>
					</div>
					<div className='employment-info flex flex-wrap justify-center mb-2'>
						<div className='company-details w-4/6'>
							<TextField
								id='company-name'
								label='Company Name'
								variant='outlined'
								value={employmentData?.companyName}
								onChange={(e) => {
									dispatchEmploymentData({
										type: EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS,
										payload: {
											companyName: e.target.value,
										},
									});
								}}
								fullWidth
								required
							/>
						</div>
						<div className='designation m-2 w-4/6'>
							<TextField
								id='jobTitle'
								label='Job Title'
								value={employmentData?.jobTitle}
								onChange={(e) => {
									dispatchEmploymentData({
										type: EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS,
										payload: {
											jobTitle: e.target.value,
										},
									});
								}}
								fullWidth
								required
								variant='outlined'
							/>
						</div>
						<div className='joining-date m-2 w-4/6 flex gap-2'>
							<div className='joining-date basis-2/4'>
								<label htmlFor='joiningDate' className='basis-2/4'>
									joined:{" "}
								</label>
								<input
									type='date'
									value={employmentData?.joiningDate}
									onChange={(e) => {
										dispatchEmploymentData({
											type: EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS,
											payload: {
												joiningDate: e.target.value,
											},
										});
									}}
									className='h-12 bg-slate-200 p-4 rounded-md'
								/>
							</div>
							{!employmentData?.currentEmployer && (
								<div className='leaving-date basis-2/4'>
									<label htmlFor='leavingDate' className='basis-2/4'>
										left :{" "}
									</label>
									<input
										type='date'
										value={
											employmentData?.leavingDate ?? getTodaysDateISOFormat()
										}
										onChange={(e) => {
											dispatchEmploymentData({
												type: EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS,
												payload: {
													leavingDate: e.target.value,
												},
											});
										}}
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
							)}
						</div>
						<div className='m-2 w-4/6'>
							<TextField
								id='jobProfile'
								label='job profile'
								value={employmentData?.jobProfile}
								onChange={(e) => {
									dispatchEmploymentData({
										type: EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS,
										payload: {
											jobProfile: e.target.value,
										},
									});
								}}
								multiline
								fullWidth
								rows={4}
								placeholder='type here...'
							/>
						</div>
						<div className='m-2 w-4/6'>
							<TextField
								id='noticePeriod'
								select
								label='Notice Period'
								value={employmentData?.noticePeriod}
								onChange={(e) => {
									dispatchEmploymentData({
										type: EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS,
										payload: {
											noticePeriod: e.target.value,
										},
									});
								}}
								defaultValue=''
								fullWidth>
								{NOTICE_PERIOD.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</div>
						<div className='m-2 w-4/6'>
							<TextField
								id='skills'
								label='skills'
								value={employmentData?.skills?.join()}
								onChange={(e) => {
									dispatchEmploymentData({
										type: EMPLOYMENT_INFO_ACTIONS.ADD_ACTIONS,
										payload: {
											skills: e.target.value.split(","),
										},
									});
								}}
								fullWidth
								helperText='seperate skills with a ,'
								placeholder='React.Js, Javascript...'
							/>
						</div>
					</div>
					<div className='employment-info flex flex-wrap justify-center mb-14'>
						<Button
							variant='contained'
							color='primary'
							onClick={addEmploymentInfo}
							sx={{ marginRight: "2rem" }}>
							{action}
						</Button>
						<Button
							variant='contained'
							color='success'
							onClick={() => closeModal(false)}>
							Close
						</Button>
					</div>
				</Paper>
			</form>
		</div>
	);
};
