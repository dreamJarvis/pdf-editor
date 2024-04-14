/** @format */

import React from "react";
import { IEducationInfo } from "../../../services/types";
import { EducationInfoView } from "./EducationInfoView";

export const EducationInfoList = ({
	educationalInfoList,
}: {
	educationalInfoList: Array<IEducationInfo>;
}) => {
	return (
		<div className='flex flex-col items-center justify-center mt-4 p-2 mb-10'>
			{educationalInfoList.length > 0 &&
				educationalInfoList.map((info) => (
					<EducationInfoView educationalInfo={info} />
				))}
		</div>
	);
};
