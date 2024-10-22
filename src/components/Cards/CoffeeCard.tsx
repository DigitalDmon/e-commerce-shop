"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CoffeeCardProps {
    coffee: Coffee;
    onAddToCart: (product: Coffee) => void;
    onRemove?: (productId: number) => void;
}

export default function CoffeeCard({ coffee, onAddToCart, onRemove }: CoffeeCardProps) {
    return (
        <Card key={coffee.id} className="flex flex-col">
            <CardHeader>
                <div className="aspect-square relative overflow-hidden rounded-md">
                    <Image
                        src={coffee.image_url}
                        width={300}
                        height={190}
                        alt={coffee.name}
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardTitle className="line-clamp-1">{coffee.name}</CardTitle>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{coffee.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">${coffee.price.toFixed(2)}</span>
                <Button onClick={() => onAddToCart(coffee)}>
                    Añadir al carrito
                </Button>
                {onRemove && (
                    <Button variant="destructive" onClick={() => onRemove(coffee.id)}>
                        Remover
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}