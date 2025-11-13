import headerImg from "@/assets/images/class-pcs.png";
import admissionIcon from "@/assets/images/admission.png";
import billsIcon from "@/assets/images/bills.png";
import profileIcon from "@/assets/images/profile.png";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { useAuthUser } from "@/contexts/AuthContext";


const Dashboard = () => {

    const auth = useAuthUser();


    return (
        <>
            <title>
                Dashboard
            </title>
            <section className="font-poppins lg:w-[94%] p-3 lg:p-10">
                <header className="overflow-hidden bg-blue-800 rounded-lg mb-14 md:h-48">
                    <div className="grid md:grid-cols-2 w-[85%] mx-auto py-6 lg:py-2 lg:w-[93%] place-items-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-semibold ">
                                Welcome {auth?.full_name} ,
                            </h2>
                            <div className="my-4" />
                            <p className="text-slate-100">
                                Welcome to the Bethel Fashion School Dashboard!
                                Stay updated with admission progress and fees.
                                We're excited to support you on your fashion
                                journey and let's make it creative and fun!
                            </p>
                        </div>
                        <div className="h-full ">
                            <img
                                src={headerImg}
                                alt="peaduserve dashboard"
                                className="max-h-40"
                            />
                        </div>
                    </div>
                </header>

                <div className="grid gap-4 md:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
                    <DashCard
                        href="/portal/admission"
                        label="Admission Status"
                        img={admissionIcon}
                    />
                    <DashCard
                        href="/portal/fees"
                        label="Fees"
                        img={billsIcon}
                    />
                    <DashCard
                        href="/portal/profile"
                        label="Profile"
                        img={profileIcon}
                    />
                </div>
            </section>
        </>
    );
};

const DashCard = ({ href, label, img }: DashCardProps) => {
    return (
        <Link
            to={href}
            className="flex items-center justify-between bg-white border border-slate-300 p-7 rounded-xl hover:border-blue-300"
        >
            <h3 className="flex items-center font-semibold text-blue-800">
                {label}
                <FaArrowRight className="ml-2" />{" "}
            </h3>
            <img src={img} className="object-contain w-10 h-10" alt="" />
        </Link>
    );
};

type DashCardProps = {
    label: string;
    href: string;
    img: string;
};

export default Dashboard;
