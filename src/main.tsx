import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Banner, BannerDescription, BannerTitle } from "./Test";
import MediaQuery from "@components/MediaQuery";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
		{/* <div className="mx-auto xl:max-w-[90rem]">
			<Banner
				bannerImage={{
					lg: "microsoft-app-lg.avif",
					md: "microsoft-app-md.avif",
					sm: "microsoft-app-sm.avif",
				}}
				// ["microsoft-app", "avif"]
				textAlign="left"
				clickButton={{ buttonTitle: "For one person", linkTo: "#" }}
				linkButton={{
					buttonTitle: "For up to six people >",
					linkTo: "#",
				}}
			>
				<BannerTitle>Lorem ipsum dolor sit amet.</BannerTitle>
				<BannerTitle>Lorem ipsum dolor sit amet.</BannerTitle>
			</Banner>
		</div> */}
		<MediaQuery />
	</React.StrictMode>
);
