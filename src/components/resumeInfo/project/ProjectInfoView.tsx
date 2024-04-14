/** @format */

import { Box, Button } from "@mui/material";
import { IProjects } from "../../../services/types";
import EditIcon from "@mui/icons-material/Edit";

export const ProjectInfoView = ({
	projectInfo,
}: {
	projectInfo: IProjects;
}) => {
	const {
		id,
		projectTitle,
		projectAssociation,
		client,
		projectStatus,
		started,
		completed,
		projectDetails,
		skillsUsed,
		liveLink,
		repositoryLink,
	} = projectInfo;

	return (
		<div className='employment-info w-5/6'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md'>
				<div className='employment-info-job-title mt-2 flex flex-row w-[100%]'>
					<div className='text-center text-gray-600 text-pretty text-lg basis-5/6 w-[100%] flex flex-col items-start'>
						<h1>
							{projectTitle} ({projectStatus})
						</h1>
					</div>
					<div className='flex flex-col w-[100%] items-end basis-1/6'>
						<Button startIcon={<EditIcon />} color='success' />
					</div>
				</div>
				<div className='employment-info-company-name mt-1'>
					<b>{client}</b>
				</div>
				<div className='employment-info-duration mt-1'>
					<small>
						{started.getFullYear()} to {completed?.getFullYear()}
					</small>{" "}
					| <small>{projectAssociation}</small>
				</div>
				<div className='employment-info-job-profile flex text-start mt-2'>
					<p className='font-sans text-gray-600 text-pretty text-sm'>
						<a href={liveLink}>live</a> | <a href={repositoryLink}>repo</a>
					</p>
				</div>
				<div className='employment-info-job-profile flex text-start mt-2'>
					<p className='font-sans text-gray-600 text-pretty text-sm'>
						{projectDetails}
					</p>
				</div>
				<div className='employment-info-job-profile flex text-start mt-2'>
					<small className='font-sans text-gray-800 text-pretty text-sm'>
						skills : {skillsUsed.join()}
					</small>
				</div>
			</Box>
		</div>
	);
};
