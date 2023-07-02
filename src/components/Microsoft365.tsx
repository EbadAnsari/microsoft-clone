import { Banner, BannerDescription, BannerTitle } from "./BannerImage";

export default function Microsoft365() {
	return (
		<Banner
			bannerImage={{
				lg: "microsoft-365.avif",
			}}
			// ["microsoft-app", "avif"]
			textAlign="right"
			clickButton={{ buttonTitle: "For one person", linkTo: "#" }}
			linkButton={{
				buttonTitle: "For up to six people >",
				linkTo: "#",
			}}
		>
			<BannerTitle>Office is now Microsoft 365</BannerTitle>
			<BannerDescription>
				Boost productivity with Microsoft Word, Excel, PowerPoint,
				Microsoft Teams, and more—all in one place.
			</BannerDescription>
		</Banner>
	);
}
