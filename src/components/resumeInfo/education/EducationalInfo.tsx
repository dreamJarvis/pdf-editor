/** @format */

import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Box, Button, Container, Modal, Paper } from "@mui/material";
import { EducationInfoModal } from "./EducationInfoModal";
import { useState } from "react";
import { EducationInfoList } from "./EducationInfoList";
import AddIcon from "@mui/icons-material/Add";

export const EducationalInfo = () => {
	const educationalInfoList = useSelector(
		(state: RootState) => state.education
	);
	const [openEducationModal, setOpenEducationModal] = useState(false);

	return (
		<Container className='mt-20'>
			<Box className='job-details flex flex-row justify-center'>
				<Paper elevation={2} className='w-5/6'>
					<div className='employment-info-list-header flex flex-row'>
						<div className='employment-header basis-3/4 flex items-center m-4'>
							<h2 className='font-sans text-2xl p-2 text-slate-500 font-semibold'>
								Education
							</h2>
						</div>
						<div className='add-job p-2 m-2 basis-1/4'>
							<Button
								variant='contained'
								color='success'
								startIcon={<AddIcon />}
								onClick={() => setOpenEducationModal(true)}></Button>
							<Modal
								open={openEducationModal}
								style={{ overflow: "auto", paddingBottom: "10px" }}
								onClose={() => setOpenEducationModal(false)}
								aria-labelledby='add-employment-detail-modal'
								aria-describedby='add-employment-description'>
								<EducationInfoModal
									setOpenEducationModal={setOpenEducationModal}
								/>
							</Modal>
						</div>
					</div>
					<Box className='employment-info-list-details'>
						{educationalInfoList?.length > 0 && (
							<EducationInfoList educationalInfoList={educationalInfoList} />
						)}
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};
