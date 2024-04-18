/** @format */

import React from "react";
import { Link } from "react-router-dom";

export const ResumeInfoNav = () => {
	return (
		<div className=' bg-slate-500 basis-1/6 h-[100%]'>
			<nav>
				<ul className='mt-10 py-2'>
					<li
						className='personal-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='personal'>
						<Link to='pdf-editor/'>Personal</Link>
					</li>
					<li
						className='education-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='education'>
						<Link to='pdf-editor/educational'>Education</Link>
					</li>
					<li
						className='employment-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='employment'>
						<Link to='pdf-editor/employment'>Employment</Link>
					</li>
					<li
						className='project-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='project'>
						<Link to='pdf-editor/projects'>Projects</Link>
					</li>
					<li
						className='skill-info m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='skill'>
						<Link to='pdf-editor/skills'>Skills</Link>
					</li>
					<li
						className='view-resume m-10 p-4 bg-slate-300 drop-shadow-lg rounded-md'
						data-info-type='view-resume'>
						<Link to='pdf-editor/view_resume'>View</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
