import paymentFailedImg from "../../../assets/images/paymentfailed.png";

const PaymentInvalid = () => {
    return (
        <div className="flex flex-col items-center">
            <p className="mb-8 font-semibold text-center text-gray-800 ">
                PAYMENT UNSUCCESSFUL
            </p>
            <img
                src={paymentFailedImg}
                alt="payment invalid"
                className="w-[50px]"
            />
            <p className="w-1/2 mt-3 mb-2 text-center">
                We could not verify transaction. at this time. Your transaction
                could not be processed.
            </p>
            <p className="mb-8">
                <b>NB:</b> If you have completed the transaction, an sms will be
                sent to your registered phone number.
            </p>
        </div>
    );
};

export default PaymentInvalid;
