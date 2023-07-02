import { PropsWithChildren } from "react";
import { BannerImageInterface } from "@interfaces/interface";
import Button from "@basic-components/Button";

export function Banner({
	bannerImage,
	textAlign,
	children: [Title, Description],
	clickButton,
	linkButton,
}: BannerImageInterface) {
	return (
		<section className="mx-auto grid w-fit min-w-full grid-cols-12 xl:max-w-[calc(100%_-_1px)]">
			<div className="col-span-12 col-start-1 row-start-1 flex w-full justify-center">
				{!bannerImage.sm ? (
					<img src={`assets/${bannerImage.lg}`} className="w-full" />
				) : (
					<>
						<img
							src={`assets/sm-md-lg-images/${bannerImage.lg}`}
							className="hidden w-full lg:block"
						/>
						<img
							src={`assets/sm-md-lg-images/${bannerImage.md}`}
							className="hidden w-full sm:block lg:hidden"
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
					textAlign === "left" ? "lg:col-start-2" : "lg:col-start-8"
				} z-10 col-span-12 row-start-2 my-auto md:-translate-y-10 lg:col-span-4 lg:row-start-1 lg:translate-y-0`}
			>
				<div className="bg-white px-5 py-10 md:mx-4 md:px-10 md:shadow lg:m-0 lg:bg-transparent lg:p-0 lg:shadow-none xl:p-0">
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
