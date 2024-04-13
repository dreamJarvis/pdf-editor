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
	education: string;
	university: string;
	course: string;
	specialization: string;
	courseType: string;
	startingYear: Date;
	graduationYear: Date;
	cgpa: string;
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
