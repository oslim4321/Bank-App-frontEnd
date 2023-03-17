import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { sendTransaction } from '../../../Api/Transaction/SendUserTransaction'
import { RootState } from '../../../Redux/Store'


const transaction = yup.object().shape({
    type: yup.string().required('required'),
    amount: yup.number().required('required'),
    description: yup.string().required('required'),
})

const Select = ({ accountNumber }: any) => {
    const [transSuccess, settransSuccess] = useState()
    const router = useRouter()

    const onSubmit = async (values: any) => {
        console.log({ ...values, accountNumber })
        try {
            const res = await sendTransaction({ ...values, accountNumber })
            if (res.data.account) {
                settransSuccess(res.data.message)
                router.back()
            }


        } catch (error) {
            console.log(error)
        }
    }


    const { values, handleChange, touched, errors, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            type: '',
            amount: '',
            description: '',

        },
        validationSchema: transaction,
        onSubmit
    })

    return (
        <div className='md:mx-[25%]'>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 w-full p-5">
                <label className="relative flex-1 flex flex-col">
                    <span className="font-bold mb-3">Transaction Type</span>
                    <select
                        value={values.type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="type"
                        defaultValue={'transaction'} name=""
                        className={`rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300
                        ${errors.type && touched.type ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''} 
                        `}>
                        <option value="transaction">transaction</option>
                        <option value="withdrawal">Withdrawal</option>
                        <option value="deposit">Deposit</option>
                    </select>
                    {errors.type && touched.type && <small className='text-red-500'>{errors.type}</small>}

                </label>

                <label className="relative flex-1 flex flex-col">
                    <span className="font-bold flex items-center gap-3 mb-3">
                        Amount
                        <span className="relative group">
                            <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"> Enter Your Amount</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                    </span>
                    <input
                        value={values.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="number"
                        id='amount'
                        name="amount"
                        className={`rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300
                        ${errors.amount && touched.amount ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}
                        `} placeholder="Enter amount" />
                    {errors.amount && touched.amount && <small className='text-red-500'>{errors.amount}</small>}
                </label>




                <label className="relative w-full flex flex-col">
                    <span className="font-bold mb-3">Description</span>
                    <textarea
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id='description'
                        className={`rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300
                        ${errors.description && touched.description ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}
                        `}
                    ></textarea>
                    {errors.description && touched.description && <small className='text-red-500'>{errors.description}</small>}
                </label>

                <button
                    disabled={isSubmitting}
                    className="p-2 pl-5 pr-5 bg-teal-500 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">{isSubmitting ? 'Loading...' : 'Submit'}</button>
                <p className="text-green-400 text-2xl text-center">{transSuccess}</p>
            </form>
        </div>
    )
}

export default Select