/** @format */

import { ResumeInfoNav } from "../components/ResumeInfoNav";
import { ResumeInfo } from "./ResumeInfo";

export const ResumeBuilder = () => {
	return (
		<div className='flex flex-row h-screen'>
			<ResumeInfoNav />
			<ResumeInfo />
		</div>
	);
};
