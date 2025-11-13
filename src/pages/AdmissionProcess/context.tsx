import type {  AdmissionApplicationResp } from "@/@types/entities";
import {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactNode,
} from "react";

type AdmissionStep = 1 | 2 | 3;

interface AdmissionContextType {
    step: AdmissionStep;
    admissionData: AdmissionApplicationResp | null;
    setStep: (step: AdmissionStep) => void;
    setAdmission: (id: AdmissionApplicationResp) => void;
    resetAdmission: () => void;
}

const AdmissionContext = createContext<AdmissionContextType | undefined>(
    undefined
);

export const AdmissionProvider = ({ children }: { children: ReactNode }) => {
    const [step, setStep] = useState<AdmissionStep>(1);
    const [admissionData, setAdmissionData] = useState<AdmissionApplicationResp | null>(null);

    useEffect(() => {
        const storedAdmissionData = sessionStorage.getItem("admissionData") ? JSON.parse(sessionStorage.getItem("admissionData") as string) : null;
        if (storedAdmissionData) {
            setAdmissionData(storedAdmissionData);
        }
    }, []);

    const setAdmission = (data: AdmissionApplicationResp) => {
        setAdmissionData(data);
        sessionStorage.setItem("admissionData", JSON.stringify(data));
    };

    const resetAdmission = () => {
        setAdmissionData(null);
        sessionStorage.removeItem("admissionData");
        
    };

    return (
        <AdmissionContext.Provider
            value={{
                step,
                admissionData,
                setStep,
                setAdmission,
                resetAdmission,
            }}
        >
            {children}
        </AdmissionContext.Provider>
    );
};


export const useAdmissionData = (): AdmissionContextType => {
    const context = useContext(AdmissionContext);
    if (!context) {
        throw new Error("useAdmission must be used within an AdmissionProvider");
    }
    return context;
};
