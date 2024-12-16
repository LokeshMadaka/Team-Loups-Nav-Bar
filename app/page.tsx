"use client"
import React, { useState } from 'react'

export default function Home() {

  const [isClick , setisClick] = useState(false);

    const toggleNavbar=()=>{
        setisClick(!isClick);
    }

  return (
    <div className="flex flex-col min-h-screen">
{/* Navbar */}
<nav className='bg-blue-600 text-white sticky top-0 z-10 shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-10'>
                    <div className='felx items-center'>
                        <div className='flex-shrink-0'>
                            <a href='/' className='text-white'>Team loups</a>
                            {/* <img src=''/> */}
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <a href="#home" className='text-white hover:bg-white hover:text-black rounded-lg p-1'>Home</a>
                            <a href="#about" className='text-white hover:bg-white hover:text-black rounded-lg p-1'>About</a>
                            <a href="#services" className='text-white hover:bg-white hover:text-black rounded-lg p-1'>Services</a>
                            <a href="#contact" className='text-white hover:bg-white hover:text-black rounded-lg p-1'>Contact</a>
                        </div>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-1 round-md text-white md:text-white 
                        hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' 
                        onClick={toggleNavbar} type="button"
                        >
                            {isClick ? (
                                <svg
                                    className='h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path 
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='h-6 w-6'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path 
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M4 6h16M4 12h16m-7 6h7'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <a href="#home" className='text-white block hover:bg-white hover:text-black rounded-lg p-1'>Home</a>
                        <a href="#about" className='text-white block hover:bg-white hover:text-black rounded-lg p-1'>About</a>
                        <a href="#services" className='text-white block hover:bg-white hover:text-black rounded-lg p-1'>Services</a>
                        <a href="#contact" className='text-white block hover:bg-white hover:text-black rounded-lg p-1'>Contact</a>
                    </div>
                </div>
            )}
        </nav>
        {/* Navbar */}

      {/* Home Section */}
      <section id="home" className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center">Welcome to Our Company</h1>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600">We are a team of dedicated professionals committed to delivering high-quality services to our clients.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="max-w-sm bg-white p-6 shadow-md rounded-lg m-4">
              <img src="https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg" alt="Web Development" className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mt-4">Web Development</h3>
              <p className="text-gray-600 mt-2">We create responsive and high-performing websites tailored to your business needs.</p>
            </div>
            <div className="max-w-sm bg-blue-50 p-6 shadow-md rounded-lg m-4">
              <img src="https://th.bing.com/th/id/OIP.sIc8OBghGomtxx_EmZhK2AHaFP?rs=1&pid=ImgDetMain" alt="Digital Marketing" className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mt-4">Digital Marketing</h3>
              <p className="text-gray-600 mt-2">Our digital marketing strategies help your business reach the right audience effectively.</p>
            </div>
            <div className="max-w-sm bg-green-50 p-6 shadow-md rounded-lg m-4">
              <img src="https://s3s.templatemonster.com/marketplace-services/features-images-617bd6a0bbbb3.png" alt="Content Writing" className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mt-4">Content Writing</h3>
              <p className="text-gray-600 mt-2">We provide engaging and SEO-friendly content to boost your online presence.</p>
            </div>
          </div>
          </div>
        </div>
      </section>
{/* Services Section */}

      {/* Footer Section */}
      <footer id="contact" className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p>Email: teamloups@company.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: NazZ Center - Guntur, Andhrapradesh, India</p>
        </div>
      </footer>
    </div>
  );
}
