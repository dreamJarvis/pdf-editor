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
	totalExperience?: String;
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
	dob: Date;
	address: IAddressInfo;
	contactNumbers: IContactNumberInfo;
	additionalInfo: IContactSite;
}

export interface IProjects {
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
