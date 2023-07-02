import { ProductInterface } from "@interfaces/interface";

export default function Products({
	name,
	image,
	description,
	linkToProduct,
	linkText,
}: ProductInterface) {
	return (
		<a href={linkToProduct} className="product">
			<img src={`/assets/product-images/${image}`} className="w-full" />
			<h2 className="mt-6 text-xl font-bold">{name}</h2>
			<p className="mt-5">{description}</p>
			<p className="mt-2">{linkText}</p>
		</a>
	);
}
