/** @format */
import React from "react";
import { IEducationInfo } from "../../../services/types";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const EducationInfoView = ({
	educationalInfo,
}: {
	educationalInfo: IEducationInfo;
}) => {
	const {
		id,
		education,
		university,
		course,
		specialization,
		courseType,
		startingYear,
		graduationYear,
		gradingSystem,
		marks,
	} = educationalInfo;

	console.log("educationalInfo : ", educationalInfo);

	return (
		<div className='employment-info w-5/6'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md'>
				<div className='employment-info-job-title mt-2 flex flex-row w-[100%]'>
					<div className='text-center text-gray-600 text-pretty text-lg basis-5/6 w-[100%] flex flex-col items-start'>
						<h1>
							{course} ({specialization})
						</h1>
					</div>
					<div className='flex flex-col w-[100%] items-end basis-1/6'>
						<Button startIcon={<EditIcon />} color='success' />
					</div>
				</div>
				<div className='employment-info-company-name mt-1'>
					<b>{university}</b>
				</div>
				<div className='employment-info-duration mt-1'>
					<small>
						{startingYear.getFullYear()} to {graduationYear?.getFullYear()}
					</small>{" "}
					| <small>{courseType}</small>
				</div>
				<div className='employment-info-job-profile flex text-start mt-2'>
					<p className='font-sans text-gray-600 text-pretty text-sm'>
						{gradingSystem} | {marks}
					</p>
				</div>
			</Box>
		</div>
	);
};
