/** @format */

import { Box } from "@mui/material";
import { IProjects } from "../../../services/types";
import { ProjectInfoView } from "./ProjectInfoView";

export const ProjectInfoList = ({
	projectsList,
}: {
	projectsList: Array<IProjects>;
}) => {
	return (
		<Box className='flex flex-col items-center justify-center mt-4 p-2 mb-10'>
			{projectsList.map((info, index) => (
				<ProjectInfoView key={info?.id + index} projectInfo={info} />
			))}
		</Box>
	);
};
