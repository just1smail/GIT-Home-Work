import React from 'react';

const Footer = () => {
  return (
    <footer className="w-[100%] pt-10">
      <div className="w-[80%] m-auto bg-[#6C5FBC] bg-[url('src/components/narased3/Group34844.svg')] text-white rounded-3xl p-10 flex justify-between items-center box-border">
        <div>
          <h2 className="text-4xl font-bold mb-4">GET 50%</h2>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="rounded-l-lg px-4 py-2 w-64 text-gray-700"
            />
            <button className="bg-white text-purple-600 rounded-r-lg px-4 py-2 font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <img src="src/components/narased3/Food Image (3).svg" alt="Food" className="w-45 h-15 rounded-full" />
      </div>


      <div className="bg-gray-100 text-gray-600 py-10 mt-[100px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <img src="src/components/narased3/Logo.svg" alt="Eatly" className="w-40 h-10" />
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-purple-600">Blog</a>
              <a href="#" className="hover:text-purple-600">Pricing</a>
              <a href="#" className="hover:text-purple-600">About Us</a>
              <a href="#" className="hover:text-purple-600">Contact</a>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>© 2023 EATLY All Rights Reserved.</span>
            <div className="flex space-x-4">
              <img src="src/components/narased3/Socials.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
