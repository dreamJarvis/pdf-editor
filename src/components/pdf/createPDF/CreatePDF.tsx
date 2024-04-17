/** @format */

import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2pdf from "html2pdf.js";

const options = {
	filename: "my-document.pdf",
	margin: 1,
	image: { type: "jpeg", quality: 0.98 },
	html2canvas: { scale: 2 },
	jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
};

const CreatePDF = () => {
	// const doc = new jsPDF();
	// doc.text("Hello world!", 10, 10);
	// doc.save("a4.pdf");

	const contentRef = useRef(null);

	const convertToPdf = () => {
		const content = contentRef.current;
		html2pdf().set(options).from(content).save();
	};

	return (
		<div>
			<div ref={contentRef}>
				{/* Your HTML content that you want to convert to PDF */}
				<h1>Hello, PDF!</h1>
				<p>
					This is a simple example of HTML-to-PDF conversion using React and
					html2pdf.
				</p>
				<br />
				{/* <p style={{ marginTop: "20px" }}></p> */}
				<p></p>
			</div>
			<button onClick={convertToPdf}>Convert to PDF</button>
		</div>
	);
};

export default CreatePDF;
