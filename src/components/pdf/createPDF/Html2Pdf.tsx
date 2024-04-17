/** @format */

import React from "react";
import { Preview, print } from "react-html2pdf";

export const Html2Pdf = () => {
	return (
		<div>
			<Preview id={"jsx-template"}>
				<h1>Hello World !</h1>
				<h2>this is amazing</h2>
			</Preview>
			<button onClick={() => print("a", "jsx-template")}> print</button>
		</div>
	);
};
