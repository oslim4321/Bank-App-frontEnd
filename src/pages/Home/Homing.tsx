import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { UserSelect } from '../../Redux/Slice/GetUserSlice'

const Homing = () => {
    const router = useRouter();
    /* getting user info from backend if true */
    // MakeRequestToServer()


    const User = useSelector(UserSelect)
    console.log(User, 'from home')
    if (User._id) {
        router.push(`/Dashboard/Transaction/Index`);
    }


    return (
        <>
            <Head>
                <title>Home page</title>
                <meta name='keywords' content='Home page' />

            </Head>

            <div className="bg-gray-100 font-sans leading-normal tracking-normal">
                <header className="bg-white border-b border-gray-200 py-4">
                    <div className="container mx-auto flex items-center justify-between flex-wrap px-4">
                        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-sm lg:flex-grow">
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
                                    Home
                                </a>
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
                                    Features
                                </a>
                                <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800">
                                    Pricing
                                </a>
                            </div>
                        </div>
                        <div>
                            <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Up</a>
                        </div>
                    </div>
                </header>
                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-3xl font-bold mb-4">Welcome to Our Bank</h1>
                    <p className="mb-4">We offer a wide range of products and services to help you achieve your financial goals, including checking and savings accounts, loans, and investments.</p>
                    <Link href="/Registration/OpenAccount/Index" className="btn bg-blue-500 text-white px-4 py-2 rounded-full my-4">Open an Account</Link>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Easy account management</h2>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilis</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Easy account management</h2>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilis</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Easy account management</h2>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilis</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Easy account management</h2>
                                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homing