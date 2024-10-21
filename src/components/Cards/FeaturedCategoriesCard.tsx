import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";

export function FeaturedCategoriesCard({category}: {category: string}) {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg">
            <div>
                <h1 className="text-2xl font-bold">{category.toUpperCase()}</h1>
            </div>
            <div>
                <p className="text-center text-gray-500">Explora nuestra selección
                    de {category.toLowerCase()}
                </p>
            </div>
            <div>
                <Button variant="ghost">Ver más <ChevronRight className="ml-2 h-4 w-4"/></Button>
            </div>
        </div>
    )
}