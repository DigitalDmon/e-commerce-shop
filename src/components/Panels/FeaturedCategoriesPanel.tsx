'use client'

import { FeaturedCategoriesCard } from "@/components/Cards/FeaturedCategoriesCard";
import { useEffect, useState } from "react";

export default function FeaturedCategoriesPanel() {
    const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);

    useEffect(() => {
        const fetchCoffees = async () => {
            const response = await fetch('/coffees.json');
            const coffeeGrain: Coffee[] = await response.json();

            const categorySet = new Set<string>();
            coffeeGrain.forEach(coffee => {
                if (coffee.category) {
                    categorySet.add(coffee.category);
                }
            });

            setUniqueCategories(Array.from(categorySet));
        };

        fetchCoffees();
    }, []);

    return (
        <>
            {uniqueCategories.map((category, index) => (
                <FeaturedCategoriesCard
                    key={index}
                    category={category}  // Enviar cada opción de molienda como una categoría individual
                />
            ))}
        </>
    );
}
