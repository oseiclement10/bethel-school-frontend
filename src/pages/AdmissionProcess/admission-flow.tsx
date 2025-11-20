import { BadgeCent, LogIn, User } from "lucide-react";
import type { JSX } from "react";

import { useAdmissionData } from "./context";
import AdmissionApplicationForm from "./basic-info";
import AdmissionPayment from "./admission-payment";
import admissionsImg from "@/assets/images/graduating-student-female.jpg"
import { useNavigate } from "react-router";
import { useEffect,  useRef } from "react";

const AdmissionFlow = () => {
    const { step, setStep, setAdmission } = useAdmissionData();
    const navigate = useNavigate();

    const anchorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo({ top: 0 });

        const timer = setTimeout(() => {
            if (anchorRef.current) {
                anchorRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }, 150);

        return () => clearTimeout(timer);
    }, [step]);



    return (
        <section className="min-h-dvh px-3 py-5  md:px-10 md:py-10  bg-slate-50/80">
            <div id="anchor" ref={anchorRef} />
            <div className="max-w-7xl mx-auto">
                <div className="h-26 mt-20 md:mt-0 mb-8 flex flex-col items-center justify-center overflow-hidden relative rounded-2xl">
                    <img src={admissionsImg} alt="graduations" className="absolute  cover " />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="text-white text-center relative">
                        <h2 className="text-3xl ">
                            Admission Application
                        </h2>
                        <p>Fill the forms below to apply</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 border border-gray-200/80 rounded-xl px-4 py-6 bg-white  space-y-6">
                            <Step label="Basic Info" number={1} icon={<User size={16} />} step={step} />
                            <Step label="Application Fee" number={2} icon={<BadgeCent size={16} />} step={step} />
                            <Step label="Portal Login" number={3} icon={<LogIn size={16} />} step={step} />
                        </div>
                    </div>

                    <div className="lg:col-span-4 px-1.5 md:px-6 py-6  bg-white border border-gray-200/80 rounded-xl ">
                        <div className="min-h-[70vh]">
                            {step === 1 && <AdmissionApplicationForm
                                onSucess={(resp) => { setStep(2); setAdmission(resp) }}
                                onBack={() => navigate("/apply")}
                            />}
                            {step === 2 && <AdmissionPayment />}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

type StepProps = {
    label: string;
    number: number;
    step: number;
    icon: JSX.Element
}

const Step = ({ label, number, step, icon }: StepProps) => {
    const isActive = step == number;
    return (
        <div className={`pl-4 pr-2 flex rounded-md ${isActive ? " bg-blue-500 text-white  border-blue-500 " : " border-gray-200 text-slate-600 "}  items-center py-1.5 border`}>
            <span className="w-6 flex items-center">{icon}</span>
            <span className="flex-1">{label}</span>
            <span className={`w-4  h-4  text-[10px]  ${isActive ? " border-blue-500  bg-white text-blue-600 " : " border border-gray-200"} justify-center rounded-full flex items-center `}>{number}</span>

        </div>
    )
}


export default AdmissionFlow