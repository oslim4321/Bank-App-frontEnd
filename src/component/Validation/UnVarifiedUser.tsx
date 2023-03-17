import Link from 'next/link'
import React from 'react'

const UnVarifiedUser = ({navBar}: any) => {
  return (
          <div className={`lg:flex flex-grow items-center lg:shadow-none
                    transition-all ease-in-out delay-150 bg-white lg:bg-transparent md:bg-transparent
                    ${navBar ? '-translate-y-40' : ''}
                     `}

                        id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    href="/Registration/OpenAccount/Index"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-700  rounded-full hover:bg-gray-200"
                                >
                                    SignUp
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/Registration/SignIn/Index"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-700  rounded-full hover:bg-gray-200"
                                >
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/transactions"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-700  rounded-full hover:bg-gray-200"
                                >

                                    About Us
                                </Link>
                            </li>

                        </ul>
                    </div>
  )
}

export default UnVarifiedUser