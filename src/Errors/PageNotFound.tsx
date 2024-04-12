/** @format */

import { useRouteError } from "react-router-dom";

export const PageNotFound = () => {
	const err: any = useRouteError();
	return (
		<div data-test-id='error-msg'>
			<div>
				<h1>
					{err?.status} : {err?.statusText}
				</h1>
				<h2>{err?.error?.message}</h2>
			</div>
		</div>
	);
};
