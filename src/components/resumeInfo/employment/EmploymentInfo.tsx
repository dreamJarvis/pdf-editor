/** @format */

import { Box, Button, Container, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { EmploymentInfoList } from "./EmploymentInfoList";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { EmploymentInfoModal } from "./EmploymentInfoModal";
import AddIcon from "@mui/icons-material/Add";

export const EmploymentInfo = () => {
	const employmentInfo = useSelector(
		(state: RootState) => state.employmentInfo
	);
	const [openEmploymentModal, setOpenEmploymentModal] = useState(false);

	return (
		<Container className='mt-20'>
			<Box className='job-details flex flex-row justify-center'>
				<Paper elevation={2} className='w-5/6'>
					<div className='employment-info-list-header flex flex-row'>
						<div className='employment-header basis-3/4 flex  m-4'>
							<h2 className='font-sans text-2xl p-2 text-slate-500 font-semibold'>
								Employment
							</h2>
						</div>
						<div className='add-job p-4 m-2 basis-1/4'>
							<Button
								variant='contained'
								color='success'
								startIcon={<AddIcon fontSize='large' />}
								onClick={() => setOpenEmploymentModal(true)}></Button>
							<Modal
								open={openEmploymentModal}
								onClose={() => setOpenEmploymentModal(false)}
								aria-labelledby='add-employment-detail-modal'
								aria-describedby='add-employment-description'>
								<EmploymentInfoModal closeModal={setOpenEmploymentModal} />
							</Modal>
						</div>
					</div>
					<Box className='employment-info-list-details'>
						{employmentInfo.length > 0 && (
							<EmploymentInfoList employmentInfoList={employmentInfo} />
						)}
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};
