import React, { useState } from 'react';
import { useAdmissionData } from './context';
import { config } from '@/config/data';
import { formatMoney } from '@/utils/format-money';
import { useInitiateAdmissionPayment } from '@/hooks/use-submit-admission';
import { usePaystackPayment } from "react-paystack";
import { notification, Spin } from 'antd';

interface PaymentInfoProps {
    onSuccess: () => void;
    onGoBack: () => void;

}

const PaymentInfo: React.FC<PaymentInfoProps> = ({ onSuccess, onGoBack }) => {

    const [gatewayInitialized, setGatewayInitialized] = useState(false);

    const {
        admissionData
    } = useAdmissionData();



    const paystackConfig = {
        email: admissionData?.admission?.applicant?.email ?? config.SUPPORT_MAIL,
        publicKey: config.PAYSTACK_PUBLIC_KEY ?? "",
        currency: "GHS",
        metadata: {
            payment_type: "application_fee",
            payment_id: null,
            custom_fields: [
                {
                    display_name: "Applicantion ID",
                    variable_name: "applicantion_id",
                    value: admissionData?.admission?.id,
                },
                {
                    display_name: "Applicant ID",
                    variable_name: "applicant_id",
                    value: admissionData?.admission?.applicant?.id,
                },
                {
                    display_name: "Applicant Phone Number",
                    variable_name: "applicant_phone",
                    value: `${admissionData?.admission?.applicant?.phone_code}${admissionData?.admission?.applicant?.phone_number}`,
                },
            ],
        },
        amount: getActualAmount(admissionData?.amount ?? 0),
    };

    const initiatePaystackPayment = usePaystackPayment(paystackConfig);

    const {
        initiatePayment,
        saving
    } = useInitiateAdmissionPayment({
        onSuccessFn: (resp) => {
            setGatewayInitialized(true);
            initiatePaystackPayment({
                onSuccess: onSuccess,
                onClose: () => {
                    setGatewayInitialized(false);
                    notification.error({
                        message: "Payment Cancelled",
                        placement: "top",
                        description: "Payment has been cancelled, please try again to complete your payment."
                    })
                },
                config: { ...paystackConfig, amount: getActualAmount(resp?.amount), metadata: { ...paystackConfig.metadata, payment_id: resp?.payment?.id } }
            });
        },

    });

  
    const isSaving = saving || gatewayInitialized;

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">


            {/* Content */}
            <div className="p-6 space-y-6">
                {/* Important Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                        <div className="shrink-0">
                            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-blue-800">
                                Please note that you have to pay admission fee in order for you to get access to your portal. Also without paying application fee, your application won't be considered.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fee Amount */}
                <div className="text-center py-4">
                    <p className="text-gray-600 text-sm mb-2">Application Fee</p>
                    <div className="text-4xl font-bold text-blue-600">
                        {formatMoney(admissionData?.amount ?? 0)}
                    </div>
                    <p className="text-gray-500 text-sm mt-2">Non-refundable</p>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-700">Available Payment Methods</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['Mobile Money', 'Visa/Mastercard', 'Bank Transfer'].map((method) => (
                            <div key={method} className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <span className="text-xs text-gray-600">{method}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                    <button
                        disabled={isSaving}
                        onClick={() => initiatePayment(admissionData?.admission?.id as number)}
                        className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {isSaving && <Spin size='small' />}
                        {isSaving ? "Paying ... " : "Pay"}  {formatMoney(admissionData?.amount ?? 0)}
                    </button>

                    <button
                        onClick={onGoBack}
                        className="w-full border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

const getActualAmount = (amt: number) => {
    const actualAmt = 100 * amt;
    const charge = parseFloat((0.02 * actualAmt).toFixed(2));
    return actualAmt + charge;
}


export default PaymentInfo;