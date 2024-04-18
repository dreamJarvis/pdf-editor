/** @format */

import React from "react";
import { Outlet } from "react-router-dom";

export const ResumeInfo = () => {
	return (
		<div className='bg-pink-100 basis-5/6 h-full overflow-x-auto'>
			<Outlet />
		</div>
	);
};
