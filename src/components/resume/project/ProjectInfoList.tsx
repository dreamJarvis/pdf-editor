/** @format */

import { Box } from "@mui/material";
import { IProjectInfo } from "../../../services/types";
import { ProjectInfoView } from "./ProjectInfoView";
import { EDIT_MODAL_ACTION_TYPE } from "../../utils/constants";

export const ProjectInfoList = ({
	projectsList,
}: {
	projectsList: Array<IProjectInfo>;
}) => {
	return (
		<Box className='flex flex-col items-center justify-center mt-4 p-2 mb-10'>
			<div className='w-5/6'>
				{projectsList.map((info, index) => (
					<ProjectInfoView showEdit={EDIT_MODAL_ACTION_TYPE.visible} key={info?.id + index} projectInfo={info} />
				))}
			</div>
		</Box>
	);
};
