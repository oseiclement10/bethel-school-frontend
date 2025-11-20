import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Calendar, Users, CreditCard } from 'lucide-react';
import { queryKeys } from '@/lib/query-keys';
import { getHelper } from '@/services/apiService';
import useQueryFetch from '@/hooks/use-query-fetch';
import type { RequestError } from '@/@types/error';
import type { BillData } from '@/@types/entities';
import { SpinLoad } from '@/components/crud/loading';
import { formatMoney } from '@/utils/format-money';
import NoBillingCard from './NoBillingCard';

const BillComponent = () => {


    const { data: billData, isLoading } = useQueryFetch<BillData, RequestError>({
        queryFn: () => getHelper("portal/admission/fees"),
        title: "Admission Details",
        queryKeys: [queryKeys.fees]
    })

    const [expanded, setExpanded] = useState(true);


    const totalAmount = billData?.fees?.reduce((sum, fee) => sum + fee.amount, 0);



    return (
        <div className="container mx-auto p-6">

            {
                isLoading ? <SpinLoad caption="Loading Billing Information" message='loading billing information , please wait' /> :
                    !billData ? (
                        <NoBillingCard />
                    ) : (

                        <>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
                                <div className="p-6 border-b border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 rounded-lg">
                                                <FileText className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h1 className="text-2xl font-bold text-gray-900">
                                                    {billData.name}
                                                </h1>
                                                <p className="text-gray-600 mt-1">
                                                    {billData.stage.name} - Academic Year {billData.academic_year.start_year}/{billData.academic_year.end_year}
                                                </p>
                                            </div>
                                        </div >
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-gray-900">
                                                {formatMoney(totalAmount || 0)}
                                            </div>
                                            <div className="text-sm text-gray-500">Total Due</div>
                                        </div>
                                    </div >
                                </div >

                                {/* Bill Information */}
                                < div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm" >
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        <div>
                                            <div className="text-gray-500">Academic Year</div>
                                            <div className="font-medium text-gray-900">
                                                {billData.academic_year.start_year} - {billData.academic_year.end_year}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        <div>
                                            <div className="text-gray-500">Applies To</div>
                                            <div className="font-medium text-gray-900 capitalize">
                                                {billData.applies_to} Students
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CreditCard className="w-4 h-4 text-gray-400" />
                                        <div>
                                            <div className="text-gray-500">Status</div>
                                            <div className={`font-medium ${billData.status ? 'text-green-600' : 'text-gray-600'}`}>
                                                {billData.status ? 'Active' : 'Inactive'}
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            </div >

                            {/* Fees Breakdown */}
                            < div className="bg-white rounded-2xl shadow-sm border border-gray-200" >
                                {/* Header */}
                                < button
                                    onClick={() => setExpanded(!expanded)}
                                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <h2 className="text-lg font-semibold text-gray-900">
                                            Fee Breakdown
                                        </h2>
                                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                            {billData.fees.length} {billData.fees.length === 1 ? 'fee' : 'fees'}
                                        </span>
                                    </div>
                                    {
                                        expanded ? (
                                            <ChevronUp className="w-5 h-5 text-gray-400" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        )
                                    }
                                </button >

                                {/* Fees List */}
                                {
                                    expanded && (
                                        <div className="pb-6 px-6">
                                            <div className="space-y-3">
                                                {billData.fees.map((fee, index) => (
                                                    <div
                                                        key={fee.id}
                                                        className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-gray-50/50"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                                                <span className="text-blue-600 text-sm font-medium">
                                                                    {index + 1}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900">
                                                                    {fee.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="font-semibold text-gray-900">
                                                                {formatMoney(fee.amount)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Total Summary */}
                                            <div className="mt-6 pt-6 border-t border-gray-200">
                                                <div className="flex justify-between items-center">
                                                    <div className="text-lg font-semibold text-gray-900">
                                                        Total Amount Due
                                                    </div>
                                                    <div className="text-2xl font-bold text-gray-900">
                                                        {formatMoney(totalAmount || 0)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div >

                            {/* Payment Information */}
                            < div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6" >
                                <h3 className="font-semibold text-blue-800 mb-2">Payment Instructions</h3>
                                <ul className="text-blue-700 text-sm space-y-1">
                                    <li>• This bill includes all required fees for the academic year</li>
                                    <li>• Payment is due before the start of the academic year</li>
                                    <li>• Please ensure full payment is made to start classes</li>

                                </ul>
                            </div >
                        </>
                    )
            }
            {/* Header */}

        </div >
    );
};

export default BillComponent;