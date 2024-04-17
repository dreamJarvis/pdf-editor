/** @format */
import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export const ExtractingPDF = () => {
	const [pdfFileData, setPdfFileData] = useState("");

	function readFileAsync(file: Blob) {
		return new Promise((resolve, reject) => {
			let reader = new FileReader();
			reader.onload = () => {
				resolve(reader.result);
			};
			reader.onerror = reject;
			reader.readAsArrayBuffer(file);
		});
	}

	function renderPdf(uint8array: BlobPart) {
		const tempblob = new Blob([uint8array], {
			type: "application/pdf",
		});
		const docUrl = URL.createObjectURL(tempblob);
		setPdfFileData(docUrl);
	}

	function range(start: number, end: number) {
		let length = end - start + 1;
		return Array.from({ length }, (_, i) => start + i - 1);
	}

	async function extractPdfPage(arrayBuff: any) {
		const pdfSrcDoc = await PDFDocument.load(arrayBuff);
		const pdfNewDoc = await PDFDocument.create();
		const pages = await pdfNewDoc.copyPages(pdfSrcDoc, range(2, 3));
		pages.forEach((page) => pdfNewDoc.addPage(page));
		const newpdf = await pdfNewDoc.save();
		return newpdf;
	}

	// Execute when user select a file
	const onFileSelected = async (e: any) => {
		const fileList = e.target.files;
		if (fileList?.length > 0) {
			const pdfArrayBuffer = await readFileAsync(fileList[0]);
			const newPdfDoc = await extractPdfPage(pdfArrayBuffer);
			renderPdf(newPdfDoc);
		}
	};

	return (
		<>
			<h1>Hello world</h1>
			<input
				type='file'
				id='file-selector'
				accept='.pdf'
				onChange={onFileSelected}
			/>
			<iframe
				style={{ display: "block", width: "100vw", height: "90vh" }}
				title='PdfFrame'
				src={pdfFileData}
				typeof='application/pdf'
			/>
		</>
	);
};

/* 
	tutorial link: https://www.freecodecamp.org/news/extract-pdf-pages-render-with-javascript/
*/
