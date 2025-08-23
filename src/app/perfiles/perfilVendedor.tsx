import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="p-20">
      <h1 className="text-8xl font-bold mb-10">My profile</h1>

      <div className="flex items-center space-x-4 mb-10">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-white text-3xl">
          L
        </div>
        <div>
          <h2 className="text-lg font-bold">Leonardo López</h2>
          <p className="text-gray-600 text-sm">Verified seller</p>
          <p className="text-gray-600 text-sm">Real Estate Agent</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
        <div className="border rounded-lg p-6 shadow-xl text-center bg-gray-50 h-28 flex items-end justify-center">
          Total Listings
        </div>
        <div className="border rounded-lg p-6 shadow-xl text-center bg-gray-50 h-28 flex items-end justify-center">
          Active Views
        </div>
        <div className="border rounded-lg p-6 shadow-xl text-center bg-gray-50 h-28 flex items-end justify-center">
          Unread Messages
        </div>
        <div className="border rounded-lg p-6 shadow-xl text-center bg-gray-50 h-28 flex items-end justify-center">
          Interest Score
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Account Status</h2>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="verificación.png" alt="" />
            </div>
            <span>Verified</span>
          </div>
          <span>✔️</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="estrella.png" alt="" />
            </div>
            <span>Top Seller Badge</span>
          </div>
          <span>✔️</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;