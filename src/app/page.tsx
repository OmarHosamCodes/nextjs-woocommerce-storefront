import CategorySlider from "@/components/home/CategorySlider";
import Hero from "@/components/home/Hero";
import ProductsGallery from "@/components/home/ProductsGallery";
import { getCategories, getNewArrivals, getTopSellings } from "@/lib/function";

import type { WooProduct, WooProductCategory } from "@/types/woo";
export const revalidate = 60;

export default async function Home() {
	const newArrivalsFetch: WooProduct[] = await getNewArrivals(4);

	const bestSellings: WooProduct[] = await getTopSellings(4);

	const categories: WooProductCategory[] = await getCategories();

	return (
		<>
			<Hero />
			<CategorySlider categories={categories} />
			<ProductsGallery products={newArrivalsFetch} name={"New Arrivals"} />
			<ProductsGallery products={bestSellings} name={"Best Sellings"} />
		</>
	);
}
