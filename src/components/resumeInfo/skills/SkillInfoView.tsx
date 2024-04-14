/** @format */

import { Box, Button } from "@mui/material";
import { ISkill } from "../../../services/types";
import EditIcon from "@mui/icons-material/Edit";

export const SkillInfoView = ({ skillInfo }: { skillInfo: ISkill }) => {
	const { skill, softwareVersion, lastUsed, usedFrom, usedTill } = skillInfo;

	console.log("skillInfo : ", skillInfo);

	return (
		<div className='employment-info w-5/6'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md'>
				<div className='employment-info-job-title mt-2 flex flex-row w-[100%]'>
					<div className='text-center text-gray-600 text-pretty text-lg basis-5/6 w-[100%] flex flex-col items-start'>
						<h1>
							{skill} | ({softwareVersion})
						</h1>
					</div>
					<div className='flex flex-col w-[100%] items-end basis-1/6'>
						<Button startIcon={<EditIcon />} color='success' />
					</div>
				</div>
				<div className='employment-info-company-name mt-1'>
					<b>{lastUsed}</b>
				</div>
				<div className='employment-info-duration mt-1'>
					<small>
						{usedFrom} to {usedTill}
					</small>
				</div>
			</Box>
		</div>
	);
};
