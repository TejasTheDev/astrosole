import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi"



const Login = () => {

    return (
        <>
            <section className="min-h-screen  py-20 2xl:py-40 bg-gray-200 overflow-hidden">
                <div className="container px-3 mx-auto ">
                    <div className="max-w-5xl mx-auto ">
                        <div className="flex flex-wrap items-center -mx-4 ">
                            <div className="w-full lg:w-2/5 px-4 rounded border border-slate-400 shadow-md shadow-gray-500 mt-0">
                                <div className="px-6 lg:px-12 py-12 lg:py-24 bg-gray-200 shadow-lg rounded-lg">
                                    {/* Form */}
                                    <form >
                                        <h3 className="mb-10 text-2xl font-bold font-heading text-center font-serif ">
                                            {/* Header */}
                                            Login Now
                                        </h3>
                                        {/*display error */}

                                        <div className="flex items-center pl-6 mb-3  border border-slate-400 bg-white rounded-full">
                                            <span className="inline-block pr-3 border-r border-black-50 text-gray-500 ">
                                                <HiOutlineMail className="h-5 w-5" />
                                            </span>
                                            {/* Email */}
                                            <input


                                                className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                                                type="email"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        {/* Err message */}
                                        <div className="text-red-400 mb-2">

                                        </div>
                                        <div className="flex items-center pl-6 mb-6  border border-slate-400 bg-white rounded-full">
                                            <span className="inline-block pr-3 border-r border-gray-50">
                                                <svg
                                                    className="w-5 h-5"
                                                    width="20"
                                                    height="21"
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M15.6243 13.5625C15.3939 13.5625 15.2077 13.7581 15.2077 14V16.4517C15.2077 18.2573 14.0443 20.125 12.0973 20.125H5.42975C3.56848 20.125 1.87435 18.3741 1.87435 16.4517V10.5H15.6243C15.8547 10.5 16.041 10.3044 16.041 10.0625C16.041 9.82058 15.8547 9.625 15.6243 9.625H15.2077V5.95175C15.2077 2.39183 12.8635 0 9.37435 0H7.70768C4.21855 0 1.87435 2.39183 1.87435 5.95175V9.625H1.45768C1.22728 9.625 1.04102 9.82058 1.04102 10.0625V16.4517C1.04102 18.8322 3.13268 21 5.42975 21H12.0972C14.3089 21 16.0409 19.0023 16.0409 16.4517V14C16.041 13.7581 15.8547 13.5625 15.6243 13.5625ZM2.70768 5.95175C2.70768 2.86783 4.67022 0.875 7.70768 0.875H9.37435C12.4119 0.875 14.3743 2.86783 14.3743 5.95175V9.625H2.70768V5.95175Z"
                                                        fill="black"
                                                    ></path>
                                                    <path
                                                        d="M18.8815 9.3711C18.7482 9.17377 18.4878 9.12827 18.3003 9.26701L8.58655 16.4919L6.75235 14.5655C6.58942 14.3944 6.32608 14.3944 6.16322 14.5655C6.00028 14.7366 6.00028 15.0131 6.16322 15.1842L8.24655 17.3717C8.32695 17.4561 8.43362 17.4999 8.54115 17.4999C8.62488 17.4999 8.70868 17.4732 8.78282 17.4194L18.7828 9.98185C18.9703 9.84143 19.0141 9.56843 18.8815 9.3711Z"
                                                        fill="black"
                                                    ></path>
                                                </svg>
                                            </span>
                                            {/* Password */}
                                            <input

                                                className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-300 rounded-r-full focus:outline-none"
                                                type="password"
                                                placeholder=" Password"
                                            />
                                        </div>


                                        {/* Login btn */}


                                        <button
                                            type="submit"
                                            className="py-4 w-full bg-slate-900 hover:bg-black text-white font-bold rounded-full transition duration-200"
                                        >
                                            Login
                                        </button>

                                    </form>


                                    <span className="flex justify-center text-gray-700 font-bold mt-2">
                                        OR
                                    </span>





                                    <div className="text-center mt-5">
                                        <div className="flex flex-row mt-5">
                                            <div className="ml-5 text-mono text-bold text-blue-800">
                                                <Link
                                                    to="/password-reset-token"
                                                    className="font-medium text-blue-800 hover:text-indigo-500"
                                                >
                                                    Forget Password?
                                                </Link>
                                            </div>
                                            <div className="ml-6 text-mono text-bold text-blue-800">
                                                <Link
                                                    to="/register"
                                                    className="font-medium text-blue-800 hover:text-indigo-500"
                                                >
                                                    Or SignUp
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/5 px-4 mb-16 lg:mb-0 order-first lg:order-last ">

                                <div className="lg:w-1/2 px-5 ml-30 flex mb-10 mx-auto items-center justify-center h-20 w-20">

                                    {/* <img className="w-full" src="" /> */}


                                </div>
                                <div>
                                    <h2 className="mb-10 text-center text-6xl lg:text-7xl text-blue-900 font-bold font-heading ml-15 mt-0">
                                        Ready to start? Login Now.
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
