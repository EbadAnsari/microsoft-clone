import NavBar from "@header/NavBar";
import MediaQuery from "@components/MediaQuery";
import BackToTop from "@components/BackToTop";
import Footer from "@footer/Footer";
import SocialMediaLinks from "@basic-components/SocialMediaLikns";

import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

export default function RootLayout() {
	return (
		<>
			<NavBar />
			<Outlet />
			<div className="mx-auto mt-24 w-[calc(100vw_-_2rem)] xl:max-w-[90rem]">
				<SocialMediaLinks />
			</div>
			<Footer />
			<BackToTop />
		</>
	);
}
