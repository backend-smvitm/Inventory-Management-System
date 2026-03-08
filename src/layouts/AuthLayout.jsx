import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        {children}
      </div>
    </div>
  );
}
