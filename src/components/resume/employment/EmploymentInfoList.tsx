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
		<Box className='flex flex-col items-center justify-center mt-4 p-2 mb-10'>
			<div className='w-5/6'>
				{employmentInfoList.map((info, index) => (
					<EmploymentInfoView key={info?.id + index} employmentInfo={info} />
				))}
			</div>
		</Box>
	);
};
