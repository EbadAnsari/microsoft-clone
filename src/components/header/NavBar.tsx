import { useState } from "react";
import FooterLinks from "../footer/FooterLinks";

export default function NavBar() {
	const [dropdown, setDropdown] = useState({
		state: "hidden",
		color: "transparent",
	});

	const [searchBar, setSearchBar] = useState("hidden");
	const [hamburger, setHamburger] = useState("");

	return (
		<nav id="nav-bar-top" className="z-50 bg-white">
			<div className="relative mx-auto flex h-16 justify-between px-5 lg:px-12 xl:shadow-none 2xl:w-[90rem]">
				{/* : All microsoft links (footer) */}
				<div
					id="footer-link"
					className={`footer absolute top-full z-50 ${dropdown.state} bg-gray`}
				>
					<FooterLinks />
				</div>

				{/* Navbar */}
				<div
					id="first"
					className={`first ${
						searchBar === "hidden" ? "flex" : "hidden"
					} items-center gap-x-2 sm:gap-x-4 lg:hidden`}
				>
					{/* : hamburger */}
					{/* : --------- */}
					{/* : --------- */}
					{/* : --------- */}
					<button
						id="hamburger"
						className={`${
							hamburger ? "cross" : ""
						} relative h-[28.5px] w-10 space-y-1 p-2 [&_.line]:h-[1.5px]`}
						onClick={() => {
							setHamburger(hamburger ? "" : "cross");
						}}
					>
						<div className="line w-5 rounded-xl bg-black"></div>
						<div className="line w-5 rounded-xl bg-black"></div>
						<div className="line w-5 rounded-xl bg-black"></div>
					</button>

					{/* : Search Button */}
					{/* : Search button will display only when it is below the "md" screen. */}
					<div
						className="search-button w-5 sm:w-6 lg:hidden"
						onClick={() => {
							setSearchBar("flex");
						}}
					>
						<img src="assets/icons/search.svg" />
					</div>
				</div>
				<div
					className={`second flex ${
						searchBar === "hidden" ? "" : "hidden"
					} items-center lg:order-1 lg:flex`}
					id="second"
				>
					<a
						className="microsoft-logo block w-24 sm:w-32"
						href="https://www.microsoft.com/en-in"
						target="_blank"
					>
						{/* : microsoft logo */}
						<img src="assets/microsoft.png" />
					</a>
				</div>

				{/* : Search Bar */}
				<div
					className={`search-bar order-2 ${searchBar} w-full items-center lg:order-2 lg:w-[calc(100%_-_12rem)]`}
				>
					<div className="z-10 flex h-fit w-full items-center">
						<div className="search-bar-input order-2 mx-2 flex w-full border border-blue-500 lg:order-1">
							<input
								type="text"
								className="search-bar-input-box order-2 h-full w-full px-2 py-2 text-sm lg:order-1 [&::placeholder]:text-slate-500"
								placeholder="Search in microsoft.com"
							/>
							{/* : Search Icon */}
							<img
								src="assets/icons/search.svg"
								className="order-1 block w-8 p-1.5 lg:order-2"
							/>
						</div>

						<button
							tabIndex={2}
							className="search-bar-cancel-button order-1 border border-black p-2 text-sm lg:order-2 lg:px-4 lg:py-2"
							onClick={() => {
								setSearchBar("hidden");
							}}
						>
							<span className="content hidden lg:block">
								Cancel
							</span>
							<span className="content lg:hidden">
								<img
									src="assets/icons/close.svg"
									className="w-5"
								/>
							</span>
						</button>
					</div>
				</div>

				<div
					className={`third ${
						searchBar === "hidden" ? "flex" : "hidden"
					} items-center gap-x-5 sm:gap-x-6 lg:order-2`}
					id="third"
				>
					<div
						onClick={() => {
							setDropdown(
								dropdown.state === "hidden"
									? { color: "gray", state: "" }
									: { color: "transparent", state: "hidden" }
							);
						}}
						className={`hidden h-full items-center bg-${dropdown.color} px-4 lg:flex`}
					>
						<div className="microsoft-services hidden gap-x-2 lg:block lg:text-[0.8rem]">
							<p>
								<span className="link-underline">
									All Microsoft
								</span>
								<span className="pl-1">&#x25BE;</span>
							</p>
						</div>
					</div>

					{/* : Search Button */}
					{/* : Search button will display only when it goes above the "md" screen. */}
					<div
						className={`search-button link-underline hidden items-center gap-x-2 lg:flex lg:text-[0.8rem]`}
						onClick={() => {
							setSearchBar("flex");
							setDropdown({
								color: "transparent",
								state: "hidden",
							});
						}}
					>
						<p>Search</p>
						<img src="assets/icons/search.svg" className="w-4" />
					</div>

					<div
						id="cart"
						className="link-underline w-5 items-center gap-x-2 sm:w-6 lg:flex lg:w-fit lg:text-[0.8rem]"
					>
						<p className="hidden lg:block">Cart</p>
						<img src="assets/icons/cart.svg" className="lg:w-4" />
					</div>
					<div id="account" className="w-8 sm:w-8 lg:w-6">
						<img src="assets/icons/account.svg" />
					</div>
				</div>
				<div
					id="nav-links"
					className={`absolute left-0 top-full z-50 w-full ${
						hamburger ? "" : "-translate-x-full"
					} border-solid border-blue-600 lg:left-[12.5rem] lg:top-1/2 lg:${
						searchBar === "hidden" ? "flex" : "hidden"
					} lg:w-fit lg:-translate-y-1/2 lg:translate-x-0 lg:space-x-4 [&>a.link-underline]:block [&>a.link-underline]:border-b lg:[&>a.link-underline]:border-b-0`}
				>
					<a className="link-underline text-md cursor-pointer bg-[#f2f2f2] py-4 pl-6 text-black lg:bg-transparent lg:p-0 lg:text-[0.8rem]">
						Microsoft 365
					</a>
					<a className="link-underline text-md cursor-pointer bg-[#f2f2f2] py-4 pl-6 text-black lg:bg-transparent lg:p-0 lg:text-[0.8rem]">
						Teams
					</a>
					<a className="link-underline text-md cursor-pointer bg-[#f2f2f2] py-4 pl-6 text-black lg:bg-transparent lg:p-0 lg:text-[0.8rem]">
						Windows
					</a>
					<a className="link-underline text-md cursor-pointer bg-[#f2f2f2] py-4 pl-6 text-black lg:bg-transparent lg:p-0 lg:text-[0.8rem]">
						Surface
					</a>
					<a
						href="xbox.html"
						className="link-underline text-md cursor-pointer bg-[#f2f2f2] py-4 pl-6 text-black lg:bg-transparent lg:p-0 lg:text-[0.8rem]"
					>
						Xbox
					</a>
					<a className="link-underline text-md cursor-pointer bg-[#f2f2f2] py-4 pl-6 text-black lg:bg-transparent lg:p-0 lg:text-[0.8rem]">
						Support
					</a>
				</div>
			</div>
		</nav>
	);
}
