/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersonalInfo } from "./components/resumeInfo/personal/PersonalInfo";
import { EducationalInfo } from "./components/resumeInfo/education/EducationalInfo";
import { EmploymentInfo } from "./components/resumeInfo/employment/EmploymentInfo";
import { ViewResume } from "./components/resumeInfo/ViewResume";
import { PageNotFound } from "./Errors/PageNotFound";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";
import { ProjectInfo } from "./components/resumeInfo/project/ProjectInfo";
import { SkillInfo } from "./components/resumeInfo/skills/SkillInfo";

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
				path: "/personal",
				element: <PersonalInfo />,
			},
			{
				path: "/educational",
				element: <EducationalInfo />,
			},
			{
				path: "/employment",
				element: <EmploymentInfo />,
			},
			{
				path: "/projects",
				element: <ProjectInfo />,
			},
			{
				path: "/skills",
				element: <SkillInfo />,
			},
			{
				path: "/view_resume",
				element: <ViewResume />,
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
