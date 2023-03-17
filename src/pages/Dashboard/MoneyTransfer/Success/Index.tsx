import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Index  = ({query }: any) => {
    const router = useRouter()
    function goBack() {
        router.back()
    }
    const data = router.query
console.log(router.query, 'queru');


  return (
      <div>
        <div className=" inset-0 z-40 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 max-w-xs w-full shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
            <p className="mb-2">You just transfer NGN{data.amount} to {data.name} {data.lastName}</p>
            <p className="mb-4">Your payment has been processed successfully.</p>
            <div className="flex">
                      <button onClick={goBack} className="w-full py-3 bg-teal-500 hover:bg-green-600 text-white 
              rounded-full focus:outline-none focus:shadow-outline" type="button">Continue Transaction</button>
            <button className="w-full py-3 border font-bold rounded-full" type="button">Close</button>
           </div>
        </div>
        </div>

    </div>
  )
}

export default Index