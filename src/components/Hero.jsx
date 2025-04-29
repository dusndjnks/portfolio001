import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pp from "..//components/pp.png"

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-pink-300 to-blue-300 overflow-hidden">
      
      {/* Navbar */}
      <nav className=" flex justify-center items-center space-x-8 pt-8 text-sm tracking-wide uppercase text-black font-semibold z-10 relative">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#contact" className="hover:underline ">Contact</a>
      </nav>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:pt-32 relative z-10 my-14 ">
        <div className="text-center md:text-left" data-aos="fade-right">
          <h1 className="text-5xl md:text-7xl font-light leading-none text-white">EMMA</h1>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-none text-white">PORTMAN</h1>
          <p className="text-sm md:text-lg tracking-[0.2em] mt-4 text-black">PERSONAL TRAINER</p>
          <div className="w-12 h-1 bg-red-500 mt-2 mx-auto md:mx-0"></div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end" data-aos="fade-left">
          <img
            src={pp}
            alt="Trainer"
            className="w-full max-w-md object-cover object-right"
          />
        </div>
      </div>

      {/* Bottom Shape */}
      {/* <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 150" className="w-full h-24 md:h-32">
          <path fill="#ffffff" d="M0,100 L1440,0 L1480,150 L0,150 Y"></path>
        </svg>
      </div> */}
    </div>
  );
}

export default Hero;
