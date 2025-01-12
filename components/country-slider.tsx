'use client'

import * as React from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Russia', flag: '🇷🇺' },
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Spain', flag: '🇪🇸' },
]

export function CountrySlider() {
    return (
        <ScrollArea className="w-full whitespace-nowrap ">
            <div className="flex w-max space-x-4 p-4">
                {countries.map((country) => (
                    <button
                        key={country.name}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                        <span className="mr-1 text-base">{country.flag}</span>
                        {country.name}
                    </button>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
