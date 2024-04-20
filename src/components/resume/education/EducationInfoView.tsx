/** @format */
import React, { useState } from "react";
import { IEducationInfo } from "../../../services/types";
import { Box, Button, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { EducationInfoModal } from "./EducationInfoModal";
import { getInitializedEducationData } from "../../utils/common";
import { ACTION_TYPE } from "../../utils/constants";

export const EducationInfoView = ({
	educationalInfo,
	showEdit
}: {
	educationalInfo: IEducationInfo;
	showEdit: string
}) => {
	const {
		university,
		course,
		specialization,
		courseType,
		startingYear,
		graduationYear,
		gradingSystem,
		marks,
	} = educationalInfo;

	const [openEducationModal, setOpenEducationModal] = useState(false);
	const startingYearYYMMDD = new Date(startingYear);
	const graduationYearYYMMDD = new Date(graduationYear);

	return (
		<div className='employment-info'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md'>
				<div className='employment-info-job-title mt-2 flex flex-row w-[100%]'>
					<div className='text-center text-gray-600 text-pretty text-lg basis-5/6 w-[100%] flex flex-col items-start'>
						<h1>
							{course} ({specialization})
						</h1>
					</div>
					{showEdit === 'VISIBLE' && <div className='flex flex-col w-[100%] items-end basis-1/6'>
						<Button
							startIcon={<EditIcon />}
							color='success'
							onClick={() => setOpenEducationModal(true)}
						/>
						<Modal
							open={openEducationModal}
							style={{ overflow: "auto", paddingBottom: "10px" }}
							onClose={() => setOpenEducationModal(false)}
							aria-labelledby='add-employment-detail-modal'
							aria-describedby='add-employment-description'>
							<EducationInfoModal
								action={ACTION_TYPE.edit}
								educationInfo={getInitializedEducationData(educationalInfo)}
								setOpenEducationModal={setOpenEducationModal}
							/>
						</Modal>
					</div>}
				</div>
				<div className='employment-info-company-name mt-1'>
					<b>{university}</b>
				</div>
				<div className='employment-info-duration mt-1'>
					<small>
						{startingYearYYMMDD.getFullYear()} to{" "}
						{graduationYearYYMMDD?.getFullYear()}
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
