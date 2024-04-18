/** @format */

import {
	IEducationInfo,
	IEmploymentInfo,
	IPersonalInfo,
	IProjectInfo,
	ISkill,
} from "../../services/types";
import { store } from "../../store";

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
	personalInfo: IPersonalInfo | null
): IPersonalInfo => {
	return {
		about: personalInfo?.about ?? "",
		firstName: personalInfo?.firstName ?? "",
		lastName: personalInfo?.lastName ?? "",
		image: "",
		dob: personalInfo?.dob ?? getTodaysDateISOFormat(),
		availableToJoin: personalInfo?.availableToJoin ?? "",
		address: {
			street: personalInfo?.address.street ?? "",
			city: personalInfo?.address.city ?? "",
			state: personalInfo?.address.state ?? "",
			pincode: personalInfo?.address.pincode ?? "",
		},
		email: personalInfo?.email ?? "",
		contactNumbers: {
			contactPhoneNumber: personalInfo?.contactNumbers.contactPhoneNumber ?? "",
			workPhoneNumber: personalInfo?.contactNumbers.workPhoneNumber ?? "",
			homeNumber: personalInfo?.contactNumbers.homeNumber ?? "",
		},
		additionalInfo: {
			linkedIn: personalInfo?.additionalInfo.linkedIn ?? "",
			portfolio: personalInfo?.additionalInfo.portfolio ?? "",
			github: personalInfo?.additionalInfo.github ?? "",
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
		startingYear: educationInfo?.startingYear ?? getTodaysDateISOFormat(),
		graduationYear: educationInfo?.graduationYear ?? getTodaysDateISOFormat(),
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
		joiningDate: employmentInfo?.joiningDate ?? "",
		leavingDate: employmentInfo?.leavingDate ?? getTodaysDateISOFormat(),
		skills: employmentInfo?.skills ?? [],
		jobProfile: employmentInfo?.jobProfile ?? "",
		noticePeriod: employmentInfo?.noticePeriod ?? "",
	};
};

export const getInitializedProjectInfo = (
	projectInfo: IProjectInfo | null
): IProjectInfo => {
	return {
		id: projectInfo?.id ?? new Date().getMilliseconds().toString(),
		projectTitle: projectInfo?.projectTitle ?? "",
		projectAssociation: projectInfo?.projectAssociation ?? "",
		client: projectInfo?.client ?? "",
		projectStatus: projectInfo?.projectStatus ?? "",
		started: projectInfo?.started ?? getTodaysDateISOFormat(),
		completed: projectInfo?.completed ?? getTodaysDateISOFormat(),
		projectDetails: projectInfo?.projectDetails ?? "",
		skillsUsed: projectInfo?.skillsUsed ?? [],
		liveLink: projectInfo?.liveLink ?? "",
		repositoryLink: projectInfo?.repositoryLink ?? "",
	};
};

export const getInitializedSkillInfo = (skillInfo: ISkill | null): ISkill => {
	return {
		id: skillInfo?.id ?? new Date().getMilliseconds(),
		skill: skillInfo?.skill ?? "",
		softwareVersion: skillInfo?.softwareVersion ?? "",
		lastUsed: skillInfo?.lastUsed ?? getTodaysDateISOFormat(),
		usedFrom: skillInfo?.usedFrom ?? getTodaysDateISOFormat(),
		usedTill: skillInfo?.usedTill ?? getTodaysDateISOFormat(),
	};
};

export const tagEmploymentEducation = () => {
	const storeData = store.getState();
	const employmentList = storeData?.employmentInfo.map(
		(info: IEmploymentInfo) => {
			return {
				label: `${info.jobTitle} - ${info.companyName}`,
				value: `${info.jobTitle} - ${info.companyName}`,
			};
		}
	);
	const educationList = storeData?.education.map((info: IEducationInfo) => {
		return {
			label: `${info.course} - ${info.university}`,
			value: `${info.course} - ${info.university}`,
		};
	});
	const selfProject = {
		label: "self-project",
		value: "self-project",
	};

	return [...employmentList, ...educationList, selfProject];
};

export const totalWorkingExperience = () => {
	const storeData = store.getState();
	return storeData?.employmentInfo.reduce(
		(curr, info) => curr + Math.abs(info.totalExperience),
		0
	);
};

export const getTodaysDateISOFormat = (): string => {
	return new Date().toISOString().split("T")[0];
};
