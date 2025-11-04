import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import Header from "../Landing/components/Header";

const Wrapper = ({
    children,
    step,
}: PropsWithChildren & {
    step: number;
}) => {
    return (
        <section className="">
            <Head>
                <title>Admission Application</title>
                <meta
                    name="description"
                    content="Admissions at Bethel School of Fashion and Design. Kindly fill forms apply and we will get back to you ASAP."
                />
            </Head>
            <div className="bg-blue-600">
                <Header />
            </div>
            <section className="bg-white pt-[10px] mt-20 lg:mt-0">
                <section className="grid grid-cols-6 bg-white lg:h-[calc(100dvh-50px)] rounded-lg lg:overflow-hidden w-[96%] mx-auto">
                    <div className="col-span-6 px-4 pt-6 pb-4 space-y-3 lg:pb-0 lg:px-10 lg:space-y-6 lg:col-span-1 lg:pt-28 ">
                        <Step
                            label="Basic Information"
                            number={1}
                            isActive={step == 1}
                        />
                        <Step
                            label="Application Fee "
                            number={2}
                            isActive={step == 2}
                        />
                        <Step
                            label="Portal Login"
                            number={3}
                            isActive={step == 3}
                        />
                    </div>
                    <div className="col-span-6 p-3 overflow-y-scroll md:p-6 lg:p-10 lg:col-span-4 scrollbar-hide border-slate-300 ">
                        {children}
                    </div>
                </section>
            </section>
        </section>
    );
};

type StepProps = {
    label: string;
    number: number;
    isActive: boolean;
};

function Step({ label, number, isActive }: StepProps) {
    return (
        <div
            className={`flex font-semibold items-center  mb-2 space-x-2 ${
                isActive ? " text-blue-600" : "text-slate-600"
            } text-gray-800`}
        >
            <span
                className={`flex items-center justify-center w-6 h-6 rounded-full ${
                    isActive && "bg-blue-600 text-white"
                }`}
            >
                {number}
            </span>
            <span>{label}</span>
        </div>
    );
}

export default Wrapper;
