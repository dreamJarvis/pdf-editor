/** @format */

import "./App.css";
import { Header } from "./components/Header";
// import CreatePDF from "./components/createPDF/CreatePDF";
// import { ExtractingPDF } from "./components/updatePDF/ExtractingPDF";
// import { Html2Pdf } from "./components/createPDF/Html2Pdf";
// import { ModifyPDF } from "./components/updatePDF/ModifyPDF";
// import UploadPDF from "./components/UploadPDF";
import { ResumeBuilder } from "./pages/ResumeBuilder";

function App() {
	return (
		<div className='App'>
			<Header />
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
