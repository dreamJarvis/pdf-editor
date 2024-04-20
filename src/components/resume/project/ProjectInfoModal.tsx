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
	addNewProjectData,
	updateProjectData,
} from "../../../services/resumeReducers";
import { IProjectInfo } from "../../../services/types";
import {
	getInitializedProjectInfo,
	tagEmploymentEducation,
} from "../../utils/common";
import { projectInfoReducer } from "../store/reducers/project";
import { PROJECT_INFO_ACTIONS } from "../store/resumeReducerActions";

export const ProjectInfoModal = ({
	closeModal,
	projectInfo,
	actionType,
}: {
	closeModal: Function;
	projectInfo: IProjectInfo | null;
	actionType: string;
}) => {
	const dispatch = useDispatch();
	const [projectData, dispatchProjectlData] = useReducer(
		projectInfoReducer,
		getInitializedProjectInfo(projectInfo)
	);

	const addProjectInfo = () => {
		if (actionType === "ADD") dispatch(addNewProjectData(projectData));
		if (actionType === "EDIT") dispatch(updateProjectData(projectData));
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
										value={projectData?.projectTitle}
										onChange={(e) => {
											dispatchProjectlData({
												type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
												payload: { projectTitle: e.target.value },
											});
										}}
										defaultValue=''
										fullWidth
									/>
								</div>
								<div className='m-2 w-full'>
									<TextField
										id='projectTag'
										select
										label='Tag this project with your employment/education'
										defaultValue={projectData?.projectAssociation}
										value={projectData?.projectAssociation}
										onChange={(e) => {
											dispatchProjectlData({
												type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
												payload: { projectAssociation: e.target.value },
											});
										}}
										fullWidth>
										{tagEmploymentEducation().map((option) => (
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
										value={projectData?.client}
										onChange={(e) => {
											dispatchProjectlData({
												type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
												payload: { client: e.target.value },
											});
										}}
										defaultValue={projectData?.client}
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
									defaultValue={projectData?.projectStatus}
									value={projectData?.projectStatus}
									onChange={(e) => {
										dispatchProjectlData({
											type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
											payload: { projectStatus: e.target.value },
										});
									}}>
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
										value={projectData?.started}
										onChange={(e) => {
											dispatchProjectlData({
												type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
												payload: { started: e.target.value },
											});
										}}
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
								{projectData?.projectStatus === "completed" && (
									<div className='leaving-date basis-2/4'>
										<label htmlFor='joiningDate' className='basis-2/4'>
											completed :{" "}
										</label>
										<input
											type='date'
											value={projectData?.completed}
											onChange={(e) => {
												dispatchProjectlData({
													type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
													payload: { completed: e.target.value },
												});
											}}
											className='h-12 bg-slate-200 p-4 rounded-md'
										/>
									</div>
								)}
							</div>
							<div className='employment-type w-4/6 flex flex-col items-start mt-6'>
								<div className='m-2 w-full'>
									<TextField
										id='projectDetails'
										value={projectData?.projectDetails}
										label='Project Details'
										onChange={(e) => {
											dispatchProjectlData({
												type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
												payload: { projectDetails: e.target.value },
											});
										}}
										defaultValue={projectData?.projectDetails}
										multiline
										fullWidth
									/>
								</div>
								<div className='m-2 w-full'>
									<TextField
										id='skills'
										label='skills'
										value={projectData?.skillsUsed}
										onChange={(e) => {
											dispatchProjectlData({
												type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
												payload: { skillsUsed: e.target.value.split(",") },
											});
										}}
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
										value={projectData?.liveLink}
										onChange={(e) => {
											dispatchProjectlData({
												type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
												payload: { liveLink: e.target.value },
											});
										}}
										fullWidth
										defaultValue={projectData?.liveLink}
										helperText='project live link'
										placeholder='...'
									/>
								</div>
								<div className='m-2 w-1/2'>
									<TextField
										id='repoLink'
										label='repository link'
										value={projectData?.repositoryLink}
										onChange={(e) => {
											dispatchProjectlData({
												type: PROJECT_INFO_ACTIONS.ADD_ACTIONS,
												payload: { repositoryLink: e.target.value },
											});
										}}
										defaultValue={projectData?.repositoryLink}
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
									{actionType}
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
