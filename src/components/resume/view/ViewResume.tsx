/** @format */

import { Box, Paper } from "@mui/material";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { EmploymentInfoView } from "../employment/EmploymentInfoView";
import { ProjectInfoView } from "../project/ProjectInfoView";
import { EducationInfoView } from "../education/EducationInfoView";
import { PersonalInfoView } from "../personal/PersonalInfoView";
import { SkillInfoView } from "../skills/SkillInfoView";
import { EDIT_MODAL_ACTION_TYPE } from "../../utils/constants";

export const ViewResume = ({ contentRef }: { contentRef: any }) => {
	const employmentInfo = useSelector(
		(state: RootState) => state.employmentInfo
	);

	const projectInfo = useSelector((state: RootState) => state.projects);
	const educationInfo = useSelector((state: RootState) => state.education);
	const personalInfo = useSelector((state: RootState) => state.personalDetails);
	const skillInfo = useSelector((state: RootState) => state.skills);

	return (
		<div ref={contentRef} className='bg-red-100'>
			<Paper className='mt-10'>
				<div className='p-4 mt-10 mb-4'>
					<header className='flex flex-col'>
						{
							<PersonalInfoView
								showEdit={EDIT_MODAL_ACTION_TYPE.hide}
								personalInfo={personalInfo}
							/>
						}
					</header>
					<Box className='flex flex-col text-center justify-center'>
						<div className='flex flex-col'>
							<div className='m-2 p-2 flex flex-col text-start'>
								<div
									className='text-xl text-slate-700 font-sans p-2'
									style={{
										borderBottom: "2px solid gray",
									}}>
									<h1>Work Experience</h1>
								</div>
								{employmentInfo.map((employmentInfo) => (
									<EmploymentInfoView
										showEdit={EDIT_MODAL_ACTION_TYPE.hide}
										employmentInfo={employmentInfo}
									/>
								))}
							</div>
							<div className='m-2 p-2 flex flex-col text-start'>
								<div
									className='text-xl text-slate-700 font-sans p-2'
									style={{
										borderBottom: "2px solid gray",
									}}>
									<h1>Projects</h1>
								</div>
								{projectInfo.map((info) => (
									<ProjectInfoView
										showEdit={EDIT_MODAL_ACTION_TYPE.hide}
										projectInfo={info}
									/>
								))}
							</div>
							<div className=' m-2 p-2 flex flex-col text-start'>
								<div
									className='text-xl text-slate-700 font-sans p-2'
									style={{
										borderBottom: "2px solid gray",
									}}>
									<h1>Education</h1>
								</div>
								{educationInfo.map((info) => (
									<EducationInfoView
										showEdit={EDIT_MODAL_ACTION_TYPE.hide}
										educationalInfo={info}
									/>
								))}
							</div>
							<div className='m-2 p-2 flex flex-col text-start'>
								<div
									className='text-xl text-slate-700 font-sans p-2'
									style={{
										borderBottom: "2px solid gray",
									}}>
									<h1>Skills</h1>
								</div>
								{skillInfo.map((info) => (
									<SkillInfoView
										showEdit={EDIT_MODAL_ACTION_TYPE.hide}
										skillInfo={info}
									/>
								))}
							</div>
						</div>
					</Box>
				</div>
			</Paper>
		</div>
	);
};
