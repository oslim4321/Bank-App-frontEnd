import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MakeRequestToServer } from '../../../../Api/Request/GetUserFromServerAndDispatch'
import { GetUserByAccNum, getUserTransaction } from '../../../../Api/Transaction/GetUserTransaction'
import { UserSelect, UserSelectErr } from '../../../../Redux/Slice/GetUserSlice'
import Error from '../../../../WebState/Error'
import Loading from '../../../../WebState/Loading'
import History from './History'
import FullDetailPop from './FullDetailPop'

const Index = () => {
    MakeRequestToServer()
    const User = useSelector(UserSelect)
    const UserErr = useSelector(UserSelectErr)
    const [transaLoading, settransaLoading] = useState<boolean>(false)
    const [fullDetailsPopUp, setfullDetailsPopUp] = useState(false)
    const [userGetBaseTrans, setuserGetBaseTrans] = useState()
    const [Message, setMessage] = useState()

    const [TransactionHistory, setTransactionHistory] = useState<any>([])


    const getTrans = async () => {
        try {
            if (User._id) {
                settransaLoading(true)
                const res = await getUserTransaction(User._id)
                setTransactionHistory(res.data)
                settransaLoading(false)
            }
        } catch (error: any) {
            settransaLoading(false)
            console.log(error)
        }
    }


    useEffect(() => {
        getTrans()
    }, [User._id])



    async function togglePage(id: string) {
        setfullDetailsPopUp(true)
        const res = await GetUserByAccNum(id)
        if (res) {
            setuserGetBaseTrans(res.data)
        }
    }

    // console.log(TransactionHistory)

    if (User._id) {
        return (
            <div>
                <Head>
                    <title>Transactions History</title>
                    <meta name='keywords' content='Transactions History' />
                </Head>

                {!fullDetailsPopUp ? <div className="bg-gray-100 h-full flex flex-col">
                    <header className="bg-gray-800 py-4 px-6 text-white flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Transaction History</h1>
                        {/* <button className="text-sm font-medium bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue">
                            New Transaction
                        </button> */}
                    </header>
                    <main className="flex-1 overflow-y-scroll px-6 py-4">
                        <table className="w-full text-left table-collapse">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Date</th>
                                    <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">account</th>
                                    <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Description</th>
                                    <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">type</th>
                                    <th className="py-4 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-300">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transaLoading ? 'loading..' :
                                        TransactionHistory.length > 0 ?
                                            TransactionHistory.map((transaction: any) => (
                                                <History key={transaction.date} transaction={transaction}
                                                    togglePage={togglePage}
                                                    setMessage={setMessage}
                                                />
                                            ))
                                            :
                                            'No History'
                                }
                            </tbody>
                        </table>
                    </main>
                    <footer className="bg-gray-800 p-4 flex items-center justify-between">
                        <div className="text-white text-sm">Total:</div>
                        <div className="text-white text-xl font-bold">NGN</div>
                    </footer>
                </div>
                    :
                    <FullDetailPop
                        removePop={setfullDetailsPopUp}
                        user={userGetBaseTrans}
                        Message={Message}
                    />
                }

            </div>
        )
    }
    return (!UserErr ? <Loading /> : <Error />)



}

export default Index