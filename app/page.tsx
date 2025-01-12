import {CategoryContainer} from "@/components/catergory-container";

const categories = [
    {
        title: "Staff Picks",
        apps: [
            { name: "App A", rating: 4.8, image: "https://app-geek.com/data/app-images/net.poopmap_2024-10-01-044003_wuor.webp" },
            { name: "App B", rating: 4.7, image: "https://app-geek.com/data/app-images/com.figma.mirror_2024-08-23-084010_qfuq.webp" },
            { name: "App C", rating: 4.9, image: "https://app-geek.com/data/app-images/com.squareup.cash_2024-10-01-095807_xcrm.webp" },
            { name: "App D", rating: 4.6, image: "https://app-geek.com/data/app-images/epic.mychart.android_2024-10-01-095339_hhhn.webp" },
            { name: "App E", rating: 4.8, image: "https://app-geek.com/data/app-images/com.mcdonalds.app_2024-10-01-084851_ghcg.webp" },
            { name: "App A", rating: 4.8, image: "https://app-geek.com/data/app-images/net.poopmap_2024-10-01-044003_wuor.webp" },
            { name: "App B", rating: 4.7, image: "https://app-geek.com/data/app-images/com.figma.mirror_2024-08-23-084010_qfuq.webp" },
            { name: "App C", rating: 4.9, image: "https://app-geek.com/data/app-images/com.squareup.cash_2024-10-01-095807_xcrm.webp" },
            { name: "App D", rating: 4.6, image: "https://app-geek.com/data/app-images/epic.mychart.android_2024-10-01-095339_hhhn.webp" },
            { name: "App E", rating: 4.8, image: "https://app-geek.com/data/app-images/com.mcdonalds.app_2024-10-01-084851_ghcg.webp" },
        ]
    },
    {
        title: "Most Downloaded",
        apps: [
            { name: "App A", rating: 4.8, image: "https://app-geek.com/data/app-images/net.poopmap_2024-10-01-044003_wuor.webp" },
            { name: "App B", rating: 4.7, image: "https://app-geek.com/data/app-images/com.figma.mirror_2024-08-23-084010_qfuq.webp" },
            { name: "App C", rating: 4.9, image: "https://app-geek.com/data/app-images/com.squareup.cash_2024-10-01-095807_xcrm.webp" },
            { name: "App D", rating: 4.6, image: "https://app-geek.com/data/app-images/epic.mychart.android_2024-10-01-095339_hhhn.webp" },
            { name: "App E", rating: 4.8, image: "https://app-geek.com/data/app-images/com.mcdonalds.app_2024-10-01-084851_ghcg.webp" },
        ]
    },
    {
        title: "News Apps",
        apps: [
            { name: "News X", rating: 4.2, image: "https://app-geek.com/data/app-images/com.android.chrome_2024-10-01-095505_aiwn.webp" },
            { name: "News Y", rating: 4.4, image: "https://app-geek.com/data/app-images/com.figma.mirror_2024-08-23-084010_qfuq.webp" },
            { name: "News Z", rating: 4.3, image: "https://app-geek.com/data/app-images/com.squareup.cash_2024-10-01-095807_xcrm.webp" },
            { name: "News W", rating: 4.5, image: "https://app-geek.com/data/app-images/net.sharewire.parkmobilev2_2024-08-23-090556_tjxr.webp" },
            { name: "News V", rating: 4.1, image: "https://app-geek.com/data/app-images/jp.co.canon.bsd.ad.pixmaprint_2024-10-01-085507_jwbj.webp" },
        ]
    },
    {
        title: "Most Rated",
        apps: [
            { name: "App A", rating: 4.8, image: "https://app-geek.com/data/app-images/net.poopmap_2024-10-01-044003_wuor.webp" },
            { name: "App B", rating: 4.7, image: "https://app-geek.com/data/app-images/com.figma.mirror_2024-08-23-084010_qfuq.webp" },
            { name: "App C", rating: 4.9, image: "https://app-geek.com/data/app-images/com.squareup.cash_2024-10-01-095807_xcrm.webp" },
            { name: "App D", rating: 4.6, image: "https://app-geek.com/data/app-images/epic.mychart.android_2024-10-01-095339_hhhn.webp" },
            { name: "App E", rating: 4.8, image: "https://app-geek.com/data/app-images/com.mcdonalds.app_2024-10-01-084851_ghcg.webp" },
        ]
    }
]

export default function Home() {
    return (
        <div className="min-h-screen bg-background max-w-7xl mx-auto">
            <main>
                {categories.map((category, index) => (
                    <CategoryContainer key={index} title={category.title} apps={category.apps} />
                ))}
            </main>
        </div>
    )
}

