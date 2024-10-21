import ProductCard from "@/components/Cards/ProductCard";

export default async function ProductCardPanel() {

    const products: Products[] = await fetch('https://fakestoreapi.com/products').then(res => res.json())

    return (
        <>
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                />
            ))}
        </>
    )
}