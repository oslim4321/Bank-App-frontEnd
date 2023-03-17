import Link from 'next/link'
import React from 'react'

const VarifyUser = ({ navBar }: any) => {
    let id = Math.floor(Math.random() * 3563274743)

  return (

          
          <div className={`lg:flex flex-grow items-center lg:shadow-none
                    transition-all ease-in-out delay-150 bg-white lg:bg-transparent md:bg-transparent
                    ${navBar ? '-translate-y-40' : ''}
                     `}

                        id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    href="/"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-700  rounded-full hover:bg-gray-200"
                                >
                                    Accounts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/transactions"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-700  rounded-full hover:bg-gray-200"
                                >
                                    <i className="bi-alarm"></i>

                                    Transactions
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={`/Dashboard/${id}`}
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-700  rounded-full hover:bg-gray-200"
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

  )
}

export default VarifyUser