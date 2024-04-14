/** @format */

import { Box } from "@mui/material";
import { ISkill } from "../../../services/types";
import { SkillInfoView } from "./SkillInfoView";

export const SkillInfoList = ({ skillList }: { skillList: Array<ISkill> }) => {
	return (
		<div>
			<Box className='flex flex-col items-center justify-center mt-4 p-2 mb-10'>
				{skillList.map((info, index) => (
					<SkillInfoView key={info?.id + index} projectInfo={info} />
				))}
			</Box>
		</div>
	);
};
