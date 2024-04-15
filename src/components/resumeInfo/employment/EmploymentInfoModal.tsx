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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewEmploymentData } from "../../../services/resumeData";
import { IEmploymentInfo } from "../../../services/types";
import { getTotalExperienceInMonths } from "../../utils/common";

const noticePeriod = [
	{
		value: "Immediate",
		label: "15 days or less",
	},
	{
		value: "1month",
		label: "1 month",
	},
	{
		value: "2month",
		label: "2 month",
	},
	{
		value: "3month",
		label: "3 months",
	},
	{
		value: "morethan3month",
		label: "more than 3 months",
	},
	{
		value: "serving",
		label: "serving notice period",
	},
];

/* 
	TODO: use useReducers, instead of multiple useState() for tha same objects
*/
export const EmploymentInfoModal = ({ closeModal }: { closeModal: any }) => {
	const [currentEmployer, setCurrentEmployer] = useState("no");
	const [employmentType, setEmploymentType] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [jobTitle, setJobTitle] = useState("");
	const [joinedDate, setJoinedDate] = useState("");
	const [resignationDate, setResignationDate] = useState("");
	const [jobProfile, setJobProfile] = useState("");
	const [noticePeriodVal, setNoticePeriodVal] = useState("");
	const [skillSet, setSkillsSet] = useState("");

	const dispatch = useDispatch();

	const addEmploymentInfo = () => {
		const newEmploymentData: IEmploymentInfo = {
			id: new Date().getMilliseconds(),
			currentEmployer: currentEmployer === "no" ? false : true,
			employmenttype: employmentType,
			companyName: companyName,
			totalExperience: getTotalExperienceInMonths(
				new Date(joinedDate),
				new Date(resignationDate)
			),
			jobTitle: jobTitle,
			joiningDate: new Date(joinedDate),
			leavingDate: new Date(resignationDate),
			skills: skillSet.split(", "),
			jobProfile: jobProfile,
			noticePeriod: noticePeriodVal,
		};
		dispatch(addNewEmploymentData(newEmploymentData));
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
								onChange={(e) => setEmploymentType(e.target.value)}>
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
								defaultValue={currentEmployer}
								onChange={(e) => {
									setCurrentEmployer(e.target.value);
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
								value={companyName}
								onChange={(e) => setCompanyName(e.target.value)}
								fullWidth
								required
							/>
						</div>
						<div className='designation m-2 w-4/6'>
							<TextField
								id='jobTitle'
								label='Job Title'
								value={jobTitle}
								onChange={(e) => setJobTitle(e.target.value)}
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
									onChange={(e) => setJoinedDate(e.target.value)}
									className='h-12 bg-slate-200 p-4 rounded-md'
								/>
							</div>
							{currentEmployer === "no" && (
								<div className='leaving-date basis-2/4'>
									<label htmlFor='joiningDate' className='basis-2/4'>
										left :{" "}
									</label>
									<input
										type='date'
										onChange={(e) => setResignationDate(e.target.value)}
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
							)}
						</div>
						<div className='m-2 w-4/6'>
							<TextField
								id='jobProfile'
								label='job profile'
								value={jobProfile}
								onChange={(e) => setJobProfile(e.target.value)}
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
								onChange={(e) => setNoticePeriodVal(e.target.value)}
								defaultValue=''
								fullWidth>
								{noticePeriod.map((option) => (
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
								onChange={(e) => setSkillsSet(e.target.value)}
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
							Add
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
