export const ApplicationNotFoundCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 max-w-md mx-auto text-center">
            <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14" />
                    </svg>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
                Application Not Found
            </h2>

            <p className="text-gray-600 mt-2">
                We couldn't find your admission application in the system.
            </p>

            <p className="text-gray-600 mt-1">
                If you believe this is a mistake, please contact the admissions office.
            </p>

            <a
                href="https://wa.me/233XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-5 py-2 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition"
            >
                Contact Support
            </a>
        </div>
    );
};
