import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
                        <p className="text-gray-600">
                            EShop is your one-stop destination for all your shopping needs. We offer a wide range of products at competitive prices.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
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
                        <h3 className="text-lg font-semibold text-gray-900">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/faq" className="text-gray-600 hover:text-primary">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-gray-600 hover:text-primary">
                                    Shipping Information
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-gray-600 hover:text-primary">
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-primary">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
                        <p className="text-gray-600">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="flex space-x-2">
                            <Input type="email" placeholder="Your email" className="flex-grow" />
                            <Button type="submit">Subscribe</Button>
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
                    <p>&copy; 2024 EShop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}