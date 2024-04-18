/** @format */

import { Box, Container, Paper } from "@mui/material";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { EmploymentInfoView } from "../employment/EmploymentInfoView";
import { ProjectInfoView } from "../project/ProjectInfoView";
import { EducationInfoView } from "../education/EducationInfoView";
import { PersonalInfoView } from "../personal/PersonalInfoView";
import { SkillInfoView } from "../skills/SkillInfoView";

export const ViewResume = () => {
	const employmentInfo = useSelector(
		(state: RootState) => state.employmentInfo
	);

	const projectInfo = useSelector((state: RootState) => state.projects);
	const educationInfo = useSelector((state: RootState) => state.education);
	const personalInfo = useSelector((state: RootState) => state.personalDetails);
	const skillInfo = useSelector((state: RootState) => state.skills);

	return (
		<Container className=' bg-red-100'>
			<Paper className='m-10'>
				<div className='p-4 mt-14 mb-14'>
					<header className='flex flex-col'>
						{<PersonalInfoView personalInfo={personalInfo} />}
					</header>
					<body className='flex flex-row'>
						<Box className='flex flex-row text-center justify-center'>
							<div className='flex flex-col'>
								<div className=' m-2 p-2 flex flex-col text-start'>
									<div
										className='text-xl text-slate-700 font-sans'
										style={{
											borderBottom: "2px solid gray",
										}}>
										<h1>Work Experience</h1>
									</div>
									{employmentInfo.map((employmentInfo) => (
										<EmploymentInfoView employmentInfo={employmentInfo} />
									))}
								</div>
								<div className='m-2 p-2 flex flex-col text-start'>
									<div
										className='text-xl text-slate-700 font-sans'
										style={{
											borderBottom: "2px solid gray",
										}}>
										<h1>Projects</h1>
									</div>
									{projectInfo.map((info) => (
										<ProjectInfoView projectInfo={info} />
									))}
								</div>
								<div className=' m-2 p-2 flex flex-col text-start'>
									<div
										className='text-xl text-slate-700 font-sans'
										style={{
											borderBottom: "2px solid gray",
										}}>
										<h1>Education</h1>
									</div>
									{educationInfo.map((info) => (
										<EducationInfoView educationalInfo={info} />
									))}
								</div>
								<div className='m-2 p-2 flex flex-col text-start'>
									<div
										className='text-xl text-slate-700 font-sans'
										style={{
											borderBottom: "2px solid gray",
										}}>
										<h1>Skills</h1>
									</div>
									{skillInfo.map((info) => (
										<SkillInfoView skillInfo={info} />
									))}
								</div>
							</div>
						</Box>
					</body>
				</div>
			</Paper>
		</Container>
	);
};
/* 
linkedin -> https://www.linkedin.com/in/tarun-jha-60242b193/
portfolio -> https://dreamjarvis.github.io/portfolio-react/
leetocode -> https://leetcode.com/theTrojanHorse/
*/
