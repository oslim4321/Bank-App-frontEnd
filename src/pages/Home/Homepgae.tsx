import React from 'react'
import { ToastContainer, toast } from 'react-toastify';


const Homepgae = () => {
    function pop(){
        toast("This is a success toast!");
    }
    return (
        <div>
              {/* <ToastContainer
                position='top-right'
                closeOnClick={true}
                // draggable={false}
                closeButton={<p>Close</p>}
            /> */}
            <button className='border p-3' onClick={pop}>Show pop</button>


            {/* <header>
            </header> */}

            {/* <main className="py-8 max-w-5xl mx-auto">
                <div className="bg-center bg-no-repeat bg-cover h-64" style={{ backgroundImage: '/Images/stock-photo-business-office-building-lobby-blur-background-of-bank-reception-hall-customer-or-patient-counter-748798912.jpg' }}></div>
                <div className="py-8">
                    <h1 className="text-3xl font-bold mb-4">Welcome to Our Bank</h1>
                    <p className="mb-4">We offer a wide range of products and services to help you achieve your financial goals, including checking and savings accounts, loans, and investments.</p>
                    <a href="#" className="btn bg-blue-500 text-white px-4 py-2 rounded-full">Open an Account</a>
                </div>
                <div className="py-8 bg-gray-200">
                    <h2 className="text-2xl font-bold mb-4">What Our Customers Are Saying</h2>
                    <div className="flex">
                        <div className="w-1/3 px-4">
                            <p className="mb-4">"I've been a customer for years and the service has always been top notch. I highly recommend this bank."</p>
                            <img src="/Images/IMG-20210908-WA0013.jpg" alt="Customer 1" className="h-32 rounded-full mb-4" />
                            <p className="text-gray-600 font-bold">- John Smith</p>
                        </div>
                        <div className="w-1/3 px-4">
                            <img src="/Images/IMG-20210908-WA0013.jpg" alt="Customer 2" className="h-32 rounded-full mb-4" />
                            <p className="mb-4">"I was able to get a mortgage through this bank at a great rate. I'm very happy with my experience."</p>
                            <p className="text-gray-600 font-bold">- Jane Doe</p>
                        </div>
                    </div>
                </div>
            </main> */}
        </div>
    )
}

export default Homepgae