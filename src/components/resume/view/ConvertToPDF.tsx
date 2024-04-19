/** @format */

import { Button, Container } from "@mui/material";
import html2pdf from "html2pdf.js";
import { useRef } from "react";
import { ViewResume } from "./ViewResume";

const options = {
   filename: "resume.pdf",
   margin: 1,
   image: { type: "jpeg", quality: 0.98 },
   html2canvas: { scale: 2 },
   jsPDF: { unit: "in", format: "a2", orientation: "p" },
};

export const ConvertToPDF = () => {
   const contentRef = useRef(null);
   const convertToPdf = () => {
      const content = contentRef.current;
      html2pdf().set(options).from(content).save();
   };

   return (
      <Container className=' bg-red-100'>
         <ViewResume contentRef={contentRef} />
         <div className='mb-10'>
            <Button variant="contained" color="success" size="large" onClick={convertToPdf}>Convert to PDF</Button>
         </div>
      </Container>
   );
};