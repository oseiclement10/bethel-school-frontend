import { Head, Link, usePage } from "@inertiajs/react";
import Layout from "@/Layouts/Portal";
import { useState } from "react";

const Admission = () => {
    const { status } = usePage<{ status: string }>().props;

    return (
        <Layout>
            <Head title="Admission Status" />
            <section className="min-h-full p-5 bg-white lg:p-10 rounded-tr-xl rounded-tl-xl">
                <h3 className="mb-4 text-xl font-semibold text-blue-900">
                    Application Status
                </h3>

                {status === "pending" && <Pending />}
                {status === "approved" && <Approved />}
                {status === "rejected" && <Rejected />}
            </section>
        </Layout>
    );
};

const Pending = () => {
    return (
        <div className="lg:w-5/6">
            <h4 className="flex items-center mb-1 font-semibold text-slate-800">
                Application Under Review <Status type="pending" />
            </h4>
            <p className="text-justify text-slate-800">
                Your application is currently under review. Our admissions team
                is carefully assessing all submissions to ensure a fair and
                thorough process. We appreciate your patience and will notify
                you once a decision has been made. Please keep an eye on your
                sms or visit here for further updates.
            </p>
        </div>
    );
};

const Approved = () => {
    const handleDownload = () => {
        const url = route("portal.acceptance-letter.download");
        window.location.href = url;
    };
    return (
        <div className="lg:w-5/6">
            <h4 className="flex items-center mb-1 font-semibold text-slate-800">
                Application Accepted <Status type="approved" />
            </h4>
            <p className="mb-4 text-slate-800">
                Congratulations! We are pleased to inform you that your
                application to Bethel Fashion School has been accepted. We look
                forward to welcoming you as a student and helping you grow your
                fashion skills. Further details regarding the next steps,
                including orientation and class schedules, will be shared with
                you shortly. Get ready to embark on an exciting learning journey
                with us!
            </p>
            <h3 className="mb-2 font-semibold">Next Steps</h3>
            <ul className="pl-4 list-disc">
                <li>
                    Download Acceptance Letter and Submit to our office{" "}
                    <span className="text-blue-600 underline">Location</span>{" "}
                </li>
                <li>Pay Fees and Enroll</li>
                <li>Start classes </li>
            </ul>
            <div className="flex items-center mt-3 space-x-3">
                <button
                    onClick={() => handleDownload()}
                    title="Download Acceptance Letter"
                    className="pr-2 text-sm text-blue-600 hover:text-blue-800 active:opacit-30 underline py-[3px] rounded-md"
                >
                    Download Acceptance Letter
                </button>
                <Link
                    href="/portal/fees"
                    className="px-2 text-sm text-blue-600 underline py-[3px] rounded-md"
                >
                    View Fees
                </Link>
            </div>
        </div>
    );
};

const Rejected = () => {
    return (
        <div className="lg:w-5/6">
            <h4 className="flex items-center mb-1 font-semibold text-slate-800">
                Application Rejected <Status type="rejected" />
            </h4>
            <p className="text-justify text-slate-800">
                Thank you for your interest in Bethel Fashion School. After
                careful consideration, we regret to inform you that your
                application has not been successful at this time. We encourage
                you to explore other opportunities or apply again in the future
                if your circumstances change. We wish you all the best in your
                future endeavors.
            </p>
        </div>
    );
};

const Status = ({ type = "pending" }) => {
    const color =
        type === "approved"
            ? "bg-emerald-500"
            : type === "rejected"
            ? " bg-red-500"
            : "bg-amber-500";
    return (
        <span className={`flex w-2 h-2 ml-1 mt-[1px] ${color} rounded-full`} />
    );
};

export default Admission;
