import React from "react";

const Profile: React.FC = () => {
  const messages = [
    {
      title: "Property Inquiry - 123 Oak Street",
      content:
        "Hi Leonardo, I'm interested in the property at 123 Oak Street. Could we schedule a viewing?",
    },
    {
      title: "Apartment Inquiry - 456 Maple Avenue",
      content:
        "Hello, I have a few questions about the apartment at 456 Maple Avenue. Is it still available?",
    },
  ];

  const properties = [
    {
      title: "Charming 3-Bedroom House in Willow Creek",
      description: "3 beds • 2 baths • 1,800 sq ft",
    },
    {
      title: "Charming 3-Bedroom House in Willow Creek",
      description: "3 beds • 2 baths • 1,800 sq ft",
    },
    {
      title: "Charming 3-Bedroom House in Willow Creek",
      description: "3 beds • 2 baths • 1,800 sq ft",
    },
    {
      title: "Charming 3-Bedroom House in Willow Creek",
      description: "3 beds • 2 baths • 1,800 sq ft",
    },
  ];  
  

  return(
    <>
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="p-20">
      <h1 className="text-4xl font-bold mb-10 text-black">My profile</h1>

      <div className="flex items-center space-x-4 mb-10">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-white text-3xl">
          L
        </div>
        <div>
          <h2 className="text-lg text-black font-bold">Leonardo López</h2>
          <p className="text-gray-600 text-sm">Verified seller</p>
          <p className="text-gray-600 text-sm">Real Estate Agent</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
        <div className="text-gray-400 border rounded-lg p-6 shadow-xl text-center bg-gray-50 h-28 flex items-end justify-center">
          Total Listings
        </div>
        <div className="text-gray-400 border rounded-lg p-6 shadow-xl text-center bg-gray-50 h-28 flex items-end justify-center">
          Active Views
        </div>
        <div className="text-gray-400 border rounded-lg p-6 shadow-xl text-center bg-gray-50 h-28 flex items-end justify-center">
          Unread Messages
        </div>
        <div className="text-gray-400 border rounded-lg p-6 shadow-xl text-center bg-gray-50 h-28 flex items-end justify-center">
          Interest Score
        </div>
      </div>

      <div>
        <h2 className=" text-black text-lg font-bold mb-4">Account Status</h2>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/Imgs/verificación.png" alt="" />
            </div>
            <span className="text-black">Verified</span>
          </div>
          <span>✔️</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/Imgs/estrella.png" alt="" />
            </div>
            <span className="text-black">Top Seller Badge</span>
          </div>
          <span>✔️</span>
        </div>
      </div>
    </div>

    <div className=" bg-white text-gray-800 p-20 font-sans">
      {/* Messages Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Messages</h2>

        {messages.map((msg, index) => (
          <div key={index} className="flex items-start space-x-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-xl">
              👤
            </div>
            <div>
              <p className="font-semibold">{msg.title}</p>
              <p className="text-sm text-gray-600">{msg.content}</p>
            </div>
          </div>
        ))}
      </section>

    
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">My Properties</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="w-full h-32 bg-gray-300 rounded mb-3" />
              <h3 className="font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-600">{property.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="text-[#F5F5DC] bg-[#073B3A] font-semibold px-6 py-3 rounded cursor-pointer hover:drop-shadow-[0_0_4px_gray] transition duration-400">
          View All Properties
        </button>
      </section>
    </div>
    </>
  )
};
  
    

export default Profile;