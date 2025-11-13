import React from 'react';

interface PaymentSuccessProps {
    onContinue: () => void;
    data?: Record<string, string>
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onContinue, data }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300">
            {/* Header */}
            <div className="bg-green-600 p-6">
                <h1 className="text-2xl font-bold text-white text-center">
                    Payment Successful!
                </h1>
            </div>

            {/* Content */}
            <div className="p-8 text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                {/* Success Message */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Thank You!
                </h3>
                <p className="text-gray-600 mb-2">
                    Your payment  was successful.
                </p>
                <p className="text-gray-600 mb-6">
                    You now have access to your application portal.
                </p>

                {/* Transaction Details */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-gray-500">Transaction ID:</div>
                        <div className="text-gray-800 font-mono">{data?.reference}</div>

                        {data?.amount && (
                            <>
                                <div className="text-gray-500">Amount Paid:</div>
                                <div className="text-gray-800 font-semibold">{data?.amount}</div>
                            </>
                        )}


                        <div className="text-gray-500">Date & Time:</div>
                        <div className="text-gray-800">{new Date().toLocaleString()}</div>

                        <div className="text-gray-500">Status:</div>
                        <div className="text-green-600 font-semibold">Completed</div>
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={onContinue}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    Continue to Portal
                </button>

                {/* Additional Info */}
                <p className="text-sm text-gray-500 mt-4">
                    You will be redirected to your application portal in a moment...
                </p>
            </div>
        </div>
    );
};

export default PaymentSuccess;