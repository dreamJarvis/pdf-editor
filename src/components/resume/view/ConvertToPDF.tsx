/** @format */

import { Button, Container } from "@mui/material";
import html2pdf from "html2pdf.js";
import { useRef } from "react";
import { ViewResume } from "./ViewResume";
import { html2pdfOptions } from '../../utils/constants';

export const ConvertToPDF = () => {
   const contentRef = useRef(null);
   const convertToPdf = () => {
      const content = contentRef.current;
      html2pdf().set(html2pdfOptions).from(content).save();
   };

   return (
      <Container className='bg-red-100'>
         <ViewResume contentRef={contentRef} />
         <div className='mb-10 bg-red-100'>
            <Button variant="contained" color="success" size="large" onClick={convertToPdf}>Convert to PDF</Button>
         </div>
      </Container>
   );
};