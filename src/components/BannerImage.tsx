import { PropsWithChildren } from "react";
import { BannerImageInterface, ReactNode } from "@interfaces/interface";
import Button from "@basic-components/Button";

export function Banner({
	bannerImage,
	children,
	textAlign,
	clickButton,
	linkButton,
}: BannerImageInterface & PropsWithChildren) {
	let Title: ReactNode,
		Description: ReactNode = <></>;

	if (Array.isArray(children)) {
		Title = children;
	} else {
		Title = children[0];
		Description = children[1];
	}

	let fixedImage = true;
	if (bannerImage.sm) {
		fixedImage = false;
	}

	return (
		<section className="mx-auto w-fit lg:relative xl:max-w-[calc(100vw_-_1px)]">
			<div className="flex justify-center">
				{fixedImage ? (
					<img src={`assets/${bannerImage.lg}`} className="w-full" />
				) : (
					<>
						<img
							src={`assets/sm-md-lg-images/${bannerImage.lg}`}
							className="hidden lg:block"
						/>
						<img
							src={`assets/sm-md-lg-images/${bannerImage.md}`}
							className="hidden sm:block lg:hidden"
						/>
						<img
							src={`assets/sm-md-lg-images/${bannerImage.sm}`}
							className="block w-full sm:hidden"
						/>
					</>
				)}
			</div>

			<div
				className={`${
					textAlign === "right" ? "left-1/2" : "left-0"
				} top-1/2 flex -translate-y-1.5 justify-center bg-white shadow-md md:mx-3 md:-translate-y-10 lg:absolute lg:w-1/2 lg:-translate-y-1/2 lg:bg-transparent lg:shadow-none`}
			>
				<div className={`px-5 py-10 md:px-10 lg:px-16 xl:px-28`}>
					{Title}
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
