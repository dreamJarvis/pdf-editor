/** @format */

import { Box } from "@mui/material";
import { ISkill } from "../../../services/types";
import { SkillInfoView } from "./SkillInfoView";

export const SkillInfoList = ({ skillList }: { skillList: Array<ISkill> }) => {
	return (
		<div>
			<Box className='flex flex-col items-center justify-center mt-4 p-2 mb-10'>
				<div className='text-gray-700 text-pretty w-[80%] flex flex-row items-start justify-start text-start border-black p-3 text-base'>
					<h1 className='basis-1/5'>skill</h1>
					<h1 className='basis-1/5'>version</h1>
					<h1 className='basis-1/5'>last used</h1>
					<h1 className='basis-1/5'>experience</h1>
					<h1 className='basis-1/5'>...</h1>
				</div>

				{skillList.map((info, index) => (
					<SkillInfoView key={info?.id + index} skillInfo={info} />
				))}
			</Box>
		</div>
	);
};
