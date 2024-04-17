/** @format */

import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { ISkill } from "../../../services/types";
import { useDispatch } from "react-redux";
import { addNewSkillData } from "../../../services/resumeData";

/* 
	TODO: convert Date type to string type
*/
export const SkillInfoModal = ({
	setOpenSkillModal,
}: {
	setOpenSkillModal: Function;
}) => {
	const [skillName, setSkillName] = useState("");
	const [softwareVersion, setSoftwareVersion] = useState("");
	const [started, setStarted] = useState("");
	const [ended, setEnded] = useState("");
	const dispatch = useDispatch();

	const addSkillInfo = () => {
		const newSkillData: ISkill = {
			id: new Date().getMilliseconds().toString(),
			skill: skillName,
			softwareVersion: softwareVersion,
			lastUsed: ended,
			usedFrom: started,
			usedTill: ended,
		};
		dispatch(addNewSkillData(newSkillData));
		setOpenSkillModal(false);
	};

	return (
		<div className='employment-info'>
			<form className='flex flex-row justify-center mt-14'>
				<Paper elevation={2} className='w-4/6'>
					<div className='flex flex-wrap justify-center py-7'>
						<div className='text-gray-700 text-pretty w-[80%] flex flex-col items-start justify-start text-start border-black p-3 text-base'>
							<h1 className='font-semibold text-xl'>IT Skills</h1>
							<small>
								Mention skills like programming languages (Java, Python),
								softwares (Microsoft Word, Excel) and more, to show your
								technical expertise.
							</small>
						</div>
						<div className='employment-type w-4/6 flex flex-row items-start mt-6'>
							<div className='m-2 w-1/2'>
								<TextField
									id='skill'
									label='skill'
									onChange={(e) => setSkillName(e.target.value)}
									defaultValue=''
									fullWidth
								/>
							</div>
							<div className='m-2 w-1/2'>
								<TextField
									id='softwareVersion'
									label='version'
									onChange={(e) => setSoftwareVersion(e.target.value)}
									defaultValue=''
									fullWidth
								/>
							</div>
						</div>
						<div className='employment-type w-4/6 flex flex-row justify-center mb-4'>
							<div className='joining-date mt-6 w-4/6 flex gap-2'>
								<div className='joining-date basis-2/4'>
									<label htmlFor='joiningDate' className='basis-2/4'>
										from :{" "}
									</label>
									<input
										type='date'
										onChange={(e) => setStarted(e.target.value)}
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
								<div className='leaving-date basis-2/4'>
									<label htmlFor='joiningDate' className='basis-2/4'>
										to :{" "}
									</label>
									<input
										type='date'
										onChange={(e) => setEnded(e.target.value)}
										className='h-12 bg-slate-200 p-4 rounded-md'
									/>
								</div>
							</div>
						</div>
						<div className='employment-type w-4/6 flex flex-row justify-center mt-8 mb-4'>
							<Button
								variant='contained'
								color='primary'
								onClick={addSkillInfo}
								sx={{ marginRight: "2rem" }}>
								Add
							</Button>
							<Button
								variant='contained'
								color='error'
								onClick={() => setOpenSkillModal(false)}>
								Close
							</Button>
						</div>
					</div>
				</Paper>
			</form>
		</div>
	);
};
