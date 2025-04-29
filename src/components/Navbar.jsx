import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-10 rounded-full flex items-center justify-center ">
          <img src="https://ugc.production.linktr.ee/8b50c679-e7ad-4196-bde2-f471c6b87d20_IMG-5370.jpeg?io=true&size=avatar-v3_0" alt="" className='rounded-full'/>
        </div>
        <h1 className="text-xl font-bold">Emma Portman</h1>
      </div>

      <div className="flex items-center">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  className="w-8 h-8 text-white" 
  fill="none" 
  viewBox="0 0 24 24" 
  stroke="currentColor"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
  />
</svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;