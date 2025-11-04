import PrimaryButton from "@/Components/PrimaryButton";
import paymentImg from "../../../assets/images/payment.png";
import { router } from "@inertiajs/react";
import { Reference } from "@/types/payment";

const PaymentSuccessful = ({ reference }: { reference: Reference }) => {
    return (
        <div className="flex flex-col items-center ">
            <p className="mb-8 font-semibold text-center text-gray-800 ">
                PAYMENT SUCCESSFUL
            </p>
            <img src={paymentImg} alt="payment success" className="w-[50px]" />
            <p className="my-3 text-center ">
                Application Fee Paid Successfully. Reference is{" "}
                <b>{reference.reference}</b>.
            </p>
            <p className="mb-3">
                Hit continue to log on to your portal to check on progress of
                your application.
            </p>
            <p className="mb-8">
                <b>NB:</b> Credentials will be sent to your registered phone
                number, once payment is confirmed.
            </p>

            <div className="flex items-end justify-end">
                <PrimaryButton
                    onClick={() => router.visit(route("portal.login"))}
                >
                    Continue
                </PrimaryButton>
            </div>
        </div>
    );
};

export default PaymentSuccessful;
