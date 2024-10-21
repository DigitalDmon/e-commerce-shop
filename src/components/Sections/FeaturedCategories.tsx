import FeaturedCategoriesPanel from "@/components/Panels/FeaturedCategoriesPanel";

export default function FeaturedCategories() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                    Categorías Destacadas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeaturedCategoriesPanel />
                </div>
            </div>
        </section>
    )
}