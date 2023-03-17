import Link from 'next/link'
import React from 'react'
import { format } from 'timeago.js'


const History = ({ transaction, togglePage, setMessage }: any) => {

    let { accountNumber, amount, date, description, type } = transaction

    // console.log(transaction)

    return (
        <tr className='border-b border-gray-300'>
            <td className="py-4 px-6">{format(date)}</td>
            <td className="py-4 px-6">{accountNumber}</td>
            <td className="py-4 px-6">{description}</td>
            <td className="py-4 px-6">{type}</td>
            <td className="py-4 px-6 text-green-500 font-bold">NGN {amount} </td>
            <td className="py-4 px-6 border cursor-pointer"
                onClick={() => { togglePage(accountNumber), setMessage({ amount, description, type, date }) }}
            >Check</td>
        </tr>
    )
}

export default History