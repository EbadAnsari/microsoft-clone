import { Banner, BannerDescription, BannerTitle } from "./BannerImage";
import Carousel from "@basic-components/Carousel";
import Products from "@basic-components/Products";

export default function MicrosoftHome() {
	return (
		<>
			<Carousel>
				<div className="mx-auto xl:max-w-[100rem]">
					<Banner
						bannerImage={{
							lg: "microsoft-app-lg.avif",
							md: "microsoft-app-md.avif",
							sm: "microsoft-app-sm.avif",
						}}
						// ["microsoft-app", "avif"]
						textAlign="left"
						clickButton={{
							buttonTitle: "For one person",
							linkTo: "#",
						}}
						linkButton={{
							buttonTitle: "For up to six people >",
							linkTo: "#",
						}}
					>
						<BannerTitle>Microsoft 365</BannerTitle>
						<BannerDescription>
							Turn your ideas into reality, stay safer online and
							off, and focus on what matters most with Microsoft
							365 apps.
						</BannerDescription>
					</Banner>
				</div>

				<div className="mx-auto xl:max-w-[100rem]">
					<Banner
						bannerImage={{
							lg: "banner-lg.avif",
							md: "banner-md.avif",
							sm: "banner-sm.avif",
						}}
						textAlign="right"
						clickButton={{ buttonTitle: "Learn more", linkTo: "#" }}
					>
						<BannerTitle>Surface Pro 9</BannerTitle>
						<BannerDescription>
							Tablet versatility and laptop power — all in one
							ultra-portable device.
						</BannerDescription>
					</Banner>
				</div>
			</Carousel>

			<div className="mx-auto mt-28 flex w-fit flex-wrap justify-center gap-8 lg:mt-32 [&>a]:underline">
				<a href="#" className="flex flex-col gap-y-3">
					<img
						src="/assets/icons/microsoft-black.webp"
						className="mx-auto"
					/>
					<span className="cursor-pointer">
						Choose your Microsoft 365
					</span>
				</a>
				<a href="#" className="flex flex-col gap-y-3">
					<img
						src="/assets/icons/surface-device.webp"
						className="mx-auto"
					/>
					<span className="cursor-pointer">
						Explore Surface devices
					</span>
				</a>
				<a href="#" className="flex flex-col gap-y-3">
					<img
						src="/assets/icons/xbox-image.webp"
						className="mx-auto"
					/>
					<span className="cursor-pointer">Buy Xbox games</span>
				</a>
				<a href="#" className="flex flex-col gap-y-3">
					<img
						src="/assets/icons/microsoft-black.webp"
						className="mx-auto"
					/>
					<span className="cursor-pointer">Get Windows 11</span>
				</a>
			</div>

			<section className="products mx-auto mt-20 grid w-fit grid-cols-1 justify-center gap-7 p-4 xl:container sm:grid-cols-2 sm:p-4 lg:grid-cols-4 2xl:w-[90rem]">
				<Products
					name="Surface Laptop 5"
					description="Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11."
					image="surface-laptop-5.webp"
					linkToProduct="#"
					linkText="Learn more >"
				/>
				<Products
					name="Shop Xbox Series S"
					description="Next-gen performance in the smallest Xbox ever."
					image="xbox-series-s.webp"
					linkToProduct="#"
					linkText="Shop Xbox Series S >"
				/>
				<Products
					name="Shop Xbox Series X"
					description="The fastest, most powerful Xbox ever."
					image="xbox-series-x.webp"
					linkToProduct="#"
					linkText="Shop Xbox Series X >"
				/>
				<Products
					name="Surface Laptop 5"
					description="The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We're also adding actions to help people complete tasks."
					image="bing.avif"
					linkToProduct="#"
					linkText="Learn more about it >"
				/>
			</section>
			<section
				id="xbox"
				className="xbox-game mx-2 mt-20 w-fit sm:mx-2 lg:relative 2xl:mx-auto 2xl:max-w-[90rem]"
			>
				<Banner
					bannerImage={{
						lg: "xbox-game-lg.avif",
						md: "xbox-game-md.avif",
						sm: "xbox-game-sm.avif",
					}}
					textAlign="left"
					clickButton={{ buttonTitle: "Join Now", linkTo: "#" }}
				>
					<BannerTitle>
						<div className="text-black lg:text-white">
							Xbox Game Pass Ultimate
						</div>
					</BannerTitle>
					<BannerDescription>
						<span className="text-black lg:text-white">
							Xbox Live Gold and hundreds of high-quality console
							and PC games. Play together with friends and
							discover your next favourite game.
						</span>
					</BannerDescription>
				</Banner>
			</section>

			<section className="mt-20">
				<h2 className="text-center text-4xl font-semibold">
					For business
				</h2>
				<section className="products mx-auto grid w-fit grid-cols-1 gap-7 p-4 xl:container sm:grid-cols-2 lg:grid-cols-4 2xl:w-[90rem]">
					<Products
						name="Surface for Business"
						description="Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11."
						image="surface-for-business.avif"
						linkToProduct="#"
						linkText="Learn more about it >"
					/>
					<Products
						name="Get Microsoft Teams for Free"
						description="Next-gen performance in the smallest Xbox ever."
						image="get-microsoft-teams-for-free.webp"
						linkToProduct="#"
						linkText="Learn more about it >"
					/>
					<Products
						name="Surface Laptop 5"
						description="The fastest, most powerful Xbox ever."
						image="windows-11-for-business.jfif"
						linkToProduct="#"
						linkText="Learn more about it >"
					/>
					<Products
						name="Try Microsoft365 for Free"
						description="The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We're also adding actions to help people complete tasks."
						image="try-microsoft365-for-free.webp"
						linkToProduct="#"
						linkText="Learn more about it >"
					/>
				</section>
			</section>
		</>
	);
}
