/** @format */

import { Box, Button, Container, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { EmploymentInfoList } from "./EmploymentInfoList";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { EmploymentInfoModal } from "./EmploymentInfoModal";

export const EmploymentInfo = () => {
	const { employmentInfo } = useSelector((state: RootState) => state);
	const [openEmploymentModal, setOpenEmploymentModal] = useState(false);

	return (
		<Container className='mt-20'>
			<Box className='job-details flex flex-row justify-center'>
				<Paper elevation={2} className='w-5/6'>
					<div className='employment-info-list-header flex flex-row'>
						<div className='employment-header basis-3/4 flex items-center m-4'>
							<h2>Employment</h2>
						</div>
						<div className='add-job p-2 m-2 basis-1/4'>
							<Button
								variant='contained'
								color='success'
								onClick={() => setOpenEmploymentModal(true)}>
								Add
							</Button>
							<Modal
								open={openEmploymentModal}
								onClose={() => setOpenEmploymentModal(false)}
								aria-labelledby='modal-modal-title'
								aria-describedby='modal-modal-description'>
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
