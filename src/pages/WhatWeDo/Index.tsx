import { useRouter } from 'next/router';
import React from 'react'

const Index = () => {
    const router = useRouter()
    const randomString = Math.random().toString(36).substr(2, 8);

    function goDashboard() {
        router.push(`/Dashboard/${randomString}`);
    }
    return (
        <div>
            <div className="mx-auto w-full px-4 text-center lg:w-6/12"><h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-3">Build something</h2><p className="block antialiased font-sans text-xl font-normal leading-relaxed text-blue-gray-500">Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos.</p></div>

            <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                <button onClick={goDashboard}>Go Home</button>
                {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent shadow-none text-center text-blue-gray-900">
                    <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>
                    </div>
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">Excelent Services
                    </h5>
                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-500">Some quick example text to build on the card title and make up the bulk of the card content.
                    </p>
                </div> */}
                {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent shadow-none text-center text-blue-gray-900">
                    <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5"><path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z" clip-rule="evenodd"></path></svg>
                    </div>
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">Grow Your Market
                    </h5>
                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-500">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                </div> */}
                {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent shadow-none text-center text-blue-gray-900">
                    <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5"><path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd">
                        </path>
                            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
                            </path>
                        </svg>
                    </div>
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">Launch Time
                    </h5>
                    <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-500">Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Index