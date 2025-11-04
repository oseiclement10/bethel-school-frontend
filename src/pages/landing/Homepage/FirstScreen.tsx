import Header from "../components/Header";
import { FaStar } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import { useMediaQuery } from "react-responsive";

const FirstScreen = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });

    return (
        <section className="relative w-full overflow-hidden min-h-dvh landing-bg">
            <Header />
            <div className="absolute top-0 w-full h-full bg-black/50 "></div>

            <div
                data-aos={isTabletOrMobile ? "" : "fade-up"}
                className="bg-white/90 lg:w-[400px] w-[300px] flex z-10  lg:h-[100px] h-[60px] lg:bottom-10 bottom-12 lg:right-32 right-12 rounded-3xl absolute px-5  items-center "
            >
                <div className="flex items-center mr-4 -space-x-3 lg:-space-x-6">
                    <img
                        className="flex-shrink-0 object-cover w-8 h-8 rounded-full lg:h-14 lg:w-14"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg"
                        alt=""
                    />
                    <img
                        className="flex-shrink-0 object-cover w-8 h-8 rounded-full lg:h-14 lg:w-14"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg"
                        alt=""
                    />
                    <img
                        className="flex-shrink-0 object-cover w-8 h-8 rounded-full lg:h-14 lg:w-14"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                        alt=""
                    />
                </div>
                <div className="">
                    <h4 className="text-sm font-semibold lg:mb-1 lg:text-base text-slate-800">
                        LEARN FROM EXPERTS{" "}
                    </h4>
                    <div className="flex space-x-1 text-lg lg:space-x-3 lg:text-2xl text-amber-600/80">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>

            <article className="relative min-h-[550px] flex items-center justify-center ">
                <div
                    data-aos="fade-up"
                    className="flex flex-col w-[90%] lg:w-auto text-center lg:justify-center lg:items-center"
                >
                    <h2 className="mb-4 text-5xl font-semibold text-white font-poppins lg:text-7xl">
                        Unlock your Potential in Fashion.
                    </h2>
                    <p className="text-base text-white font-poppins lg:w-4/6 mb-7">
                        Master the art of fashion design with top-tier, hands-on
                        training that equips you with the skills and creativity
                        to stand out in the industry.{" "}
                        <span className="hidden md:inline">
                            Elevate your skills and master your craft in the
                            world of fashion
                        </span>
                    </p>

                    <Link
                        href="/apply"
                        className=" p-[5px] font-semibold  text-white bg-blue-800 shadow-md w-5/6 lg:w-[300px] mx-auto  rounded-3xl hover:bg-blue-900"
                    >
                        <span className="flex items-center justify-center py-3 text-center border-2 border-white border-dashed rounded-3xl">
                            Join Our School Now
                        </span>
                    </Link>
                </div>
            </article>

            {/* <section className="relative grid w-5/6 grid-cols-2 mx-auto mt-6 ">
                <div data-aos="fade-right">
                    <h2 className="mt-20 mb-5 text-6xl font-bold text-white tracking ">
                        Turn Your Passion into a Profession at Bethel Fashion
                        School.
                    </h2>
                    <p className="mb-8 w-[95%] text-lg text-slate-100">
                        Master the art of fashion design with top-tier, hands-on
                        training that equips you with the skills and creativity
                        to stand out in the industry.
                    </p>

                    <div className="flex items-center space-x-3">
                        <button className="flex items-center px-4 py-2 text-white bg-blue-700 border-2 border-transparent hover:bg-white hover:text-white hover:border-white">
                            Get Started <IoArrowForward />{" "}
                        </button>
                        <button className="px-4 py-2 text-white border-2 border-white hover:bg-blue-100 hover:rounded-md">
                            Learn More
                        </button>
                    </div>
                </div>
                
            </section> */}
        </section>
    );
};

export default FirstScreen;
