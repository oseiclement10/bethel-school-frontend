import { Head, useForm, usePage } from "@inertiajs/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TextInput from "@/Components/TextInput";
import FieldGroup from "@/Components/Form/FieldGroup";
import FormFooter from "@/Components/Form/FormFooter";
import { useEffect } from "react";
import { APPLICATION_FEE } from "@/lib/constants";

const InitialApplication = () => {
    return (
        <>
            <Head title="Application Fee" />
            <div className="bg-blue-200">
                <Header />
            </div>
            <section className="w-[90%] p-10 mx-auto lg:w-4/6">
                <div className="flex flex-col items-center pb-4 mb-6 text-center border-b">
                    <h3 className="text-xl font-semibold text-slate-800 ">
                        Application Form
                    </h3>
                    <h3 className="mb-2 text-3xl font-semibold text-slate-800 ">
                        Bethel School of Fashion
                    </h3>
                    <div className="text-slate-800">
                        <p className="">
                            Fill in the application form to apply.{" "}
                        </p>
                        <p>
                            Please note that application fee is mandatory and
                            its <b>Gh₵ {APPLICATION_FEE} </b> and is non-refundable
                        </p>
                    </div>
                </div>
               
            </section>

            <Footer />
        </>
    );
};


export default InitialApplication;
