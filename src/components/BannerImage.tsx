import { PropsWithChildren } from "react";
import { BannerImageInterface, BasicObject } from "@interfaces/interface";
import Button from "@basic-components/Button";

export function Banner({
	bannerImage: [name, extension],
	children,
	textAlign,
	clickButton,
	linkButton,
}: BannerImageInterface & PropsWithChildren) {
	const [Title, Description] = children;

	return (
		<section className="mx-auto w-fit lg:relative xl:max-w-[calc(100vw_-_1px)]">
			<div className="flex justify-center">
				<img
					src={`/assets/sm-md-lg-images/${name}-lg.${extension}`}
					className="hidden lg:block"
				/>
				<img
					src={`/assets/sm-md-lg-images/${name}-md.${extension}`}
					className="hidden sm:block lg:hidden"
				/>
				<img
					src={`/assets/sm-md-lg-images/${name}-sm.${extension}`}
					className="block w-full sm:hidden"
				/>
			</div>
			<div
				className={`${
					textAlign === "right" ? "left-1/2" : "left-0"
				} top-1/2 flex -translate-y-1.5 justify-center bg-white shadow-md md:mx-3 md:-translate-y-10 lg:absolute lg:w-1/2 lg:-translate-y-1/2 lg:bg-transparent lg:shadow-none`}
			>
				<div className={`px-5 py-10 md:px-10 lg:px-16 xl:px-28`}>
					{/* <h3 className="mb-6 text-2xl font-semibold lg:text-[2.3rem]">
                        {bannerTitle}
                    </h3> */}
					{Title}
					{/* <p className="mb-6 text-lg lg:text-base">{bannerText}</p> */}
					{Description}

					<div className="flex flex-wrap items-center gap-4">
						{clickButton ? (
							<Button to={clickButton.linkTo} link={false}>
								{clickButton.buttonTitle}
							</Button>
						) : null}
						{linkButton ? (
							<Button to={linkButton.linkTo} link={true}>
								{linkButton.buttonTitle}
							</Button>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
}

export function BannerTitle({ children: title }: PropsWithChildren) {
	return (
		<h3 className={`mb-6 text-2xl font-semibold lg:text-[2.3rem]`}>
			{title}
		</h3>
	);
}

export function BannerDescription({
	children: description,
}: PropsWithChildren) {
	return <p className="mb-6 text-lg lg:text-base">{description}</p>;
}
