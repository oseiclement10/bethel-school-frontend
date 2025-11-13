import React from 'react';

const PaymentProcessing: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300">
      {/* Header */}
      <div className="bg-blue-600 p-6">
        <h1 className="text-2xl font-bold text-white text-center">
          Processing Payment
        </h1>
      </div>
      
      {/* Content */}
      <div className="p-8 text-center">
        {/* Animated Spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
            <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
        </div>

        {/* Processing Text */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Processing Your Payment
        </h3>
        <p className="text-gray-600 mb-6">
          Please wait while we process your payment. This may take a few moments...
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="bg-blue-600 h-2 rounded-full animate-pulse w-3/4"></div>
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <div className="flex items-center justify-center space-x-2 text-blue-700">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Secure Payment Processing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessing;