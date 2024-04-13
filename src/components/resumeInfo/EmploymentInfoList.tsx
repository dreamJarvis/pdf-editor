/** @format */

import { IEmploymentInfo } from "../../services/types";

export const EmploymentInfoList = ({
	employmentInfoList,
}: {
	employmentInfoList: Array<IEmploymentInfo>;
}) => {
	console.log("employmentInfoList : ", employmentInfoList);
	return <div>EmploymentInfoList</div>;
};
