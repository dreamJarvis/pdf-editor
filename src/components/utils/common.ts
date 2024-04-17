/** @format */

import {
	IEducationInfo,
	IEmploymentInfo,
	IPersonalInfo,
} from "../../services/types";

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

export const getInitializedPersonalData = (
	personalInfo: IPersonalInfo
): IPersonalInfo => {
	return {
		about: personalInfo.about ?? "",
		firstName: personalInfo.firstName ?? "",
		lastName: personalInfo.lastName ?? "",
		image: "",
		dob: personalInfo.dob ?? new Date(),
		availableToJoin: personalInfo.availableToJoin ?? "",
		address: {
			street: personalInfo.address.street ?? "",
			city: personalInfo.address.city ?? "",
			state: personalInfo.address.state ?? "",
			pincode: personalInfo.address.pincode ?? "",
		},
		email: personalInfo.email ?? "",
		contactNumbers: {
			contactPhoneNumber: personalInfo.contactNumbers.contactPhoneNumber ?? "",
			workPhoneNumber: personalInfo.contactNumbers.workPhoneNumber ?? "",
			homeNumber: personalInfo.contactNumbers.homeNumber ?? "",
		},
		additionalInfo: {
			linkedIn: personalInfo.additionalInfo.linkedIn ?? "",
			portfolio: personalInfo.additionalInfo.portfolio ?? "",
			github: personalInfo.additionalInfo.github ?? "",
		},
	};
};

export const getInitializedEducationData = (
	educationInfo: IEducationInfo | null
): IEducationInfo => {
	return {
		id: educationInfo?.id ?? new Date().getMilliseconds(),
		education: educationInfo?.education ?? "",
		university: educationInfo?.university ?? "",
		course: educationInfo?.course ?? "",
		specialization: educationInfo?.specialization ?? "",
		courseType: educationInfo?.courseType ?? "",
		startingYear: educationInfo?.startingYear ?? new Date(),
		graduationYear: educationInfo?.graduationYear ?? new Date(),
		gradingSystem: educationInfo?.gradingSystem ?? "no",
		marks: educationInfo?.marks ?? "no",
		completed: educationInfo?.completed ?? "no",
	};
};

export const getInitializedEmploymentInfo = (
	employmentInfo: IEmploymentInfo | null
): IEmploymentInfo => {
	return {
		id: employmentInfo?.id ?? new Date().getMilliseconds(),
		currentEmployer: employmentInfo?.currentEmployer ?? false,
		employmenttype: employmentInfo?.employmenttype ?? "",
		totalExperience: employmentInfo?.totalExperience ?? 0,
		companyName: employmentInfo?.companyName ?? "",
		jobTitle: employmentInfo?.jobTitle ?? "",
		joiningDate: employmentInfo?.joiningDate ?? new Date(),
		leavingDate: employmentInfo?.leavingDate ?? new Date(),
		skills: employmentInfo?.skills ?? [],
		jobProfile: employmentInfo?.jobProfile ?? "",
		noticePeriod: employmentInfo?.noticePeriod ?? "",
	};
};
