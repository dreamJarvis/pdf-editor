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
import { IEducationInfo } from "../../../services/types";
import { addNewEducationData } from "../../../services/resumeData";

const educationLevels = [
	{
		value: "Doctorate/PhD",
		label: "Doctorate/PhD",
	},
	{
		value: "Masters/Post-Graduation",
		label: "Masters/Post-Graduation",
	},
	{
		value: "Graduation",
		label: "Graduation",
	},
];

const gradingSystems = [
	{
		value: "Scale 10 Grading System",
		label: "Scale 10 Grading System",
	},
	{
		value: "Scale 4 Grading System",
		label: "Scale 4 Grading System",
	},
	{
		value: "% Marks of 100 Maximum",
		label: "% Marks of 100 Maximum",
	},
];

/* 
	TODO: use useReducers, instead of multiple useState() for tha same objects
*/
export const EducationInfoModal = ({
	setOpenEducationModal,
}: {
	setOpenEducationModal: Function;
}) => {
	const [degreeLevel, setDegreeLevel] = useState("");
	const [university, setUniversity] = useState("");
	const [course, setCourse] = useState("");
	const [specialization, setSpecialization] = useState("");
	const [courseType, setCourseType] = useState("");
	const [startingYear, setStartingYear] = useState("");
	const [endingYear, setEndingYear] = useState("");
	const [courseCompleted, setCourseCompleted] = useState("no");
	const [gradingsystem, setGradingsystem] = useState("no");
	const [marks, setMarks] = useState("no");
	const dispatch = useDispatch();

	const addEducationInfo = () => {
		const newEducationDate: IEducationInfo = {
			id: new Date().getMilliseconds(),
			education: degreeLevel,
			university: university,
			course: course,
			specialization: specialization,
			courseType: courseType,
			startingYear: new Date(startingYear),
			graduationYear: new Date(endingYear),
			gradingSystem: gradingsystem,
			marks: marks,
		};

		dispatch(addNewEducationData(newEducationDate));
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
								onChange={(e) => setCourseCompleted(e.target.value)}>
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
									onChange={(e) => setDegreeLevel(e.target.value)}
									defaultValue=''
									fullWidth>
									{educationLevels.map((option) => (
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
									onChange={(e) => setUniversity(e.target.value)}
									defaultValue=''
									fullWidth></TextField>
							</div>
							<div className='m-2 w-full'>
								<TextField
									id='course'
									label='course'
									onChange={(e) => setCourse(e.target.value)}
									defaultValue=''
									fullWidth></TextField>
							</div>
							<div className='m-2 w-full'>
								<TextField
									id='specialization'
									label='specialization'
									onChange={(e) => setSpecialization(e.target.value)}
									defaultValue=''
									fullWidth></TextField>
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
								onChange={(e) => setCourseType(e.target.value)}>
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
									onChange={(e) => setStartingYear(e.target.value)}
									className='h-12 bg-slate-200 p-4 rounded-md'
								/>
							</div>
							{courseCompleted === "yes" && (
								<div className='leaving-date basis-2/4'>
									<label htmlFor='joiningDate' className='basis-2/4'>
										completed :{" "}
									</label>
									<input
										type='date'
										onChange={(e) => setEndingYear(e.target.value)}
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
							)}
						</div>
						{courseCompleted === "yes" && (
							<div className='employment-type w-4/6 flex flex-col items-center mt-6 mb-4'>
								<div className='m-2 w-full'>
									<TextField
										id='gradingSystem'
										select
										label='Grading System'
										onChange={(e) => setGradingsystem(e.target.value)}
										defaultValue=''
										fullWidth>
										{gradingSystems.map((option) => (
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
										onChange={(e) => setMarks(e.target.value)}
										defaultValue=''
										fullWidth></TextField>
								</div>
							</div>
						)}
						<div className='employment-type w-4/6 flex flex-row justify-center mt-8 mb-4'>
							<Button
								variant='contained'
								color='primary'
								onClick={addEducationInfo}
								sx={{ marginRight: "2rem" }}>
								Add
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
