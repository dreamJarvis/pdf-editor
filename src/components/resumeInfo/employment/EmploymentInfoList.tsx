/** @format */

import { Box } from "@mui/material";
import { IEmploymentInfo } from "../../../services/types";
import { EmploymentInfoView } from "./EmploymentInfoView";

export const EmploymentInfoList = ({
	employmentInfoList,
}: {
	employmentInfoList: Array<IEmploymentInfo>;
}) => {
	return (
		<Box className='flex flex-col items-center justify-center mt-4 p-2'>
			{employmentInfoList.map((info) => (
				<EmploymentInfoView employmentInfo={info} />
			))}
		</Box>
	);
};
