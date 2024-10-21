import {FeaturedCategoriesCard} from "@/components/Cards/FeaturedCategoriesCard";

export default async function FeaturedCategoriesPanel() {

    const categories: [] = await fetch("https://fakestoreapi.com/products/categories").then(res => res.json())

    return (
        <>
            {categories.map((category, index) => (
                <FeaturedCategoriesCard
                    key={index} 
                    category={category}
                />
            ))}
        </>
    )
}