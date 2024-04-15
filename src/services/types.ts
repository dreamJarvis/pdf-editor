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
	joiningDate: Date;
	leavingDate?: Date;
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
	startingYear: Date;
	graduationYear: Date;
	gradingSystem: string;
	marks: string;
}

export interface IPersonalInfo {
	about: string;
	firstName: string;
	lastName: string;
	image: string;
	dob: Date;
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
	started: Date;
	completed: Date;
	projectDetails: string;
	skillsUsed: Array<string>;
	liveLink?: string;
	repositoryLink: string;
}

export interface ISkill {
	id: string;
	skill: string;
	softwareVersion: string;
	lastUsed: Date;
	usedFrom: Date;
	usedTill: Date;
}
