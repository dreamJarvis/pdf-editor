/** @format */
import {
	IAddressInfo,
	IContactNumberInfo,
	IContactSite,
	IEducationInfo,
	IEmploymentInfo,
	IPersonalInfo,
} from "./types";

export const tempEmploymentData: IEmploymentInfo = {
	id: new Date().getMilliseconds(),
	currentEmployer: true,
	employmenttype: "Full-time",
	totalExperience: "19",
	companyName: "velsera",
	jobTitle: "Associate software engineer",
	joiningDate: new Date(2022, 3, 9),
	leavingDate: new Date(2023, 9, 9),
	skills: [
		"React.Js",
		"Redux",
		"javascript",
		"Typescript",
		"HTML5/CSS3",
		"MaterialUI",
	],
	jobProfile:
		"* As one of the first engineers who got to work on the company's new product, I helped in designing and developing the base framework for the front end using React & Material UI. \n* Applied Redux for better state memory management and to reduce props drilling. \n* Applied Redux RTK for API cache for the project, to reduce the number of API calls and server costs.",
	noticePeriod: "2 months",
};

export const tempEmploymentData2: IEmploymentInfo = {
	id: new Date().getMilliseconds(),
	currentEmployer: true,
	employmenttype: "Full-time",
	totalExperience: "8",
	companyName: "GlobalLogic",
	jobTitle: "Associate software engineer",
	joiningDate: new Date(2021, 8, 5),
	leavingDate: new Date(2022, 3, 11),
	skills: [
		"Angular(10+)",
		"Javascript",
		"Typescript",
		"HTML5/CSS3",
		"MaterialUI",
	],
	jobProfile:
		"Received industrial training on java backend and microservices. - Learned Spring Boot as back-end technology.\nWorked with Spring Boot, Spring Security, Spring Data JPA, and Hibernate.\nUsed JUnit, and Mockito For Test Driven Development.\nWorked with Postman, Apache Tomcat, H2 Databases, Mockito, Eureka Server, and Hystrix\n  Worked as a Angular(10+) developer",
	noticePeriod: "2 months",
};

export const tempEducationData: IEducationInfo = {
	id: new Date().getMilliseconds(),
	education: "Graduation",
	university: "Chandigarh University",
	course: "Bachelors of engineering",
	specialization: "computer science and engineering",
	courseType: "full-time",
	startingYear: new Date(2017, 4, 10),
	graduationYear: new Date(2021, 4, 10),
	gradingSystem: "Scale 10 Grading System",
	marks: "7.1",
};

export const tempAddressData: IAddressInfo = {
	street: "Rz-4b/266, M Block, West Sagarpur, South-West-Delhi",
	city: "New Delhi",
	state: "Delhi",
	pincode: "110046",
};

export const tempContactData: IContactNumberInfo = {
	contactPhoneNumber: "+91 7042288204",
};

export const tempContactSites: IContactSite = {
	linkedIn: "https://www.linkedin.com/in/tarun-jha-60242b193/",
	portfolio: "https://dreamjarvis.github.io/portfolio-react/",
	github: "https://github.com/dreamJarvis",
};

export const tempPersoanlDetails: IPersonalInfo = {
	about:
		"I have 2.5+ years of experience as a front-end developer in creating and implementing many front-end/full-stack web applications.",
	firstName: "tarun",
	lastName: "jha",
	dob: new Date(1997, 10, 21),
	address: tempAddressData,
	contactNumbers: tempContactData,
	additionalInfo: tempContactSites,
};
