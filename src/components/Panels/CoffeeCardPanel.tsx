import CoffeeCard from "@/components/Cards/CoffeeCard";
import { useEffect, useState } from "react";

interface CoffeeCardPanelProps {
    onAddToCart: (product: Coffee) => void;
    selectedCategory: string | null;
}

export default function CoffeeCardPanel({ onAddToCart, selectedCategory }: CoffeeCardPanelProps) {
    const [coffees, setCoffees] = useState<Coffee[]>([]);

    useEffect(() => {
        const fetchCoffees = async () => {
            const response = await fetch('/coffees.json'); // Ruta al archivo JSON
            const data: Coffee[] = await response.json();
            setCoffees(data);
        };

        fetchCoffees();
    }, []);

    const filteredCoffees = selectedCategory === "All Categories" || !selectedCategory
        ? coffees
        : coffees.filter(coffee => coffee.category === selectedCategory);

    return (
        <>
            {filteredCoffees.map(coffee => (
                <CoffeeCard
                    key={coffee.id}
                    coffee={coffee}
                    onAddToCart={onAddToCart}
                />
            ))}
        </>
    );
}
