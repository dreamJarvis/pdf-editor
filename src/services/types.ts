/** @format */

export interface IAddressInfo {
	street: string;
	city: string;
	state: string;
	pincode: string;
}

export interface IContactNumberInfo {
	contactPhoneNumber: string;
	workPhoneNumber?: string;
	homeNumber?: string;
}

export interface IContactSite {
	linkedIn?: string;
	portfolio?: string;
	github?: string;
}

export interface IEmploymentInfo {
	id: number;
	currentEmployer: Boolean;
	employmenttype: String;
	totalExperience: number;
	companyName: String;
	jobTitle: String;
	joiningDate: string;
	leavingDate?: string;
	skills: string[];
	jobProfile: string;
	noticePeriod: string;
}

export interface IEducationInfo {
	id: number;
	education: string;
	university: string;
	course: string;
	specialization: string;
	courseType: string;
	startingYear: string;
	graduationYear: string;
	gradingSystem: string;
	marks: string;
	completed: string;
}

export interface IPersonalInfo {
	about: string;
	firstName: string;
	lastName: string;
	image: string;
	dob: string;
	availableToJoin: string;
	address: IAddressInfo;
	email: string;
	contactNumbers: IContactNumberInfo;
	additionalInfo: IContactSite;
}

export interface IProjectInfo {
	id: string;
	projectTitle: string;
	projectAssociation: string;
	client: string;
	projectStatus: string;
	started: string;
	completed: string;
	projectDetails: string;
	skillsUsed: Array<string>;
	liveLink?: string;
	repositoryLink: string;
}

export interface ISkill {
	id: number;
	skill: string;
	softwareVersion: string;
	lastUsed: string;
	usedFrom: string;
	usedTill: string;
}
