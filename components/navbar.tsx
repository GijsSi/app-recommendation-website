'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
// import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { CountrySlider } from './country-slider'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div>
        <nav className="flex items-center justify-between p-4 bg-background">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold">
                    Logo
                </Link>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                        <SheetTitle>Navigation Menu</SheetTitle>
                    <nav className="flex flex-col space-y-4 mt-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </nav>
            <CountrySlider />
        </div>
    )
}

