/** @format */

import React from "react";
import { IEducationInfo } from "../../../services/types";
import { EducationInfoView } from "./EducationInfoView";
import { EDIT_MODAL_ACTION_TYPE } from "../../utils/constants";

export const EducationInfoList = ({
	educationalInfoList,
}: {
	educationalInfoList: Array<IEducationInfo>;
}) => {
	return (
		<div className='flex flex-col items-center justify-center mt-4 p-2 mb-10'>
			<div className='w-5/6'>
				{educationalInfoList.length > 0 &&
					educationalInfoList.map((info, id) => (
						<EducationInfoView
							showEdit={EDIT_MODAL_ACTION_TYPE.visible}
							key={id} educationalInfo={info} />
					))}
			</div>
		</div>
	);
};
