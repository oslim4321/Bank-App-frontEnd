// import { useFormik } from 'formik'
import { useFormik } from 'formik';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { sendUserData } from '../../../Api/SubmitUserAccount';
import { UserSelect } from '../../../Redux/Slice/GetUserSlice';
import Success from '../Status/Success';
import { states, cities } from './Arrtems'
import { UserForm } from './Schema';
// import { v4 as uuidv4 } from 'uuid';


let success = false;
let dupErr: string
let userId: string

const onSubmit = async (values: any, actions: any) => {
    //

    try {
        dupErr = ''
        const res = await sendUserData(values)
        if (res.data.success) {
            success = true;
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            const token = res.data.token
            userId = res.data.id
            localStorage.setItem('BankToken', token)
            localStorage.setItem('userId', res.data.id)
            //
            console.log(res.data, res.data.id);

        }
    } catch (error: any) {
        if (error.response.data.error.code === 11000) {
            dupErr = 'email already exist'
        }
    }
}



const Index = () => {
    const router = useRouter();
    const [registerSuccess, setregisterSuccess] = useState(false)
    const { values, handleChange, touched, errors, handleBlur, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dob: '',
            phone: '',
            resident:
            {
                country: '',
                state: '',
                city: '',
                zip: '',
                address: ''
            }
        },
        validationSchema: UserForm,
        onSubmit

    })

    if (userId) {
        router.push(`/Dashboard/${userId}`);
    }

    const User = useSelector(UserSelect)
    const randomString = Math.random().toString(36).substr(2, 20);
    useEffect(() => {
        if (User._id) {
            setregisterSuccess(true)
            // router.push(`/Dashboard/${randomString}`)
            // MakeRequestToServer()
        }
    }, [])

    return (
        <div>

            <Head>
                <title>Open Acounnt</title>
                <meta name='keywords' content='open Acounnt' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css" />

            </Head>

           {registerSuccess &&  <Success />}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <h3 className='text-3xl my-5'>Personal Information</h3>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input
                            // onChange={(e) => console.log(e.target.value)}
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            id='firstName'
                            className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3
                             ${errors.firstName && touched.firstName ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''} `} placeholder="Jane" />
                        {errors.firstName && touched.firstName && <small className='text-red-500'>{errors.firstName}</small>}
                        <p className="text-red text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='lastName'
                            className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4
                            ${errors.lastName && touched.lastName ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}`} type="text" placeholder="Doe" />
                        {errors.lastName && touched.lastName && <small className='text-red-500'>{errors.lastName}</small>}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-email">
                            Email
                        </label>
                        <input
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='email'
                            className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4
                            ${errors.email && touched.email ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}`} type="email" placeholder="Doe@gmail.com" />
                        {errors.email && touched.email && <small className='text-red-500'>{errors.email}</small>}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Date of Birth
                        </label>
                        <input
                            value={values.dob}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='dob'
                            className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4
                            ${errors.dob && touched.dob ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}`} type="date" placeholder="Date of Birth" />
                        {errors.dob && touched.dob && <small className='text-red-500'>{errors.dob}</small>}
                    </div>

                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Phone Number
                        </label>
                        <input
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='phone'
                            className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4
                            ${errors.phone && touched.phone ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}`} type="tel" placeholder="Phone number" />
                        {errors.phone && touched.phone && <small className='text-red-500'>{errors.phone}</small>}
                    </div>
                </div>
                <h3 className='text-3xl my-5'>Residental Address</h3>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
                            Country
                        </label>
                        <select
                            value={values.resident.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='resident.country'
                            className={`mx-2 flex-1 h-10 mt-2 form-select w-full border
                            ${errors.resident?.country && touched.resident?.country ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}`}>
                            <option disabled value="">country</option>
                            <option value="Nigeria">Nigeria</option>
                        </select>
                        {errors.resident?.country && touched.resident?.country && <small className='text-red-500'>{errors.resident?.country}</small>}
                    </div>

                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
                            State
                        </label>
                        <select
                            defaultValue={'state'}
                            value={values.resident.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='resident.state'
                            className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4
                            ${errors.resident?.state && touched.resident?.state ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}`}>
                            <option value=''>state</option>
                            {
                                states.map((elem, i) => (
                                    <option key={i} value={elem}>{elem}</option>
                                ))
                            }
                        </select>
                        {errors.resident?.state && touched.resident?.state && <small className='text-red-500'>{errors.resident?.state}</small>}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
                            City
                        </label>
                        <div className="relative">
                            <select
                                defaultValue={'city'}
                                value={values.resident.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='resident.city'
                                className={`block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded
                                ${errors.resident?.city && touched.resident?.city ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}`}>
                                <option value="">city</option>
                                {
                                    cities.map((elem, i) => (
                                        <option key={i}>{elem}</option>
                                    ))
                                }
                            </select>
                            {errors.resident?.city && touched.resident?.city && <small className='text-red-500'>{errors.resident?.city}</small>}
                            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
                            Zip
                        </label>
                        <input
                            value={values.resident.zip}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='resident.zip'
                            className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4
                            ${errors.resident?.zip && touched.resident?.zip ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}`} type="number" placeholder="90210" />
                        {errors.resident?.zip && touched.resident?.zip && <small className='text-red-500'>{errors.resident?.zip}</small>}
                    </div>
                </div>


                {/* Adress */}
                <div className="m-2">
                    <div className="w-full flex-1">
                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                            <input
                                value={values.resident.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='resident.address'
                                placeholder="Address"
                                className={`p-1 px-2 appearance-none outline-none w-full text-gray-800
                                ${errors.resident?.address && touched.resident?.address ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''}`} /> </div>
                    </div>
                </div>
                {errors.resident?.address && touched.resident?.address && <small className='text-red-500'>{errors.resident?.address}</small>}


                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Password
                    </label>
                    <p className="text-red text-xs italic">Please create a very strong password</p>
                    <input
                        // onChange={(e) => console.log(e.target.value)}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="password"
                        id='password'
                        className={`appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3
                             ${errors.password && touched.password ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700' : ''} `} placeholder="****" />
                    {errors.password && touched.password && <small className='text-red-500'>{errors.password}</small>}


                    <p className="text-red text-xs italic">Please fill out this field.</p>
                </div>

                <p className="text-red text-xs italic mb-8">Please fill out this field.</p>


                <p className="text-red text-xs italic mb-8">By signing this form, I acknowledge that the information I've given in this form is accurate and I agree all the terms and conditions..</p>


                {/* Adress end*/}
                <div className="flex-1 flex flex-col md:flex-row">
                    <button

                        className="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-teal-700 hover:text-teal-100 
                    bg-teal-100 
                    text-teal-700 
                    border duration-200 ease-in-out 
                    border-teal-600 transition"
                        disabled={isSubmitting && !userId}
                        type='submit'
                    >{isSubmitting ? 'Loading..' : 'Submit'}</button>
                    {dupErr && !isSubmitting && <small className='text-red-500'>{dupErr}</small>}
                </div>

            </form>


        </div>
    )
}

export default Index