import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

import MicrosoftHome from "@components/MicrosoftHome";
import Microsoft365 from "@components/Microsoft365";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				// path: "/",
				element: <MicrosoftHome />,
			},
			{
				path: "microsoft-365",
				element: <Microsoft365 />,
			},
		],
	},
]);

export default function App() {
	return (
		<>
			<RouterProvider {...{ router }} />
		</>
	);
}
