'use client'

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function ProductCard({product}: ProductsResponse) {

    return (
        <>
            <Card className="flex flex-col">
                <CardHeader>
                    <div className="aspect-square relative overflow-hidden rounded-md">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-40 w-40"
                        />
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    <Button>Add to Cart</Button>
                </CardFooter>
            </Card>
        </>
    )
}