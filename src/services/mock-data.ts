/** @format */
import { IPersonalInfo } from "./types";

export const tempPersoanlDetails2: IPersonalInfo = {
	about: "",
	firstName: "",
	lastName: "",
	dob: new Date().toISOString().split("T")[0],
	email: "",
	availableToJoin: "",
	address: {
		street: "",
		city: "",
		state: "",
		pincode: "",
	},
	contactNumbers: {
		contactPhoneNumber: "",
	},
	additionalInfo: {
		linkedIn: "",
		portfolio: "",
		github: "",
	},
	image: "",
};
