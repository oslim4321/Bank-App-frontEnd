import { useFormik } from 'formik'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { sendUserLoginDetails } from '../../../Api/SubmitUserAccount'
import { UserSelectErr } from '../../../Redux/Slice/GetUserSlice'
import Success from '../Status/Success'
import { MakeRequestToServer } from '../../../Api/Request/GetUserFromServerAndDispatch'

let userId: string | null
let Logerrors = { email: '', password: '' }


const onSubmit = async (values: any) => {
    try {
        const res = await sendUserLoginDetails(values)

        const token = res.data.token;
        userId = res.data._id

        localStorage.setItem('BankToken', token)
        localStorage.setItem('userId', res.data._id)

    } catch (error: any) {
        if (error.response.data) {
            Logerrors = error.response.data;
        }
    }
}

const Index = () => {
    MakeRequestToServer()
    const router = useRouter();


    const User: any = useSelector(UserSelectErr)

    
     /* redirect ther user back if there is user logged */
     useEffect(() => {
        if (User._id) {
            router.back()
        }
    }, [])


    const [logInSuccess, setlogInSuccess] = useState(false)

    
    const UserFormLogin = yup.object().shape({
        email: yup.string().email('Enter Valid Email').required('required'),
        password: yup.string().min(3).required(),
    })


    const { values, handleChange, touched, errors, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: UserFormLogin,
        onSubmit
    })

    const randomString = Math.random().toString(36).substr(2, 8);

   useEffect(() => {
       if (userId) {
        userId = null
           router.push(`/Dashboard/${randomString}`);
           toast.success(`Login Success`,
           { position: 'top-left' });
       
    }
   }, [userId])

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name='keywords' content='login page' />

            </Head>

            <form onSubmit={handleSubmit} onClick={() => Logerrors = { email: '', password: '' }}>
                {logInSuccess && <Success/>}
                <div className="bg-gray-10 ">
                    <div className="flex justify-center h-full w-full items-center">
                        <div className="w-full md:w-1/2 flex flex-col items-center " >
                            <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
                            <div className="w-3/4 mb-6">
                                <input
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="email"
                                    type="email" name="email" className={`w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500
                                ${errors.email && touched.email ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}
                                `} placeholder="User Email" />
                                {errors.email && touched.email && <small className='text-red-500'>{errors.email}</small>}
                            </div>
                            <div className="w-3/4 mb-6">
                                <input
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="password"
                                    type="password" name="password" className={`w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 
                                ${errors.password && touched.password ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}
                                `} placeholder="Password" />
                                {errors.password && touched.password && <small className='text-red-500'>{errors.password}</small>}
                            </div>
                            <div className="w-3/4 flex flex-row justify-between">
                                <div className=" flex items-center gap-x-1">
                                    <input type="checkbox" name="remember" id="" className=" w-4 h-4  " />
                                    <label htmlFor="" className="text-sm text-slate-400">Remember me</label>
                                </div>
                                <div>
                                    <a href="#" className="text-sm text-slate-400 hover:text-blue-500">Forgot?</a>
                                </div>
                            </div>
                            <div className="w-3/4 mt-4">
                                <button disabled={isSubmitting} type='submit' className="py-4 bg-teal-400 w-full rounded text-blue-50 font-bold hover:bg-teal-700">
                                    {isSubmitting ? 'Loading...' : 'LOGIN'}</button>
                            </div>
                            <p className='text-red-500'>{Logerrors.email} {Logerrors.password}</p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Index