/** @format */

import { Box, Button, Modal } from "@mui/material";
import { IEmploymentInfo } from "../../../services/types";
import EditIcon from "@mui/icons-material/Edit";
import { EmploymentInfoModal } from "./EmploymentInfoModal";
import { ACTION_TYPE } from "../../utils/constants";
import { getInitializedEmploymentInfo } from "../../utils/common";
import { useState } from "react";

export const EmploymentInfoView = ({
	employmentInfo,
	showEdit
}: {
	employmentInfo: IEmploymentInfo;
	showEdit: string
}) => {
	const {
		companyName,
		jobTitle,
		jobProfile,
		joiningDate,
		leavingDate,
		employmenttype,
	} = employmentInfo;

	const leavingDateYYMMDD = new Date(leavingDate ?? "");
	const joiningDateYYMMDD = new Date(joiningDate);

	const [openEmploymentModal, setOpenEmploymentModal] = useState(false);

	const totalDurationOfMonths =
		(leavingDateYYMMDD ? leavingDateYYMMDD.getMonth() : 0) +
		(12 - joiningDateYYMMDD?.getMonth());
	const totalDurationYears = Math.floor(totalDurationOfMonths / 12);

	const totalEmploymentDurationMonths = Math.floor(totalDurationOfMonths % 12);
	const totalEmploymentDurationYears =
		(leavingDateYYMMDD ? leavingDateYYMMDD.getFullYear() : 0) -
		joiningDateYYMMDD?.getFullYear() -
		1 +
		totalDurationYears;

	return (
		<div className='employment-info'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md'>
				<div className='employment-info-job-title mt-2 flex flex-row w-[100%]'>
					<div className='text-center text-gray-600 text-pretty text-lg basis-5/6 w-[100%] flex flex-col items-start'>
						<h1>{jobTitle}</h1>
					</div>
					{
						showEdit === "VISIBLE" && <div className='flex flex-col w-[100%] items-end basis-1/6'>
							<Button
								startIcon={<EditIcon />}
								color='success'
								onClick={() => setOpenEmploymentModal(true)}
							/>
							<Modal
								open={openEmploymentModal}
								style={{ overflow: "auto", paddingBottom: "10px" }}
								onClose={() => setOpenEmploymentModal(false)}
								aria-labelledby='add-employment-detail-modal'
								aria-describedby='add-employment-description'>
								<EmploymentInfoModal
									employmentInfo={getInitializedEmploymentInfo(employmentInfo)}
									action={ACTION_TYPE.edit}
									closeModal={setOpenEmploymentModal}
								/>
							</Modal>
						</div>
					}
				</div>
				<div className='employment-info-company-name mt-1'>
					<b>{companyName}</b>
				</div>
				<div className='employment-info-duration mt-1'>
					<small>{employmenttype}</small> |{" "}
					<small>
						{joiningDateYYMMDD.toDateString()} to{" "}
						{leavingDateYYMMDD?.toDateString()} ({" "}
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
