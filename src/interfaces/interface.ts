export type ReactNode = React.ReactNode;

export interface BannerImageInterface {
	children: [title: ReactNode, description?: ReactNode];
	bannerImage: {
		lg: string;
		md?: string;
		sm?: string;
	};
	textAlign: "left" | "right";
	clickButton?: { buttonTitle: string; linkTo: string };
	linkButton?: { buttonTitle: string; linkTo: string };
	textColor?: string;
}

export interface ButtonInterface {
	to: string;
	link: boolean;
}

export interface ProductInterface {
	image: string;
	name: string;
	description: string;
	linkToProduct: string;
	linkText: string;
}

export interface BasicObject {
	[key: string]: string;
}

export interface CardNumberInterface extends BasicObject {
	first: string;
	second: string;
	third: string;
	fourth: string;
}
