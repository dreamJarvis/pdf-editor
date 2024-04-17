/** @format */

import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Box, Button, Container, Modal, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ProjectInfoModal } from "./ProjectInfoModal";
import { useState } from "react";
import { ProjectInfoList } from "./ProjectInfoList";
import { ACTION_TYPE } from "../../utils/constants";

export const ProjectInfo = () => {
	const projectsList = useSelector((state: RootState) => state.projects);
	const [openProjectModal, setOpenProjectModal] = useState(false);

	return (
		<Container className='mt-20'>
			<Box className='job-details flex flex-row justify-center'>
				<Paper elevation={2} className='w-5/6'>
					<div className='employment-info-list-header flex flex-row'>
						<div className='employment-header basis-3/4 flex  m-4'>
							<h2 className='font-sans text-2xl p-2 text-slate-500 font-semibold'>
								Projects
							</h2>
						</div>
						<div className='add-job p-4 m-2 basis-1/4'>
							<Button
								variant='contained'
								color='success'
								startIcon={<AddIcon fontSize='large' />}
								onClick={() => setOpenProjectModal(true)}
							/>
							<Modal
								style={{ overflow: "auto", paddingBottom: "10px" }}
								open={openProjectModal}
								onClose={() => setOpenProjectModal(false)}
								aria-labelledby='add-employment-detail-modal'
								aria-describedby='add-employment-description'>
								<ProjectInfoModal
									actionType={ACTION_TYPE.add}
									closeModal={setOpenProjectModal}
									projectInfo={null}
								/>
							</Modal>
						</div>
					</div>
					<Box className='employment-info-list-details'>
						{projectsList.length > 0 && (
							<ProjectInfoList projectsList={projectsList} />
						)}
					</Box>
				</Paper>
			</Box>
		</Container>
	);
};
