/** @format */

import { Link } from "react-router-dom";

export const ResumeInfoNav = () => {
	return (
		<div className=' bg-slate-500 basis-1/6 h-[100%]'>
			<nav>
				<ul className='mt-10 py-2'>
					<li
						className='personal-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='personal'>
						<Link to='resume-editor/'>Personal</Link>
					</li>
					<li
						className='education-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='education'>
						<Link to='resume-editor/educational'>Education</Link>
					</li>
					<li
						className='employment-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='employment'>
						<Link to='resume-editor/employment'>Employment</Link>
					</li>
					<li
						className='project-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='project'>
						<Link to='resume-editor/projects'>Projects</Link>
					</li>
					<li
						className='skill-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='skill'>
						<Link to='resume-editor/skills'>Skills</Link>
					</li>
					<li
						className='view-resume-pdf m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='view-pdf'>
						<Link to='resume-editor/convert_pdf'>PDF</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
