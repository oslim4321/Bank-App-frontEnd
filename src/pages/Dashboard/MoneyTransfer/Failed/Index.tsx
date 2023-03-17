import { useRouter } from 'next/router'
import React from 'react'

const Index = () => {
    const router = useRouter()

    function goBack() {
        router.back()
    }

  return (
    <div>
<div className="inset-0 z-40 flex items-center justify-center">
  <div className="bg-white rounded-lg p-6 max-w-xs w-full shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Payment Failed</h2>
    <p className="mb-4">There was an error processing your payment. Please try again.</p>
    <button onClick={goBack} className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full focus:outline-none focus:shadow-outline" type="button">Close</button>
  </div>
</div>

    </div>
  )
}

export default Index