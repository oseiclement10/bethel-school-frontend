import useGetAdmissionFee from "@/hooks/use-get-admission-fee";
import { formatMoney } from "@/utils/format-money";
import { Spin } from "antd";
import { FaCheckCircle, FaClock, FaUserGraduate, FaBookOpen, FaStar } from "react-icons/fa";


const Notice = () => {
    const { data, isLoading } = useGetAdmissionFee();
    return (
        <>
            <section className="w-[90%] lg:w-4/6 mx-auto pt-16 pb-24 text-gray-800">
                <h3 className="mb-10 text-3xl font-bold text-center border-b pb-2 w-5/6 mx-auto">
                    What You Need To Know Before You Apply
                </h3>

                {/* Intro */}
                <div className="pb-12 mb-12 border-b border-gray-200">
                    <p className="mb-8 leading-relaxed text-gray-700 text-justify">
                        At <span className="font-semibold text-blue-700">Bethel School of Fashion and Design</span>, we are dedicated
                        to nurturing creativity and innovation in the world of fashion. Since 1999, we've trained over{" "}
                        <b>1,000 students</b>, empowering them to excel in the global fashion industry. Whether you're a beginner or a
                        professional, our hands-on programs help you refine your skills and express your creative potential.
                    </p>

                    <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold text-blue-700">
                        <FaBookOpen /> Courses We Offer
                    </h4>
                    <ul className="grid gap-2 mb-10 sm:grid-cols-2 md:grid-cols-3 list-disc list-inside">
                        <li>Fashion & Design</li>
                        <li>Event Decoration & Planning</li>
                        <li>Millinery & Accessories</li>
                        <li>Fashion Illustration</li>
                        <li>Modeling</li>
                        <li>Makeup Artistry</li>
                    </ul>

                    <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold text-blue-700">
                        <FaClock /> Training Schedule
                    </h4>
                    <p className="mb-3 text-gray-700">We offer flexible programs to fit your lifestyle:</p>

                    <div className="grid gap-6 mb-10 sm:grid-cols-2">
                        <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h5 className="mb-2 text-lg font-semibold text-blue-700">Regular</h5>
                            <p>7:30 AM - 6:00 PM (Monday to Friday)</p>
                        </div>
                        <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h5 className="mb-2 text-lg font-semibold text-blue-700">Part-Time</h5>
                            <p>
                                Flexible hours tailored to your schedule. Learn at your own pace without interrupting your daily
                                activities.
                            </p>
                        </div>
                    </div>

                    <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold text-blue-700">
                        <FaUserGraduate /> Admission Requirements
                    </h4>
                    <p className="mb-10 leading-relaxed text-gray-700">
                        Applicants must have basic reading and writing skills. BECE or WASSCE certificates are accepted but not
                        mandatory — what matters most is your <b>passion</b> and <b>commitment to learning</b>.
                    </p>

                    <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold text-blue-700">
                        <FaCheckCircle /> Admission Process
                    </h4>
                    <ol className="space-y-2 list-decimal list-inside mb-10">
                        <li>Click on <b>Apply</b></li>
                        <li>Complete and submit your online application form</li>
                        <li>Pay an application fee of <b> {isLoading ? <Spin size="small" /> : formatMoney(data?.amount as number) } </b> </li>
                        <li>Receive login credentials via SMS or email</li>

                        <li>Pay your tuition fees</li>
                        <li>Receive your admission letter and start your journey!</li>
                    </ol>

                    <h4 className="mb-4 text-xl font-semibold text-blue-700">Fees</h4>
                    <ul className="mb-10 list-disc list-inside">
                        <li>Application Fee: <b> {isLoading ? <Spin size="small" /> : formatMoney(data?.amount as number) } </b>  (one-time)</li>
                        <li>Tuition and other fees will be available on your portal</li>
                    </ul>

                    <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold text-blue-700">
                        <FaClock /> Training Duration
                    </h4>
                    <p className="mb-10 text-gray-700 leading-relaxed">
                        The complete program runs for <b>2 years</b>, offering both theoretical and hands-on training that equips you
                        with the skills to succeed in the fashion industry.
                    </p>

                    <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold text-blue-700">
                        <FaStar /> Benefits of Studying With Us
                    </h4>
                    <ul className="grid gap-6 mt-4 sm:grid-cols-2">
                        {[
                            {
                                title: "TVET Certification",
                                desc: "Receive a nationally recognized certificate upon completion of your program.",
                            },
                            {
                                title: "Master Fashion Design Skills",
                                desc: "Hands-on training in sketching, sewing, and garment construction.",
                            },
                            {
                                title: "Creative Development",
                                desc: "Transform your ideas into unique, innovative designs.",
                            },
                            {
                                title: "Industry-Ready Expertise",
                                desc: "Graduate with the confidence and portfolio to launch your fashion career.",
                            },
                            {
                                title: "Personalized Learning",
                                desc: "Guidance from experienced instructors who care about your growth.",
                            },
                            {
                                title: "Networking & Opportunities",
                                desc: "Connect with professionals and peers to build lasting industry relationships.",
                            },
                        ].map((item) => (
                            <li
                                key={item.title}
                                className="p-5 border rounded-xl shadow-sm hover:shadow-md transition-all bg-white/60"
                            >
                                <h5 className="mb-1 text-lg font-semibold text-blue-700">{item.title}</h5>
                                <p className="text-gray-700">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


        </>
    );
};






export default Notice;
