/** @format */

import { Button, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { ReactElement } from "react";

export const EditModal = ({
	children,
	openModal,
	setOpenModal,
}: {
	children: ReactElement;
	openModal: boolean;
	setOpenModal: Function;
}) => {
	return (
		<div className='flex flex-col w-[100%] items-end basis-1/6'>
			<Button
				startIcon={<EditIcon />}
				color='success'
				onClick={() => setOpenModal(true)}
			/>
			<Modal
				open={openModal}
				style={{ overflow: "auto", paddingBottom: "10px" }}
				onClose={() => setOpenModal(false)}>
				{children}
			</Modal>
		</div>
	);
};
