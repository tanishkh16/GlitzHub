import React from 'react'
import { useContext } from 'react';
import MyContext from '../../Context/data/MyContext'

export default function Testimonials() {
    const context = useContext(MyContext);
    const { mode, toggle } = context;
  return (
    <div>
             <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/4727/4727424.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">The variety of products available on your site is incredible. I always find exactly what I'm looking for, and the user-friendly interface makes the shopping process a breeze.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Akshat</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Customer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Thank you for the fast shipping and excellent packaging. My order arrived in perfect condition, and the high-quality items I received have made me a devoted fan of your e-commerce brand.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Harsh</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Customer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">The customer service at your site is exceptional. They promptly addressed my queries, ensuring I felt confident in my purchase. I will definitely be a repeat customer!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Anurag</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
