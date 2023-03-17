import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MakeRequestToServer } from '../../../Api/Request/GetUserFromServerAndDispatch'
import { UserSelect } from '../../../Redux/Slice/GetUserSlice'


const Success = () => {
    MakeRequestToServer()
    const [popTrue, setpopTrue] = useState(false)
    useEffect(() => {
        setpopTrue(true)
    }, [])
    

    
    
    const randomString = Math.random().toString(36).substr(2, 8);
    const User = useSelector(UserSelect)


    return (
        <div className={`
             'block' : 'hidden'}
             transition-all ease-in-out delay-150 -translate-y-48'
            bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-50
           
    `}>
            <div className="bg-white px-16 py-14 rounded-md text-center w-96">
                <h1 className="text-xl mb-4 font-bold text-slate-500"> Successfully</h1>
                <h1 className="text-lg text-center">Our Policy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore optio fuga earum aut nulla dignissimos incidunt repellat voluptates amet deserunt placeat, est fugiat vitae expedita nam voluptatibus cupiditate quisquam nostrum corporis tempora! Reprehenderit nulla ipsum non dolorum, atque ab.</p>
                <Link href={`/Dashboard/${randomString}`}><button disabled={!User._id} className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Go Dashboard</button></Link>
                {/* <button onClick={() => success = true} className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Cancel</button> */}
            </div>
        </div>
    )
}

export default Success