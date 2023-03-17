import React from 'react'

const Footer = () => {

    return (

        <>
            <footer className="bg-slate-200 py-8 px-4 text-slate-600 flex flex-wrap mt-[80px]            "
            >
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <p className="text-sm mb-4">
                        Phone: (123) 456-7890<br />
                        Email: info@mybank.com
                    </p>
                </div>
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                    <ul className="text-sm mb-4">
                        <li className="mb-2"><a className="text-slate-600 hover:text-gray-300" href="#">Home</a></li>
                        <li className="mb-2"><a className="text-slate-600 hover:text-gray-300" href="#">About</a></li>
                        <li className="mb-2"><a className="text-slate-600 hover:text-gray-300" href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <ul className="text-sm mb-4">
                        <li className="mb-2">
                            <a className="text-slate-600 hover:text-gray-300" href="#">
                                <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                            </a>
                        </li>
                        <li className="mb-2">
                            <a className="text-slate-600 hover:text-gray-300" href="#">
                                <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17H9.5a3.5 3.5 0 110-7h5.5a3.5 3.5 0 110 7z"></path></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    );
};

export default Footer;