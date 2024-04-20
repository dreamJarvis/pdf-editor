/** @format */

import { Box } from "@mui/material";
import { IPersonalInfo } from "../../../services/types";
import { PersonalInfoModal } from "./PersonalInfoModal";
import { useState } from "react";
import { totalWorkingExperience } from "../../utils/common";
import { EditModal } from "../../common/EditModal";
import { EDIT_MODAL_ACTION_TYPE } from "../../utils/constants";

export const PersonalInfoView = ({
	personalInfo,
	showEdit,
}: {
	personalInfo: IPersonalInfo;
	showEdit: string;
}) => {
	const [openPersonalInfoModal, setOpenPersonalInfoModal] = useState(false);

	const {
		about,
		firstName,
		lastName,
		email,
		availableToJoin,
		address,
		contactNumbers,
		additionalInfo,
	} = personalInfo;

	const { city, state } = address;
	const { linkedIn, portfolio, github } = additionalInfo;
	const { contactPhoneNumber } = contactNumbers;

	const totalWorkingExperienceData = totalWorkingExperience();

	return (
		<div className='employment-info justify-center mb-6'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md justify-center'>
				<div className='employment-info-job-title mt-2 flex flex-col w-[100%]'>
					<div className='name flex flex-col text-center text-gray-600 text-pretty text-lg w-[100%] items-center justify-start'>
						<div className='flex flex-row'>
							<div>
								<h1>
									{firstName.toUpperCase()} {lastName.toUpperCase()}
								</h1>
							</div>
							{showEdit === EDIT_MODAL_ACTION_TYPE.visible && (
								<EditModal
									openModal={openPersonalInfoModal}
									setOpenModal={setOpenPersonalInfoModal}>
									<PersonalInfoModal
										setOpenPersonalInfoModal={setOpenPersonalInfoModal}
									/>
								</EditModal>
							)}
						</div>
						<div className='w-[90%] mb-4 mt-2'>
							<small>{about}</small>
						</div>
					</div>
					<div className='name flex flex-row text-center text-gray-600 text-pretty text-lg w-[100%] items-center justify-start p-4'>
						<div className='personal-details flex flex-col w-full'>
							<small>
								{city}, {state}
							</small>{" "}
							<small>
								<a href={linkedIn}>LinkedIn</a> |{" "}
								<a href={portfolio}>Portfolio</a> | <a href={github}>Github</a>
							</small>
							<small>
								{Math.floor(totalWorkingExperienceData / 12)} years,{" "}
								{Math.floor(totalWorkingExperienceData % 12)} moths
							</small>
						</div>
						<div
							className='contact-details flex flex-col w-full'
							style={{ borderLeft: "2px solid #969696" }}>
							<small>{contactPhoneNumber}</small>
							<small>{email}</small>
							<small>Availabel to join in {availableToJoin}</small>
						</div>
					</div>
				</div>
			</Box>
		</div>
	);
};
