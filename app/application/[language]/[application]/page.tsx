import React from 'react'
import { getApplicationData } from '@/lib/graphql/getApplicationData'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

type PageProps = {
    params: { language: string; application: string }
}

export default async function ApplicationPage({ params }: PageProps) {
    const { language, application: applicationParam } = await params

    try {
        const application = await getApplicationData(language, applicationParam)
        if (!application) {
            return (
                <div className="p-8">
                    <h2>No application found for <strong>{applicationParam}</strong>.</h2>
                </div>
            )
        }

        const {
            title,
            icon,
            appCategory,
            rating,
            developer,
            downloadAmount,
            license,
            appDownloads,
            blocks,
        } = application

        return (
            <main className="max-w-3xl mx-auto p-8">
                {/* Top Section */}
                <section className="text-center">
                    {icon?.[0]?.url && (
                        <img
                            src={`https://assets.bestofapps.com${icon[0].url}`}
                            alt={`${title} Icon`}
                            className="w-[120px] h-[120px] rounded-xl object-contain mx-auto"
                        />
                    )}
                    <h1 className="text-2xl mt-4">{title}</h1>
                    <p className="text-gray-600">By {developer || 'Unknown Developer'}</p>
                </section>

                {/* Info Row */}
                <section className="flex flex-wrap justify-evenly mt-8 gap-4 max-w-xs">
                    <div>
                        <strong>Category:</strong>
                        <p className="text-wrap max-w-32">{appCategory?.[0]?.title || 'N/A'}</p>
                    </div>
                    <div>
                        <strong>Rating:</strong>
                        <p>{rating ? `${rating} ★` : 'N/A'}</p>
                    </div>
                    <div>
                        <strong>Downloads:</strong>
                        <p>{downloadAmount || 'N/A'}</p>
                    </div>
                    <div>
                        <strong>License:</strong>
                        <p>{license || 'N/A'}</p>
                    </div>
                </section>

                {/* Download Buttons */}
                <section className="text-center mt-8">
                    <div>
                        {application?.apkFile?.[0]?.url && (
                            <a
                                href={`https://admin.bestofapps.com${application.apkFile[0].url}`}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-slate-500 shadow-lg hover:shadow-inner hover:text-violet-500 transition"
                            >
                                <Download/>
                                <span>Download Latest APK</span>
                            </a>
                        )}
                    </div>
                    <div>
                        {appDownloads?.map((download: any, idx: number) => (
                            <a
                                key={idx}
                                href={download.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 m-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                            >
                                {download.type === 'googlePlay' ? 'Google Play' : 'App Store'}
                            </a>
                        ))}
                    </div>

                </section>

                {/* Blocks Content */}
                <section className="mt-12">
                    {blocks?.map((block: any, i: number) => {
                        if (block.mainTitle) {
                            return (
                                <div key={i} className="mb-8">
                                    <h2 className="text-xl font-semibold mb-2">{block.mainTitle}</h2>
                                    {block.text && <p>{block.text}</p>}
                                    {block.items && (
                                        <ul className="list-disc pl-6">
                                            {block.items.map((item: any, idx: number) => (
                                                <li key={idx}>{item.item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {block.pros && (
                                        <>
                                            <h3 className="text-lg font-semibold mt-4">Pros</h3>
                                            <ul className="list-disc pl-6">
                                                {block.pros.map((pro: any, idx: number) => (
                                                    <li key={idx}>{pro.pro}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {block.cons && (
                                        <>
                                            <h3 className="text-lg font-semibold mt-4">Cons</h3>
                                            <ul className="list-disc pl-6">
                                                {block.cons.map((con: any, idx: number) => (
                                                    <li key={idx}>{con.con}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            )
                        }
                        return null
                    })}
                </section>

                {/* Related Apps Section */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Related Apps</h2>
                    <div className="flex gap-4">
                        {/* Replace the following with actual related apps */}
                        <div className="text-center">
                            <img
                                src="/images/googleDrive-icon.jpg"
                                alt="Google Drive"
                                className="w-16 h-16 mx-auto"
                            />
                            <p className="mt-2">Google Drive</p>
                            <p>4.3 ★</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="/images/excel-icon.jpg"
                                alt="Microsoft Excel"
                                className="w-16 h-16 mx-auto"
                            />
                            <p className="mt-2">Microsoft Excel</p>
                            <p>4.6 ★</p>
                        </div>
                    </div>
                </section>
            </main>
        )
    } catch (error) {
        console.error('Error fetching application data:', error)
        return <div className="p-8">Error loading application data.</div>
    }
}
