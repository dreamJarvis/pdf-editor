/** @format */

import { Box, Button, Container, Modal, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SkillInfoModal } from "./SkillInfoModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { SkillInfoList } from "./SkillInfoList";

export const SkillInfo = () => {
	const skillList = useSelector((state: RootState) => state.skills);
	const [skillModal, setOpenSkillModal] = useState(false);

	return (
		<div>
			<Container className='mt-20'>
				<Box className='job-details flex flex-row justify-center'>
					<Paper elevation={2} className='w-5/6'>
						<div className='employment-info-list-header flex flex-row'>
							<div className='employment-header basis-3/4 flex  m-4'>
								<h2 className='font-sans text-2xl p-2 text-slate-500 font-semibold'>
									Skills
								</h2>
							</div>
							<div className='add-job p-4 m-2 basis-1/4'>
								<Button
									variant='contained'
									color='success'
									startIcon={<AddIcon fontSize='large' />}
									onClick={() => setOpenSkillModal(true)}></Button>
								<Modal
									style={{ overflow: "auto", paddingBottom: "10px" }}
									open={skillModal}
									onClose={() => setOpenSkillModal(false)}
									aria-labelledby='add-employment-detail-modal'
									aria-describedby='add-employment-description'>
									<SkillInfoModal setOpenSkillModal={setOpenSkillModal} />
								</Modal>
							</div>
						</div>
						<Box className='employment-info-list-details'>
							{skillList.length > 0 && <SkillInfoList skillList={skillList} />}
						</Box>
					</Paper>
				</Box>
			</Container>
		</div>
	);
};
