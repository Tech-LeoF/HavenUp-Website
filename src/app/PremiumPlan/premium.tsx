import React from 'react';

const PricingPlans = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-b from-[#629584] to-gray-800 bg-clip-text text-transparent transition-colors duration-300">Choose the right plan for you</h2>
        <p className="mt-2 text-gray-500">Simple, transparent, and modern. Sell your property faster with the right tools</p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div className="h-100 w-90 rounded-xl p-6 bg-white shadow-xl border border-transparent border-3 hover:border-[#629584] transform hover:scale-105 transition-all duration-300  flex flex-col justify-between">
            <div>
              <h3 className="flex justify-start items center p-2 text-lg font-semibold bg-gradient-to-b from-[#629584] to-gray-800 bg-clip-text text-transparent transition-colors">Basic plan</h3>
              <p className="flex flex-col items-start text-3xl font-bold text-blue-900 mt-2">Free</p>
              <ul className="mt-4 space-y-2 text-left text-gray-600">
                <li>-list your property on the platform</li>
                <li>-View properties with images and basic 3D</li>
                <li>-Contact buyers or sellers directly</li>
                <li>-Secure registration with verification</li>
              </ul>
            </div>
            <button className="mt-6 w-full py-2 border-2 border-[#073B3A] text-[#073B3A] hover:text-white-500  font-semibold rounded-lg hover:bg-[#073B3A] hover:text-white transition-colors duration-300">
              Get Started
            </button>
          </div>

          <div className="h-100 w-90 h-full rounded-xl p-6 bg-white shadow-xl border border-transparent border-3 hover:border-[#629584] transform hover:scale-105 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="flex justify-start items center p-2 text-lg font-semibold bg-gradient-to-b from-[#629584] to-gray-800 bg-clip-text text-transparent transition-colors">Premium plan</h3>
              <p className="flex justify-start items center text-3xl font-bold text-blue-900 mt-2 transition-colors duration-300 ">$3<span className="text-base font-normal">.99/month</span></p>
              <ul className="mt-4 space-y-2 text-left text-gray-600">
                <li>-Property in featured spots</li>
                <li>-Visitor and interest stats</li>
                <li>-Virtual Reality tours</li>
                <li>- Featured Property badge</li>
              </ul>
            </div>
            <button className="mt-6 w-full py-2 border-2 border-[#073B3A] text-[#073B3A] hover:text-white-500 font-semibold rounded-lg hover:bg-[#073B3A] hover:text-white transition-colors duration-300">
              Upgrade
            </button>
          </div>

          <div className="h-100 w-90 h-full rounded-xl p-6 bg-white shadow-xl border border-transparent border-3 hover:border-[#629584] transform hover:scale-105 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="flex justify-start items center p-2 text-lg font-semibold bg-gradient-to-b from-[#629584] to-gray-800 bg-clip-text text-transparent transition-colors">Premier plan</h3>
              <p className="flex justify-start items-start text-3xl font-bold text-blue-900 mt-2 ">$7<span className="text-base font-normal">.99/month</span></p>
              <ul className="mt-4 space-y-2 text-left text-gray-600">
                <li>-Everything in premium</li>
                <li>-Promotion on social media</li>
                <li>-Top placement in your area</li>
                <li>-Maximum guaranteed visibility</li>
              </ul>
            </div>
            <button className="mt-6 w-full py-2 border-2 border-[#073B3A] text-[#073B3A] hover:text-white-500  font-semibold rounded-lg hover:bg-[#073B3A] hover:text-white transition-colors duration-300">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
