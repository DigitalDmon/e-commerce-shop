import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Comercio", href: "/shop" },
    { name: "Nosotros", href: "/about" },
]

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Sobre de nosotros</h3>
                        <p className="text-gray-600">
                            PanaCultura es tu destino ideal para descubrir y adquirir productos auténticos de Panamá.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Accesos Directos</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-600 hover:text-primary">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Únete a nuestra comunidad</h3>
                        <p className="text-gray-600">Suscríbete y recibe novedades y promociones.</p>
                        <form className="flex space-x-2">
                            <input type="email" placeholder="Tu correo electrónico" className="flex-grow" />
                            <Button type="submit">Suscribirse</Button>
                        </form>
                        <div className="flex space-x-4 mt-4">
                            <Link href="#" className="text-gray-400 hover:text-primary">
                                <Facebook size={24} />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary">
                                <Twitter size={24} />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary">
                                <Instagram size={24} />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
                    <p>&copy; 2024 PanaCultura. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}