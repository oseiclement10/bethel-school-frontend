import React from 'react';

interface PaymentFailedProps {
  onRetry: () => void;
  onGoBack: () => void;
}

const PaymentFailed: React.FC<PaymentFailedProps> = ({ onRetry, onGoBack }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300">
      {/* Header */}
      <div className="bg-red-600 p-6">
        <h1 className="text-2xl font-bold text-white text-center">
          Payment Failed
        </h1>
      </div>
      
      {/* Content */}
      <div className="p-8 text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Payment Unsuccessful
        </h3>
        <p className="text-gray-600 mb-2">
          We encountered an issue while processing your payment.
        </p>
        <p className="text-gray-600 mb-6">
          Please try again or use a different payment method.
        </p>

        {/* Possible Reasons */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
          <h4 className="font-semibold text-red-800 mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Possible Reasons:
          </h4>
          <ul className="text-sm text-red-700 list-disc list-inside space-y-1">
            <li>Insufficient funds</li>
            <li>Network connectivity issues</li>
            <li>Invalid payment details</li>
            <li>Bank server timeout</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Try Again
          </button>
          
          <button
            onClick={onGoBack}
            className="w-full border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Go Back
          </button>
        </div>

        {/* Support Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            Need help? Contact support at{' '}
            <a href="mailto:support@university.edu" className="font-semibold hover:underline">
              support@university.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;