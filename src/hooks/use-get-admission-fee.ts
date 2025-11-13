import { queryKeys } from '@/lib/query-keys';
import { getHelper } from '@/services/apiService';
import { useQuery } from '@tanstack/react-query'

type RespProps = {
    amount: number;
}

const useGetAdmissionFee = () => {
    const query = useQuery({
        queryKey: [queryKeys.admissionFee],
        queryFn: () => getHelper<RespProps>("public/admission/fee")
    });

    return query;
}

export default useGetAdmissionFee