

const Fees = () => {
    return (
        <>
            <title>
               PORTAL | Fees
            </title>
            <section className="min-h-full p-5 bg-white lg:p-10">
                <h3 className="mb-4 text-xl font-semibold text-blue-900">
                    Fees
                </h3>


                <div className="space-y-6 text-slate-800">
                    <h2 className="text-lg font-semibold text-black">Annual Tuition & Fees</h2>

                    <ul className="space-y-2 list-disc list-inside">
                        <li>
                            <span className="font-medium">Tuition:</span> Gh₵ <b>3,300</b>
                        </li>
                        <li>
                            <span className="font-medium">School Uniform:</span> Gh₵ <b>400</b>
                        </li>
                        <li>
                            <span className="font-medium">Hostel:</span> Gh₵ <b>1,500</b>
                        </li>
                    </ul>

                    <p>
                        These fees are mandatory and must be paid in full each academic year
                        throughout the duration of your training.
                    </p>
                    <p className="mb-8">
                        Payments should be made <span className="font-medium">in person</span> at
                        our administrative office.
                    </p>

                    <h2 className="text-lg font-semibold text-black">Admission Fee</h2>

                    <p>
                        The admission fee is Gh₵ <b>{0}</b>. We assume you have
                        already completed this payment as part of your application.
                    </p>

                    <p>
                        Please note that the final admission fee amount may vary slightly depending
                        on the payment platform or method used.
                    </p>
                </div>

            </section>
        </>
    );
};

export default Fees;
