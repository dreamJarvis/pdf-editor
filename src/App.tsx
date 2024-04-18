/** @format */

import "./App.css";
// import CreatePDF from "./components/createPDF/CreatePDF";
// import { ExtractingPDF } from "./components/updatePDF/ExtractingPDF";
// import { Html2Pdf } from "./components/createPDF/Html2Pdf";
// import { ModifyPDF } from "./components/updatePDF/ModifyPDF";
// import UploadPDF from "./components/UploadPDF";
import { ResumeBuilder } from "./pages/ResumeBuilder";

function App() {
	return (
		<div className='App'>
			<ResumeBuilder />
		</div>
	);
}

export default App;
/* 
<UploadPDF />
<CreatePDF />
<Html2Pdf />
<ModifyPDF />
<ExtractingPDF />
*/
