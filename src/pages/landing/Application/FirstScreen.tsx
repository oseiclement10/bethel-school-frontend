import { FaHome } from "react-icons/fa";
import Header from "../components/Header";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "@inertiajs/react";

const FirstScreen = () => {
    return (
        <section className="">
            <div className="bg-blue-600">
                <Header />
            </div>
            <section  className="flex flex-col relative items-center justify-center mt-16 lg:mt-0 min-h-[350px] apply-bg">
                <div className="absolute inset-0 w-full bg-black/50" />
                <div data-aos="zoom-in" className="relative flex flex-col items-center text-center">
                    <h3 className="text-5xl font-semibold text-white">
                        Applications
                    </h3>
                    <p className="mb-6 text-slate-100">
                        Begin Your Fashion Journey with Bethel School of Fashion
                        and Design
                    </p>
                    <div className="flex items-center ">
                        <Link
                            href={route("admission.new")}
                            className="flex items-center px-4 py-[6px] mr-4 text-white rounded-sm bg-blue-600 hover:bg-blue-800 active:opacity-10"
                        >
                            Apply Now <IoArrowForwardOutline className="ml-1" />{" "}
                        </Link>
                        <Link
                            href="/portal/login"
                            className="flex items-center px-4 py-[6px] bg-white  rounded-sm text-blue-600 hover:bg-blue-100 "
                        >
                            Log in to portal <FaHome className="ml-1" />{" "}
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default FirstScreen;
