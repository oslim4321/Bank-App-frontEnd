import React, { useEffect, useState } from 'react'
import Loading from '../../../../WebState/Loading'
import { format } from 'timeago.js'
import { UserSelect } from '../../../../Redux/Slice/GetUserSlice'
import { useSelector } from 'react-redux'


const FullDetails = ({ user, removePop, Message }: any) => {
    const [messagAlert, setmessagAlert] = useState<any>(Object.assign({}, user, Message))
    const User = useSelector(UserSelect)
    // console.log(User, 'hiiii')
    useEffect(() => {
        if (user) {
            setmessagAlert(Object.assign({}, user, Message))
            console.log(messagAlert)
        }
    }, [user])

    const { amount, description, firstName, lastName, phone, type, date } = messagAlert
    return (
        <div className='flex items-center justify-center mt-8 md:mt-20'>
            <div className='w-full h-[200px] md:w-[50%] md:h-[50vh]  bg-slate-300 text-center relative px-3'>
                <p onClick={() => removePop(false)} className='absolute right-10'>X</p>

                {
                    user ?
                        <div>
                            {
                                type === "credit" &&
                                <div>
                                    <h1 className='text-2xl font-bold capitalize'>{type}:</h1>
                                    <div className="text-lg font-normal">Hello {User.firstName}</div>
                                    <p className='tracking-wider'> {firstName} {lastName} sent
                                        you NGN{amount} for {description}
                                        <p>your Balance is now NGN{User.balance}</p>
                                        <p>phone: {phone}</p>
                                    </p>
                                    {/* <p>{format(date)}</p> */}
                                </div>
                            }
                            {
                                type === "debit" &&
                                <div>
                                    <h1 className='text-2xl font-bold capitalize'>{type}:</h1>
                                    <div className="text-lg font-normal">Hello {User.firstName}</div>
                                    <p className='tracking-wider'>Hello {User.firstName} you sent {firstName} {lastName}
                                        NGN{amount} for {description}
                                        <p>your Balance is now NGN{User.balance}</p>
                                        <p>phone: {phone}</p>
                                    </p>

                                </div>
                            }
                            {
                                type === 'withdrawal' && 
                                <div>
                                <h1 className='text-2xl font-bold capitalize'>{type}:</h1>
                                <div className="text-lg font-normal">Hello {User.firstName}</div>
                                <p className='tracking-wider'>Hello {User.firstName} you just withdrawal 
                                    NGN{amount} for `({description})`
                                    <p>your Balance is now NGN{User.balance}</p>
                                </p>

                                </div>
                                
                            }
                            {
                                type === 'deposit' && 
                                <div>
                                <h1 className='text-2xl font-bold capitalize'>{type}:</h1>
                                <div className="text-lg font-normal">Hello {User.firstName}</div>
                                <p className='tracking-wider'>Hello {User.firstName} you just deposit 
                                    NGN{amount} for {description}
                                    <p>your Balance is now NGN{User.balance}</p>
                                </p>

                                </div>
                                
                            }

                            <p className='absolute bottom-0'>{format(date)}</p>
                        </div>

                        :
                        'loading ...'
                }
            </div>
        </div>
    )

}

export default FullDetails