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
import ProductCardPanel from "@/components/Panels/ProductCardPanel";

export default function Shop() {

    /*const [products, setProducts] = useState<Products[]>([])
    const [categories, setCategories] = useState<string[]>([])*/
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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
                        <DropdownMenuItem onSelect={() => setSelectedCategory(null)}>
                            All Categories
                        </DropdownMenuItem>
                        {/*{categories.map((category) => (
                            <DropdownMenuItem key={category} onSelect={() => setSelectedCategory(category)}>
                                {category}
                            </DropdownMenuItem>
                        ))}*/}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <ProductCardPanel />
            </div>
        </div>
    )
}