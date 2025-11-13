import type { AdmissionApplicationResp } from "@/@types/entities";
import type { RequestError } from "@/@types/error";
import { api } from "@/pages/AdmissionProcess";
import { parseApiError } from "@/utils/parse-api-errors";
import { useMutation } from "@tanstack/react-query"
import { notification } from "antd";
import { useEffect } from "react";

type Props = {
    onSuccessFn: (resp: AdmissionApplicationResp) => void
}

type Data = Record<string, any>;

export const useSubmitAdmissions = ({ onSuccessFn }: Props) => {

    const {
        isPending,
        mutate,
        error,
        isError, isSuccess
    } = useMutation({
        mutationFn: (data: Data) => api.addNewItemWithFile(data, data.path),
        onSuccess: onSuccessFn
    });

    useEffect(() => {
        if (isError) {
            notification["error"]({
                message: parseApiError(error as RequestError),
                duration: 8,
            });
        }
    }, [isError, isSuccess, error]);

    const submit = (data: object, admissionId: number | null = null) => {
        mutate({ ...data, path: admissionId ? `${admissionId}/update` : "apply" });
    }


    return {
        error,
        saving: isPending,
        submit
    }
}

type AdmissionPaymentInitiationResp = {
    payment: {
        id: number;
        status: string;
    },
    amount: number;

    proceed_to_pay: boolean
}

export const useInitiateAdmissionPayment = ({ onSuccessFn }: { onSuccessFn: (resp: AdmissionPaymentInitiationResp) => void }) => {

    const {
        isPending,
        mutate,
        error,
        isError, isSuccess
    } = useMutation({
        mutationFn: (data: Record<string,any>) => api.addNewItem(data, `initiate-payment/${data?.admission_id}`),
        onSuccess: (resp) => onSuccessFn(resp as unknown as AdmissionPaymentInitiationResp),
    });

    useEffect(() => {
        if (isError) {
            notification["error"]({
                message: parseApiError(error as RequestError),
                duration: 8,
            });
        }
    }, [isError, isSuccess, error]);



    return {
        error,
        saving: isPending,
        initiatePayment: (admissionId: number) => mutate({ admission_id: admissionId })
    }
}



