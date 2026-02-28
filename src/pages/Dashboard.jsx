import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">MyApp</h2>

        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-400 cursor-pointer">Profile</li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Logout
          </button>
        </nav>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">
            Welcome Back 👋
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Total Users</h3>
              <p className="text-3xl font-bold mt-2">120</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Products</h3>
              <p className="text-3xl font-bold mt-2">85</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Orders</h3>
              <p className="text-3xl font-bold mt-2">75</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-gray-500">Revenue</h3>
              <p className="text-3xl font-bold mt-2">₹45,000</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;