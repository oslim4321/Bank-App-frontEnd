import Head from 'next/head'
import React, { useEffect, useState, } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../../WebState/Loading'
import CardTop from './CardTop'
import Profile from './Profile'
import { RootState } from '../../Redux/Store'
import { MakeRequestToServer } from '../../Api/Request/GetUserFromServerAndDispatch'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Home = () => {
    MakeRequestToServer()
    const router = useRouter()
    const [sideBar, setsideBar] = useState<boolean>(false)
   

    const { User, error, isFetching } = useSelector((state: RootState) => state.user)
    console.log(error)

    // useEffect(() => {
    //     if (User._id) {
    //         toast(`Hello Welcome ${User.firstName}`,
    //           { position: 'top-left' });
    //     }
    //   }, []);

    // useEffect(() => {
    //    if (!User) {
    //     router.push(`/Registration/SignIn/Index`)
    //    }
    // }, [User])

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name='keywords' content='dashboard' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>

            </Head>
            {/* return error message if error is true */}
            { error && <div className="text-red-500 text-3xl text-center capitalize">{error}</div>}

            {User._id && !error && !isFetching ?
                <div>
                    <div className="bg-gray-100 font-sans">
                        <div className="absolute">
                            <Profile
                                sideBar={sideBar}
                                setsideBar={setsideBar}
                                User={User}
                            />
                        </div>
                        <CardTop User={User} setsideBar={setsideBar} />
                        <div onClick={() => setsideBar(false)} className="container mx-auto p-4 overflow-scroll">

                            <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
                                <Link href='/Dashboard/MoneyTransfer/Index'>
                                <div className="col-span-2 text-white rounded-lg p-4 text-left font-bold text-xm md:text-lg transition delay-10 duration-300 hover:opacity-50 hover:-translate-y-3 h-28 bg-red-400">
                                    <i className="bi bi-send-fill text-white"></i>
                                    Send Money
                                </div>
                                </Link>
                                <Link href='/Dashboard/Transaction/TransactionHistory/Index'>
                                    <div className="col-span-1 text-white rounded-lg p-4 text-left font-bold text-xm md:text-lg transition delay-10 duration-300 hover:opacity-50 hover:-translate-y-3 h-28 bg-orange-400">
                                        <i className="bi bi-clock-history"></i>
                                        Transaction History
                                    </div>
                                </Link>
                                <div className="col-span-1 text-white rounded-lg p-4 text-left font-bold text-xm md:text-lg transition delay-10 duration-300 hover:opacity-50 hover:-translate-y-3 h-28 bg-teal-400">
                                    Tv Subscribe
                                </div>
                                <div className="col-span-2 text-white rounded-lg p-4 text-left font-bold text-xm md:text-lg transition delay-10 duration-300 hover:opacity-50 hover:-translate-y-3 h-28 bg-orange-400">
                                    Life
                                </div>

                                <Link href='/Dashboard/Transaction/Index'>
                                <div className="col-span-1 text-white rounded-lg p-4 text-left font-bold text-xm md:text-lg transition delay-10 duration-300 hover:opacity-50 hover:-translate-y-3 h-28 bg-indigo-400">
                                     Withdraw/Deposit
                                </div>
                                </Link>
                                <div className="col-span-1 text-white rounded-lg p-4 text-left font-bold text-xm md:text-lg transition delay-10 duration-300 hover:opacity-50 hover:-translate-y-3 h-28 bg-green-400 capitalize">
                                    Our User YOu can use For Test 
                                </div>
                                <div className="col-span-1 text-white rounded-lg p-4 text-left font-bold text-xm md:text-lg transition delay-10 duration-300 hover:opacity-50 hover:-translate-y-3 h-28 bg-amber-400">
                                    <i className="bi bi-credit-card"></i>
                                    Pay Bill
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :

                isFetching && <Loading />
            }
        </>
    )
}


export default Home