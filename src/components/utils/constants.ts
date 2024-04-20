/** @format */

export const EDUCATION_LEVEL = [
	{
		value: "Doctorate/PhD",
		label: "Doctorate/PhD",
	},
	{
		value: "Masters/Post-Graduation",
		label: "Masters/Post-Graduation",
	},
	{
		value: "Graduation",
		label: "Graduation",
	},
];

export const GRADING_SYSTEM = [
	{
		value: "Scale 10 Grading System",
		label: "Scale 10 Grading System",
	},
	{
		value: "Scale 4 Grading System",
		label: "Scale 4 Grading System",
	},
	{
		value: "% Marks of 100 Maximum",
		label: "% Marks of 100 Maximum",
	},
];

export const NOTICE_PERIOD = [
	{
		value: "Immediate",
		label: "15 days or less",
	},
	{
		value: "1month",
		label: "1 month",
	},
	{
		value: "2month",
		label: "2 month",
	},
	{
		value: "3month",
		label: "3 months",
	},
	{
		value: "morethan3month",
		label: "more than 3 months",
	},
	{
		value: "serving",
		label: "serving notice period",
	},
];

export const ACTION_TYPE = { add: "ADD", edit: "EDIT", delete: "DELETE" };

export const EDIT_MODAL_ACTION_TYPE = { visible: "VISIBLE", hide: "HIDE" };

export const html2pdfOptions = {
	filename: "resume.pdf",
	margin: 1,
	image: { type: "jpeg", quality: 0.98 },
	html2canvas: { scale: 2 },
	jsPDF: { unit: "in", format: "a1", orientation: "p" },
};
