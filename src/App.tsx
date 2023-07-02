import NavBar from "@header/NavBar";
import MediaQuery from "@components/MediaQuery";
import BackToTop from "@components/BackToTop";
import MicrosoftHome from "@components/MicrosoftHome";
import Footer from "@footer/Footer";
import SocialMediaLinks from "@basic-components/SocialMediaLikns";

export default function App() {
	return (
		<>
			<NavBar />
			<MicrosoftHome />

			<div className="mx-auto mt-24 w-[calc(100vw_-_2rem)] xl:max-w-[90rem]">
				<SocialMediaLinks />
			</div>

			<section className="footer mt-10 bg-[#f2f2f2]">
				<Footer />
			</section>
			<MediaQuery />
			<BackToTop />
		</>
	);
}
