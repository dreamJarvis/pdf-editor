/** @format */

import { Box, Button, Modal } from "@mui/material";
import { IPersonalInfo } from "../../../services/types";
import EditIcon from "@mui/icons-material/Edit";
import { PersonalInfoModal } from "./PersonalInfoModal";
import { useState } from "react";

export const PersonalInfoView = ({
	personalInfo,
	totalWorkingExperience,
}: {
	personalInfo: IPersonalInfo;
	totalWorkingExperience: number;
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

	return (
		<div className='employment-info w-5/6 justify-center mb-6'>
			<Box className='flex flex-col items-start bg-slate-200 p-2 mt-2 mb-3 shadow-md justify-center'>
				<div className='employment-info-job-title mt-2 flex flex-col w-[100%]'>
					<div className='name flex flex-col text-center text-gray-600 text-pretty text-lg w-[100%] items-center justify-start'>
						{/* <div className='w-fit h-fit'>
							<img src={image} alt='user' />
						</div> */}
						<div className='flex flex-row'>
							<div>
								<h1>
									{firstName.toUpperCase()} {lastName.toUpperCase()}
								</h1>
							</div>
							<div>
								<Button
									startIcon={<EditIcon />}
									color='success'
									onClick={() => setOpenPersonalInfoModal(true)}
								/>
								<Modal
									open={openPersonalInfoModal}
									onClose={() => setOpenPersonalInfoModal(false)}
									aria-labelledby='add-personal-detail-modal'
									aria-describedby='add-personal-description'>
									<PersonalInfoModal
										setOpenPersonalInfoModal={setOpenPersonalInfoModal}
									/>
								</Modal>
							</div>
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
								{Math.floor(totalWorkingExperience / 12)} years,{" "}
								{Math.floor(totalWorkingExperience % 12)} moths
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
