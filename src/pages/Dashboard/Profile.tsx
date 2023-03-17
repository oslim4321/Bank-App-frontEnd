import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { clearUser, UserSelect } from '../../Redux/Slice/GetUserSlice'
import { Items } from './ItemsObj'

type props = {
    sideBar: boolean,
    setsideBar: React.Dispatch<React.SetStateAction<boolean>>
    User: any
}

const Profile = ({ sideBar, setsideBar, User }: props) => {


    const router = useRouter()
    const dispatch = useDispatch()
    function signOut() {
        dispatch(clearUser())
        localStorage.removeItem('userId')
        localStorage.removeItem('BankToken')
        router.push('/Registration/SignIn/Index')
        toast(`Logout Success`,
        { position: 'top-left' });
    }


    return (
        <div className='relative inline z-50'>
            <div className="font-poppins antialiased inline">
                <div
                    id="view"
                    className="h-full flex flex-row"
                    x-data="{ sidenav: true }"
                >
                    <button
                        onClick={() => setsideBar(!sideBar)}
                        className="
                        p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-3 "
                    >
                        <svg
                            className="w-5 h-5 fill-current"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    {/* profile */}
                    <div
                        id="sidebar"
                        className={`
                       ${sideBar ? '' : '-translate-x-60 w-0'}
                        bg-white  h-full md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
                        x-show="sidenav`}
                    >
                        <div className="space-y-6 md:space-y-10 mt-10">
                            <div className="font-bold text-4xl text-center md:hidden">
                                W<span className="text-teal-600">.</span>
                            </div>
                            <div className="hidden md:block font-bold text-sm md:text-xl text-center">
                                Welcome<span className="text-teal-600">.</span>
                            </div>
                            <div id="profile" className="space-y-3">
                                <Image src="/Images/IMG-20210806-WA0007.jpg" alt='"IMG-20210806-WA0007..jpg"'
                                    width={50} height={50}
                                    className="w-10 md:w-16 rounded-full mx-auto"
                                ></Image>
                                <div>
                                    <h2
                                        className="font-medium text-xs md:text-sm text-center text-teal-500"
                                    >
                                        {User.lastName} {User.firstName}
                                    </h2>
                                    <p className="text-xs text-gray-500 text-center">Administrator</p>
                                </div>
                            </div>
                            <div id="menu" className="flex flex-col space-y-2">
                                {Items.map((elem, i) => (
                                    <Link key={i} href={elem.url}>
                                        < div
                                            key={i}
                                            className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                                        >
                                            {elem.svg}

                                            <span className="">{elem.text}</span>
                                        </div>
                                    </Link>
                                ))
                                }
                                {/* signOut  */}
                                < div
                                    onClick={signOut}
                                    className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                        ></path>
                                    </svg>,

                                    <span className="">SignOut</span>
                                </div>
                                {/* signOut  End*/}
                            </div>
                        </div>
                    </div>
                    {/* profile */}

                </div>
            </div>
        </div>
    )
}

export default Profile