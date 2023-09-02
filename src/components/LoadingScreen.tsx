import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      <div className="ml-4 text-xl font-semibold text-gray-900">Loading...</div>
    </div>
  );
};

export default LoadingScreen;
