/** @format */

import { Box, Button } from "@mui/material";
import { ISkill } from "../../../services/types";
import EditIcon from "@mui/icons-material/Edit";

export const SkillInfoView = ({ skillInfo }: { skillInfo: ISkill }) => {
	const { skill, softwareVersion, lastUsed, usedFrom, usedTill } = skillInfo;

	const totalExperienceMonths = usedTill.getMonth() + usedFrom.getMonth();
	const totalExperienceYears =
		usedTill.getFullYear() -
		usedFrom.getFullYear() +
		Math.floor(totalExperienceMonths / 12);

	return (
		<div className='employment-info w-5/6'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md'>
				<div className='employment-info-job-title mt-2 flex flex-row w-[100%]'>
					<div className='text-center text-gray-600 text-pretty text-lg w-[100%] flex flex-row items-start justify-around'>
						<div className='skill-name'>
							<h1 className='text-base'>{skill}</h1>
						</div>
						<div className='skill-version'>
							<h1 className='text-base'>{softwareVersion}</h1>
						</div>
						<div className='last-used'>
							<h1 className='text-base'>{lastUsed.getFullYear()}</h1>
						</div>
						<div className='experience'>
							<h1 className='text-base'>
								{totalExperienceYears} years {totalExperienceMonths} months
							</h1>
						</div>
						<div className='experience'>
							<Button startIcon={<EditIcon />} color='success' />
						</div>
					</div>
				</div>
			</Box>
		</div>
	);
};
