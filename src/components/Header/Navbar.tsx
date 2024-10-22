"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { name: "Inicio", href: "/" },
        { name: "Comercio", href: "/shop" },
        { name: "Nosotros", href: "/about" }
    ]

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary">PanaCultura</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-between flex-1 ml-10">
                        <div className="flex space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/login">
                                <Button variant="ghost" size="icon">
                                    <User size={20} />
                                </Button>
                            </Link>
                            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(!isCartOpen)}>
                                <ShoppingCart size={20} />
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-gray-600">
                                    <Menu size={24} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                    <SheetDescription>
                                        <div className="flex flex-col space-y-4 mt-4">
                                            {navItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-lg font-medium"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="flex justify-around mt-6">
                                            <Button variant="outline" size="icon">
                                                <User size={20} />
                                            </Button>
                                            <Button variant="outline" size="icon" onClick={() => setIsCartOpen(!isCartOpen)}>
                                                <ShoppingCart size={20} />
                                            </Button>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}