import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
      
      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-cyan-400">
        404
      </h1>

      {/*  Paragraph */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-md">
        Oops! The page you're looking for doesn't exist.
      </p>

     
      <Link 
        to="/" 
        className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-cyan-500 text-sm sm:text-base md:text-lg text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Page404;
