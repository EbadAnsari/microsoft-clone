import FooterLinks from "./FooterLinks";

export default function Footer() {
	return (
		<>
			<div className="footer mx-auto mt-10 w-full bg-[#f2f2f2] [&>.footer-links]:mx-auto">
				<FooterLinks />
			</div>
		</>
	);
}
