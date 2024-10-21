import {Button} from "@/components/ui/button";

export default function Welcome() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-40 xl:py-48 bg-black">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Bienvenido a Mi Tienda
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                            Descubre nuestras increíbles ofertas y productos de alta calidad.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button>Comprar ahora</Button>
                        <Button variant="outline">Saber más</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}