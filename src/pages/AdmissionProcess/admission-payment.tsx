import PaymentInfo from './payment-info';

import { useState } from 'react';

import PaymentSuccess from './payment-success';
import { useNavigate } from 'react-router';
import { useAdmissionData } from './context';

type PaymentStatus = 'idle' | 'success' | 'failed';

const PaymentMain = () => {
  const {
    setStep,
    resetAdmission
  } = useAdmissionData();
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
  const [paymentResp, setPaymentResp] = useState<Record<string, string>>({});

  const navigate = useNavigate();

  const handleGoBack = () => {
    setStep(1);
  };



  const handleContinueToPortal = () => {
    navigate("/portal/login");
  };

  const handlePaymentSuccess = (resp?: any) => {
    setPaymentResp(resp);
    setPaymentStatus("success");
    resetAdmission();
  }



  return (
    <div className="bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">

      {paymentStatus === 'idle' && (
        <PaymentInfo
          onSuccess={handlePaymentSuccess}
          onGoBack={handleGoBack}
        />
      )}

      {paymentStatus === 'success' && (
        <PaymentSuccess
          onContinue={handleContinueToPortal}
          data={paymentResp}
        />
      )}

    </div>
  );
};

export default PaymentMain;