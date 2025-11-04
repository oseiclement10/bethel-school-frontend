import { Head, usePage } from "@inertiajs/react";
import PaystackPop from "@paystack/inline-js";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { SpinLoad } from "@/Components/SpinLoad";

const ProcessPayment = () => {
    const { reference, access_code, test } = usePage<{
        reference: string;
        access_code: string;
        test: string;
    }>().props;

    const popup = new PaystackPop();

    const [processing, setProcessing] = useState(true);

    useEffect(() => {
        popup.resumeTransaction({
            accessCode: access_code,
            
        });
    }, []);

    return (
        <>
            <Head title="Payment Processing" />
            <div className="bg-blue-200">
                <Header />
            </div>
            <section className="w-4/6 p-10 mx-auto">
                <div className="flex flex-col items-center pb-4 mb-6 text-center border-b">
                    <h3 className="text-xl font-semibold text-slate-800 ">
                        Processing Payment
                    </h3>
                    <h3 className="mb-2 text-3xl font-semibold text-slate-800 ">
                        Bethel School of Fashion
                    </h3>
                    <div className="text-slate-800">
                        {processing && (
                            <SpinLoad message="Please wait while we process payment" />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProcessPayment;
