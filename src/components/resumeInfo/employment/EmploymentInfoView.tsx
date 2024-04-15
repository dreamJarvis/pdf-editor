/** @format */

import { Box, Button } from "@mui/material";
import { IEmploymentInfo } from "../../../services/types";
import EditIcon from "@mui/icons-material/Edit";

/* 
	TODO: edit option
*/
export const EmploymentInfoView = ({
	employmentInfo,
}: {
	employmentInfo: IEmploymentInfo;
}) => {
	const {
		companyName,
		jobTitle,
		jobProfile,
		joiningDate,
		leavingDate,
		employmenttype,
	} = employmentInfo;

	const totalDurationOfMonths =
		(leavingDate ? leavingDate.getMonth() : 0) + (12 - joiningDate?.getMonth());
	const totalDurationYears = Math.floor(totalDurationOfMonths / 12);

	const totalEmploymentDurationMonths = Math.floor(totalDurationOfMonths % 12);
	const totalEmploymentDurationYears =
		(leavingDate ? leavingDate.getFullYear() : 0) -
		joiningDate?.getFullYear() -
		1 +
		totalDurationYears;

	return (
		<div className='employment-info w-5/6'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md'>
				<div className='employment-info-job-title mt-2 flex flex-row w-[100%]'>
					<div className='text-center text-gray-600 text-pretty text-lg basis-5/6 w-[100%] flex flex-col items-start'>
						<h1>{jobTitle}</h1>
					</div>
					<div className='flex flex-col w-[100%] items-end basis-1/6'>
						<Button startIcon={<EditIcon />} color='success' />
					</div>
				</div>
				<div className='employment-info-company-name mt-1'>
					<b>{companyName}</b>
				</div>
				<div className='employment-info-duration mt-1'>
					<small>{employmenttype}</small> |{" "}
					<small>
						{joiningDate.toDateString()} to {leavingDate?.toDateString()} ({" "}
						{`${totalEmploymentDurationYears} years ${totalEmploymentDurationMonths} months`}{" "}
						)
					</small>
				</div>
				<div className='employment-info-job-profile flex text-start mt-2'>
					<p className='font-sans text-gray-600 text-pretty text-sm'>
						{jobProfile}
					</p>
				</div>
			</Box>
		</div>
	);
};
