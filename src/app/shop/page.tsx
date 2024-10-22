"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import CoffeeCardPanel from "@/components/Panels/CoffeeCardPanel";

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>("All Categories")
    const [cartItems, setCartItems] = useState<Coffee[]>([]);
    const addToCart = (product: Coffee) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            {/* Horizontal Filter Bar */}
            <div className="mb-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            {selectedCategory || "All Categories"}
                            <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => setSelectedCategory("All Categories")}>
                            All Categories
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setSelectedCategory("cafe")}>
                            cafe
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => setSelectedCategory("artesania")}>
                            artesania
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <CoffeeCardPanel selectedCategory={selectedCategory} onAddToCart={addToCart} />
            </div>
        </div>
    )
}