import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GetUserByAccNum, makeTransferApi } from '../../../Api/Transaction/GetUserTransaction'
import { toast } from 'react-toastify';


const Transfer = ({ User }: any) => {
    const router = useRouter()

    useEffect(() => {
            toast(`Hello ${User.firstName} you can make your transactions now`,
              { position: 'top-left' });
      }, []);


    const [userReceivingMoney, setuserReceivingMoney] = useState<any>()
    // const getUserTransaction()

    /* confirming receiver */
    const [BeneficiaryAcc, setBeneficiaryAcc] = useState<any>()
    const [errrorFindReceiver, seterrrorFindReceiver] = useState<any | ''>()
    const [loadingReceiver, setloadingReceiver] = useState(false)

    const [AmountSending, setAmountSending] = useState<Number>()
    const [description, setdescription] = useState<string>()
    const [MakingTransferLoading, setMakingTransferLoading] = useState(false)

    async function confirmTransfer() {
        seterrrorFindReceiver('')
        try {
            if (BeneficiaryAcc) {
                setloadingReceiver(true)
                const res = await GetUserByAccNum(BeneficiaryAcc)
                setuserReceivingMoney(res.data)
                console.log(res.data, 'lol')
                setloadingReceiver(false)
            }
        } catch (error: any) {
            seterrrorFindReceiver(error.response.data.error)
            setloadingReceiver(false)
        }
    }
    useEffect(() => {
        if (BeneficiaryAcc && BeneficiaryAcc.length < 9) {
            setuserReceivingMoney('')
        }
    }, [BeneficiaryAcc])


   async function makeTransfer() {
        setMakingTransferLoading(true)
       try {
        let data
        seterrrorFindReceiver('')
        if (User.accountNumber || BeneficiaryAcc || AmountSending || description) {        
             data = {sender: User.accountNumber, recipient:BeneficiaryAcc, amount:Number(AmountSending),description  }
            const res = await makeTransferApi(data)
            if (res.data) {
                setMakingTransferLoading(false)
                // router.push('/Dashboard/MoneyTransfer/Success/Index')
                /* sending the receiver info with the routing if Success Payment */
                router.push({
                    pathname: '/Dashboard/MoneyTransfer/Success/Index',
                    query: {
                        name: userReceivingMoney.firstName,  lastName: userReceivingMoney.lastName,
                        recipient: BeneficiaryAcc, amount: Number(AmountSending), description
                    },
                  });
                return
            }
            router.push('/Dashboard/MoneyTransfer/Failed/Index')
            return
        }
        
           seterrrorFindReceiver('All filed are required')
       } catch (error) {
        router.push('/Dashboard/MoneyTransfer/Failed/Index')

           setMakingTransferLoading(false)
            console.log(error)
       }
    }

    const accountNumberString = User.accountNumber.toString();
    const slicedAccountNumber = accountNumberString.slice(0, 5);



    // console.log(User)
    return (
        <div>
            <div className=" inset-0 z-40 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 max-w-xs w-full shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Transfer Money</h2>
                    <div>
                        <label className="block font-bold mb-2 text-gray-700">Transfer From:</label>
                        {/* transfer from */}
                        <div className="flex items-center gap-x-[10px] bg-neutral-100 p-3 mt-2 rounded-[4px]">
                            {/* <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" /> */}
                            <div>
                                <div className="font-semibold">{User.firstName} {User.lastName}</div>
                                <div className="text-[#64748B]">Savings Account {slicedAccountNumber}</div>
                            </div>
                        </div>
                        {/* transfer from  end*/}

                        {/* <label className="block font-bold mb-2 text-gray-700 mt-4">Transfer To:</label> */}
                        <p>Beneficiary account number</p>
                        <input
                            onChange={(e: any) => setBeneficiaryAcc(e.target.value)}
                            type="text" className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                        <p className='text-slate-900 flex justify-end'>Choose Beneficiary</p>

                        {
                            userReceivingMoney &&
                            <>
                                <label className="block font-bold mb-2 text-gray-700 mt-4">Amount</label>
                                <input
                                    onChange={(e:any)=> setAmountSending(e.target.value)}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="NGN0.00" />
                                <label className="block font-bold mb-2 text-gray-700 mt-4">Transfer To:</label>
                                
                                <div className="items-center gap-x-[10px] bg-neutral-100 p-3 mt-2 rounded-[4px]">
                                    {/* <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" /> */}
                                    <div className=' justify-center flex-row'>
                                        <div className="font-semibold items-center">{userReceivingMoney.firstName} {userReceivingMoney.lastName}</div>
                                        <div className="text-green-500 items-center"> NGN</div>
                                    </div>
                                </div>
                                <textarea
                                    onChange={(e:any)=> setdescription(e.target.value)}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    name="" id="">
                                    
                                </textarea>
                            </>
                        }

                        {

                            userReceivingMoney
                                ?
                                <button onClick={makeTransfer}
                                    disabled={MakingTransferLoading}
                                    className="w-full py-3 mt-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full focus:outline-none focus:shadow-outline" type="submit">
                                   {MakingTransferLoading ? 'Loading...' : 'Transfer'}
                                </button>
                                :
                                < button onClick={confirmTransfer} disabled={loadingReceiver} className="w-full py-3 mt-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full focus:outline-none focus:shadow-outline" type="submit">
                                    {loadingReceiver ? 'Loading...' : 'Confirm Transfer'}
                                </button>
                        }
                        {errrorFindReceiver && <p className='text-red-500 text-center'>{errrorFindReceiver}</p>}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Transfer