import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { returnId } from '../Api/ReturnId';
import VarifyUser from './Validation/VarifyUser';
import { UserSelect } from '../Redux/Slice/GetUserSlice';
import { useSelector } from 'react-redux';
import UnVarifiedUser from './Validation/UnVarifiedUser';


const Navbar = () => {
    const [navBar, setnavBar] = useState<Boolean>(false)
    function ToggleNavbar() {
        setnavBar(nav => !nav)
    }

    const User = useSelector(UserSelect)
    const [userID, setuserID] = useState<string | null>()
    const id = returnId();
  useEffect(() => {
    if (id) {
        setuserID(id)
    }
  }, [id])
    // console.log(id)
   
    return (
        <>
            <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            href="/"
                            className="text-lg font-semibold text-white uppercase tracking-wide no-underline hover:text-gray-300"
                        >
                            Bank Name
                        </Link>
                        <button
                            onClick={ToggleNavbar}
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none
                        transition-all ease-in-out delay-150 hover:bg-green-500 z-50"
                            type="button"
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

                    </div>

                        {
                            User ? 
                            <VarifyUser navBar={navBar} />
                                :
                            <UnVarifiedUser  navBar={navBar} />
                        }

                    

                </div>
            </div >
            
        </>
    );
};

export default Navbar;

