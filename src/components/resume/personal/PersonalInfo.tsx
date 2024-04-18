/** @format */

import { Paper, Box, Container, Modal, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { PersonalInfoModal } from "./PersonalInfoModal";
import { PersonalInfoView } from "./PersonalInfoView";

export const PersonalInfo = () => {
	const personalInfo = useSelector((state: RootState) => state.personalDetails);
	const [openPersonalInfoModal, setOpenPersonalInfoModal] = useState(false);

	return (
		<Container className='mt-20'>
			<Box className='job-details flex flex-row justify-center'>
				<Paper elevation={2} className='w-5/6'>
					<div className='employment-info-list-header flex flex-row'>
						<div className='employment-header basis-3/4 flex items-center m-4'>
							<h2 className='font-sans text-2xl p-2 text-slate-500 font-semibold'>
								Personal
							</h2>
						</div>
						<div className='add-job p-2 m-2 basis-1/4'>
							{!personalInfo && (
								<Button
									variant='contained'
									color='success'
									startIcon={<AddIcon />}
									onClick={() => setOpenPersonalInfoModal(true)}
								/>
							)}
							<Modal
								open={openPersonalInfoModal}
								style={{ overflow: "auto", paddingBottom: "10px" }}
								onClose={() => setOpenPersonalInfoModal(false)}
								aria-labelledby='add-employment-detail-modal'
								aria-describedby='add-employment-description'>
								<PersonalInfoModal
									setOpenPersonalInfoModal={setOpenPersonalInfoModal}
								/>
							</Modal>
						</div>
					</div>
					<Box className='employment-info-list-details flex flex-row justify-center'>
						<div className='w-5/6'>
							{personalInfo && <PersonalInfoView personalInfo={personalInfo} />}
						</div>
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};
