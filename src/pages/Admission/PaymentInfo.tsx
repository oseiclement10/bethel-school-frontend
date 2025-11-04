import { Applicant } from "@/types/admission";
import Wrapper from "./Wrapper";
import { usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { FiSend } from "react-icons/fi";
import { usePaystackPayment } from "react-paystack";
import { useState } from "react";
import { SpinLoad } from "@/Components/SpinLoad";
import PaymentSuccessful from "./PaymentSuccessful";
import { Reference } from "@/types/payment";
import PaymentInvalid from "./PaymentInvalid";
import { APPLICATION_FEE } from "@/lib/constants";
import { PAYSTACK_DEFAULT_MAIL, PAYSTACK_PUBLIC_KEY } from "@/lib/config";

const PaymentInfo = () => {
    const { applicant } = usePage<{
        applicant: Applicant;
    }>().props;

    const [viewMode, setViewMode] = useState<{
        view: string;
        ref: Reference | null;
    }>({ view: "info", ref: null });

    const paystackConfig = {
        email: applicant?.email ?? PAYSTACK_DEFAULT_MAIL,
        publicKey: PAYSTACK_PUBLIC_KEY,
        currency: "GHS",
        metadata: {
            payment_type: "application_fee",
            custom_fields: [
                {
                    display_name: "Applicant ID",
                    variable_name: "applicant_id",
                    value: applicant?.id,
                },
                {
                    display_name: "Applicant Phone Number",
                    variable_name: "applicant_phone",
                    value: applicant?.phone,
                },
            ],
        },
        amount: getActualAmount(),
    };

    const onSuccess = (reference: Reference) => {
        if (reference.status === "success") {
            setViewMode({ view: "success", ref: reference });
        } else {
            setViewMode({ view: "invalid", ref: null });
        }
    };

    const onClose = () => {
        setViewMode({ view: "info", ref: null });
    };

    const initializePayment = usePaystackPayment(paystackConfig);

    return (
        <Wrapper step={2}>
            {viewMode.view === "info" ? (
                <div className="flex flex-col items-center justify-center p-6">
                    <p className="mb-4 font-semibold text-center text-gray-800 ">
                        PAYMENT OF APPLICATION FEE
                    </p>
                    <p className="mb-4 text-slate-700">
                        Please note that you have to pay admission fee in order
                        for you to get access to your portal, Also without
                        paying application fee, your application won't be
                        considered. Application fee is <b>Gh₵ 204.00</b>
                    </p>

                    <div className="pt-4 mb-6 text-gray-700 border-t">
                        Accepting mobile money, Bank Payment, VISA and
                        Mastercard
                    </div>
                    <PrimaryButton
                        onClick={() => {
                            setViewMode({ view: "processing", ref: null });
                            initializePayment({
                                onClose,
                                onSuccess,
                                config: paystackConfig,
                            });
                        }}
                    >
                        Pay Now (GHS 2.04) <FiSend className="ml-2" />{" "}
                    </PrimaryButton>
                </div>
            ) : null}

            {viewMode.view === "processing" ? (
                <div>
                    <SpinLoad
                        caption="Initiating payment..."
                        className=""
                        message="please wait whiles we process transaction"
                    />
                </div>
            ) : null}

            {viewMode.view === "success" ? (
                <PaymentSuccessful reference={viewMode.ref as Reference} />
            ) : null}

            {viewMode.view === "invalid" ? <PaymentInvalid /> : null}
        </Wrapper>
    );
};

const getActualAmount = () => {
    const actualAmt = 100 * APPLICATION_FEE;
    const charge = parseFloat((0.02 * actualAmt).toFixed(2));
    return actualAmt + charge;
}

export default PaymentInfo;
