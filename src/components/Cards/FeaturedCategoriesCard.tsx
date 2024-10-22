import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function FeaturedCategoriesCard({ category }: { category: string }) {
    const router = useRouter();
    const categoryRoutes: Record<string, string> = {
        "cafe": "/shop",
        "artesania": "/shop",
    }

    const handleClick = () => {
        const route = categoryRoutes[category] || "/";
        router.push(route);
    }
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg">
            <div>
                <h1 className="text-2xl font-bold">{category.toUpperCase()}</h1>
            </div>
            <div>
                <p className="text-center text-gray-500">
                    Explora todos nuestros productos de la sección de {category.toLowerCase()}
                </p>
            </div>
            <div>
                <Button variant="ghost" onClick={handleClick}>Ver más <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </div>
        </div>
    );
}
