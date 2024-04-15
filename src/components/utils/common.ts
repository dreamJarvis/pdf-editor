/** @format */

export const getTotalExperienceInMonths = (
	leavingDate: Date,
	joiningDate: Date
) => {
	const totalDurationOfMonths =
		(leavingDate ? leavingDate.getMonth() : 0) + (12 - joiningDate?.getMonth());
	const totalDurationYears = Math.floor(totalDurationOfMonths / 12);

	let totalEmploymentDurationMonths = Math.floor(totalDurationOfMonths % 12);
	const totalEmploymentDurationYears =
		(leavingDate ? leavingDate.getFullYear() : 0) -
		joiningDate?.getFullYear() -
		1 +
		totalDurationYears;

	totalEmploymentDurationMonths += 12 * totalEmploymentDurationYears;

	return totalEmploymentDurationMonths;
};
