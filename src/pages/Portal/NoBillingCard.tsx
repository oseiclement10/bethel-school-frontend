
import { FileText, PlusCircle } from 'lucide-react';

const NoBillingCard = () => {
    return (
        <div className="max-w-md mx-auto mt-8 p-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                        <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No Billing Information
                </h3>
                
                <p className="text-gray-600 mb-6">
                    No billing records found for the current academic period.
                </p>
                
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        <PlusCircle className="w-4 h-4" />
                        Contact Administration
                    </button>
                    
                    <button className="w-full px-4 py-2 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium">
                        Refresh Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoBillingCard;