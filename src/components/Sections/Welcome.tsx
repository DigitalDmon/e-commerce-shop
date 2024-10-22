import { Button } from "@/components/ui/button";

export default function Welcome() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-40 xl:py-48 bg-black">
            <div className="absolute inset-0 bg-[url('https://www.semana.com/resizer/v2/GTOUFRTH3ZBSRA5GES5WSTOKD4.jpg?auth=090a2a754098a06304c25fe5008060316ba45a6ec828cdfe7b631e5e302e1e38&smart=true&quality=75&width=1920&height=1080')] bg-cover opacity-50"></div>
            <div className="relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            Penguin Command
                        </h1>
                        <br />
                        <h3 className="text-3xl font-bold tracking-tighter text-white sm:text-2xl md:text-3xl lg:text-4xl">PanaCultura</h3>
                        <p className="mx-auto max-w-[700px] font-bold text-white md:text-xl text-justify">
                            PanaCultura es tu destino ideal para descubrir y adquirir artesanías auténticas de Panamá.
                            Ofrecemos una amplia gama de productos elaborados por talentosos artesanos locales a precios competitivos.
                            Nuestro compromiso es promover la cultura panameña apoyando a las pequeñas empresas y artesanos locales,
                            brindándote una parte de nuestra cultura.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <a href="/shop"><Button variant="navy" className="hover:bg-dodger transition duration-300">Comprar Ahora</Button></a>
                        <a href="/about"><Button variant="outline">Saber más</Button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
