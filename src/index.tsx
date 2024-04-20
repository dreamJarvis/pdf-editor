/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersonalInfo } from "./components/resume/personal/PersonalInfo";
import { EducationalInfo } from "./components/resume/education/EducationalInfo";
import { EmploymentInfo } from "./components/resume/employment/EmploymentInfo";
import { ViewResume } from "./components/resume/view/ViewResume";
import { PageNotFound } from "./Errors/PageNotFound";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";
import { ProjectInfo } from "./components/resume/project/ProjectInfo";
import { SkillInfo } from "./components/resume/skills/SkillInfo";
import { ConvertToPDF } from "./components/resume/view/ConvertToPDF";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <PageNotFound />,
		children: [
			{
				path: "resume-editor/",
				element: <PersonalInfo />,
			},
			{
				path: "resume-editor/educational",
				element: <EducationalInfo />,
			},
			{
				path: "resume-editor/employment",
				element: <EmploymentInfo />,
			},
			{
				path: "resume-editor/projects",
				element: <ProjectInfo />,
			},
			{
				path: "resume-editor/skills",
				element: <SkillInfo />,
			},
			{
				path: "resume-editor/convert_pdf",
				element: <ConvertToPDF />,
			},
		],
	},
]);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	</React.StrictMode>
);
