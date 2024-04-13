/** @format */

import {
	FormControlLabel,
	FormLabel,
	MenuItem,
	Paper,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";
import { useState } from "react";

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

export const EmploymentInfoModal = () => {
	const [currentEmployer, setCurrentEmployer] = useState(true);

	return (
		<div className='employment-info'>
			<form className='flex flex-row justify-center mt-20'>
				<Paper elevation={2} className='w-4/6'>
					<div className='flex flex-wrap justify-center mt-20'>
						<div className='employment-type w-4/6 flex flex-col items-start'>
							<FormLabel id='employment-type-row-radio-group-label'>
								Employment Type
							</FormLabel>
							<RadioGroup
								row
								aria-labelledby='demo-row-radio-buttons-group-label'
								name='row-radio-buttons-group'>
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
						<div className='current-working w-4/6 mt-9 flex flex-col items-start'>
							<FormLabel id='current-employer-row-radio-group-label'>
								is this your current employment ?
							</FormLabel>
							<RadioGroup
								row
								onChange={(e) => {
									setCurrentEmployer(e.target.value === "yes");
								}}
								aria-labelledby='current-employer-group-label'
								name='row-radio-buttons-group'>
								<FormControlLabel value='no' control={<Radio />} label='no' />
								<FormControlLabel value='yes' control={<Radio />} label='yes' />
							</RadioGroup>
						</div>
					</div>
					<div className='employment-info flex flex-wrap justify-center mt-9 mb-14'>
						<div className='company-details m-2 w-4/6'>
							<TextField
								id='company-name'
								label='Company Name'
								variant='outlined'
								fullWidth
								required
							/>
						</div>
						<div className='designation m-2 w-4/6'>
							<TextField
								id='jobTitle'
								label='Job Title'
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
									className='h-12 bg-slate-200 p-4 rounded-md'
								/>
							</div>
							{currentEmployer && (
								<div className='leaving-date basis-2/4'>
									<label htmlFor='joiningDate' className='basis-2/4'>
										left :{" "}
									</label>
									<input
										type='date'
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
							)}
						</div>
						<div className='m-2 w-4/6'>
							<TextField
								id='jobProfile'
								label='job profile'
								multiline
								fullWidth
								rows={4}
								defaultValue='type here...'
							/>
						</div>
						<div className='m-2 w-4/6'>
							<TextField
								id='noticePeriod'
								select
								label='Notice Period'
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
								fullWidth
								helperText='seperate skills with a ,'
								placeholder='React.Js, Javascript...'
							/>
						</div>
					</div>
				</Paper>
			</form>
		</div>
	);
};
