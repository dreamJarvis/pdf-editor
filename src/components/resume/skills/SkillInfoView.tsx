/** @format */

import { Box, Button, Modal } from "@mui/material";
import { ISkill } from "../../../services/types";
import EditIcon from "@mui/icons-material/Edit";
import { SkillInfoModal } from "./SkillInfoModal";
import { ACTION_TYPE } from "../../utils/constants";
import { useState } from "react";

export const SkillInfoView = ({ skillInfo }: { skillInfo: ISkill }) => {
	const { skill, softwareVersion, lastUsed, usedFrom, usedTill } = skillInfo;
	const [skillModal, setOpenSkillModal] = useState(false);

	const lastUsedYYMMDD = new Date(lastUsed);
	const usedTillYYMMDD = new Date(usedTill);
	const usedFromYYMMDD = new Date(usedFrom);
	const totalExperienceMonths =
		usedTillYYMMDD.getMonth() + usedFromYYMMDD.getMonth();
	const totalExperienceYears =
		usedTillYYMMDD.getFullYear() -
		usedFromYYMMDD.getFullYear() +
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
							<h1 className='text-base'>{lastUsedYYMMDD.getFullYear()}</h1>
						</div>
						<div className='experience'>
							<h1 className='text-base'>
								{totalExperienceYears} years {totalExperienceMonths} months
							</h1>
						</div>
						<div className='experience'>
							<Button
								startIcon={<EditIcon />}
								color='success'
								onClick={() => setOpenSkillModal(true)}
							/>
							<Modal
								style={{ overflow: "auto", paddingBottom: "10px" }}
								open={skillModal}
								onClose={() => setOpenSkillModal(false)}
								aria-labelledby='add-employment-detail-modal'
								aria-describedby='add-employment-description'>
								<SkillInfoModal
									actionType={ACTION_TYPE.edit}
									skillInfo={skillInfo}
									setOpenSkillModal={setOpenSkillModal}
								/>
							</Modal>
						</div>
					</div>
				</div>
			</Box>
		</div>
	);
};
