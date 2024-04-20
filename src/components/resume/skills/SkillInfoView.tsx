/** @format */

import { Box } from "@mui/material";
import { ISkill } from "../../../services/types";
import { SkillInfoModal } from "./SkillInfoModal";
import { ACTION_TYPE, EDIT_MODAL_ACTION_TYPE } from "../../utils/constants";
import { useState } from "react";
import { getTotalExperienceInMonths } from "../../utils/common";
import { EditModal } from "../../common/EditModal";

export const SkillInfoView = ({
	skillInfo,
	showEdit,
}: {
	skillInfo: ISkill;
	showEdit: string;
}) => {
	const { skill, softwareVersion, lastUsed, usedFrom } = skillInfo;
	const [skillModal, setOpenSkillModal] = useState(false);

	const lastUsedYYMMDD = new Date(lastUsed);
	const usedFromYYMMDD = new Date(usedFrom);
	const getTotalExpMonths = getTotalExperienceInMonths(
		lastUsedYYMMDD,
		usedFromYYMMDD
	);

	return (
		<div className='employment-info'>
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
								{Math.floor(getTotalExpMonths / 12)} years{" "}
								{Math.floor(getTotalExpMonths % 12)} months
							</h1>
						</div>
						{showEdit === EDIT_MODAL_ACTION_TYPE.visible && (
							<EditModal
								openModal={skillModal}
								setOpenModal={setOpenSkillModal}>
								<SkillInfoModal
									actionType={ACTION_TYPE.edit}
									skillInfo={skillInfo}
									setOpenSkillModal={setOpenSkillModal}
								/>
							</EditModal>
						)}
					</div>
				</div>
			</Box>
		</div>
	);
};
