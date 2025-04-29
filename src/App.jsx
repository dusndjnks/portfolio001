import React from 'react'
import { useState , useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';


const App = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  
  return (
    <div>

<section 
      className="relative min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-60 text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">EMMA</h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">PORTMAN</h2>
        <p className="text-xl md:text-2xl uppercase tracking-widest mb-10">PERSONAL TRAINER</p>
        
        {/* Divider */}
        <div className="flex justify-center space-x-1">
          <div className="w-16 h-1 bg-white"></div>
          <div className="w-16 h-1 bg-white"></div>
          <div className="w-16 h-1 bg-white"></div>
        </div>
      </div>
    </section>

      <div className="bg-gray-50  text-gray-800 scroll-smooth my-20">
      <nav className="sticky top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Seaside Strength</h1>
          <ul className="flex space-x-6">
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center px-4 pt-20 md:pt-32 lg:px-28 ">
        <div className="md:w-1/2 flex flex-col items-start " data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I'm <span className="text-blue-500">Your Name</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 ">
            I'm a passionate web developer who loves creating beautiful and functional websites.
          </p>
          <a href="#projects" className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">View Projects</a>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
          <img src="https://ugc.production.linktr.ee/8b50c679-e7ad-4196-bde2-f471c6b87d20_IMG-5370.jpeg?io=true&size=avatar-v3_0" alt="Hero" className="w-72 h-72 object-cover rounded-full mx-auto shadow-lg"/>
        </div>
      </section>
    </div>

      
    <Hero/>



    </div>
  )
}

export default App