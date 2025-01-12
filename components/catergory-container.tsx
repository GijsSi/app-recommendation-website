import Image from 'next/image'
import { Star } from 'lucide-react'

interface App {
    name: string
    rating: number
    image: string
}

interface CategoryContainerProps {
    title: string
    apps: App[]
}

export function CategoryContainer({ title, apps }: CategoryContainerProps) {
    return (
        <div className="px-4 py-6 md:px-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 gri">
                {apps.map((app, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="relative w-16 h-16 mb-2">
                            <Image
                                src={app.image}
                                alt={app.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </div>
                        <h3 className="text-sm font-semibold text-center">{app.name}</h3>
                        <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="text-sm">{app.rating.toFixed(1)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryContainer