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
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { addNewProjectData } from "../../../services/resumeData";
import { IProjectInfo } from "../../../services/types";

export const ProjectInfoModal = ({ closeModal }: { closeModal: Function }) => {
	const education = useSelector((state: RootState) => state.education);
	const employment = useSelector((state: RootState) => state.employmentInfo);

	const [projectTitle, setProjectTitle] = useState("");
	const [projectTag, setProjectTag] = useState("");
	const [client, setClient] = useState("");
	const [projectStatus, setProjectStatus] = useState("completed");
	const [startingYear, setStartingYear] = useState("");
	const [endingYear, setEndingYear] = useState("");
	const [projectDetails, setProjectDetails] = useState("");
	const [skillSet, setSkillsSet] = useState("");
	const [liveLink, setLiveLink] = useState("");
	const [repoLink, setRepoLink] = useState("");
	const dispatch = useDispatch();

	const tagEmploymenteducation = () => {
		const employmentList = employment.map((info) => {
			return {
				label: `${info.jobTitle} - ${info.companyName}`,
				value: `${info.jobTitle} - ${info.companyName}`,
			};
		});
		const educationList = education.map((info) => {
			return {
				label: `${info.course} - ${info.university}`,
				value: `${info.course} - ${info.university}`,
			};
		});

		return [...employmentList, ...educationList];
	};

	const addProjectInfo = () => {
		const newProjectData: IProjectInfo = {
			id: new Date().getMilliseconds().toString(),
			projectTitle: projectTitle,
			projectAssociation: projectTag,
			client: client,
			projectStatus: projectStatus,
			started: new Date(startingYear),
			completed: new Date(endingYear),
			projectDetails: projectDetails,
			skillsUsed: skillSet.split(","),
			liveLink: liveLink,
			repositoryLink: repoLink,
		};
		dispatch(addNewProjectData(newProjectData));
		closeModal(false);
	};

	return (
		<div>
			<div className='employment-info'>
				<form className='flex flex-row justify-center mt-12'>
					<Paper elevation={2} className='w-4/6'>
						<div className='flex flex-wrap justify-center py-7'>
							<div className='employment-type w-4/6 flex flex-col items-start mt-6'>
								<div className='m-2 w-full'>
									<TextField
										id='projectTitle'
										label='Project Title'
										onChange={(e) => setProjectTitle(e.target.value)}
										defaultValue=''
										fullWidth
									/>
								</div>
								<div className='m-2 w-full'>
									<TextField
										id='projectTag'
										select
										label='Tag this project with your employment/education'
										onChange={(e) => setProjectTag(e.target.value)}
										defaultValue=''
										fullWidth>
										{tagEmploymenteducation().map((option) => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</div>
							</div>
							<div className='employment-type w-4/6 flex flex-col items-start mt-6'>
								<div className='m-2 w-full'>
									<TextField
										id='client'
										label='client'
										onChange={(e) => setClient(e.target.value)}
										defaultValue=''
										fullWidth
										required
									/>
								</div>
							</div>
							<div className='employment-type w-4/6 flex flex-col items-start mt-6'>
								<FormLabel id='employment-type-row-radio-group-label'>
									project status
								</FormLabel>
								<RadioGroup
									row
									aria-labelledby='project-status-group-label'
									name='project-status-radio-buttons-group'
									defaultValue={projectStatus}
									onChange={(e) => setProjectStatus(e.target.value)}>
									<FormControlLabel
										value='completed'
										control={<Radio />}
										label='completed'
									/>
									<FormControlLabel
										value='in-progress'
										control={<Radio />}
										label='in-progress'
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
								{projectStatus === "completed" && (
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
							<div className='employment-type w-4/6 flex flex-col items-start mt-6'>
								<div className='m-2 w-full'>
									<TextField
										id='projectDetails'
										label='Project Details'
										onChange={(e) => setProjectDetails(e.target.value)}
										defaultValue=''
										multiline
										fullWidth
									/>
								</div>
								<div className='m-2 w-full'>
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
							<div className='employment-type w-4/6 flex flex-row items-start'>
								<div className='m-2 w-1/2'>
									<TextField
										id='liveLink'
										label='live link'
										onChange={(e) => setLiveLink(e.target.value)}
										fullWidth
										helperText='project live link'
										placeholder='...'
									/>
								</div>
								<div className='m-2 w-1/2'>
									<TextField
										id='liveLink'
										label='live link'
										onChange={(e) => setRepoLink(e.target.value)}
										fullWidth
										helperText='project repo link'
										placeholder='...'
									/>
								</div>
							</div>
							<div className='employment-type w-4/6 flex flex-row justify-center mt-4'>
								<Button
									variant='contained'
									color='primary'
									onClick={addProjectInfo}
									sx={{ marginRight: "2rem" }}>
									Add
								</Button>
								<Button
									variant='contained'
									color='error'
									onClick={() => closeModal(false)}>
									Close
								</Button>
							</div>
						</div>
					</Paper>
				</form>
			</div>
		</div>
	);
};
