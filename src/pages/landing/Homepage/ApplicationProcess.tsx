import { IoArrowForward, IoFlashSharp } from "react-icons/io5";
import docsImg from "@/assets/images/docs.png";
import { Link } from "react-router";
import { FadeUp } from "@/components/animations/fades";
import ZoomIn from "@/components/animations/zoom";

const ApplicationProcess = () => {
    return (
        <section className="pt-16 pb-20 bg-blue-50/70 lg:pt-28 ">
            <section className="">
                <div className="w-[80%] mx-auto mb-4 lg:w-5/6">
                    <FadeUp>
                        <h3 className="mb-2 text-5xl font-semibold lg:w-3/6 ">
                            Join us and unlock your{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-tr from-blue-600 via-blue-800 to-blue-600">
                                creative potential!
                            </span>{" "}
                            <IoFlashSharp className="inline text-3xl text-amber-500" />{" "}
                            <IoFlashSharp className="inline -ml-3 text-3xl text-amber-500" />
                        </h3>

                        <p className="text-base text-slate-700">
                            Simply fill out our online application, and we'll guide
                            you through the enrollment process step by step.
                        </p>

                    </FadeUp>
                </div>
                <ZoomIn>
                    <section className="relative">
                        <div className="absolute top-[50px] w-full h-full   blur-2xl"></div>
                        <section className="relative grid gap-4 px-4 md:grid-cols-2 lg:px-8 lg:mx-auto lg:grid-cols-4 lg:w-5/6 pt-14 lg:gap-7">
                            <ApplyCard
                                header="Read Requirements"
                                description="Thoroughly read through requirements and assess yourself whether you pass to enroll"
                                number="1"
                                className="lg:mt-48"
                                img={docsImg}
                                data-aos="fade-up"
                            />
                            <ApplyCard
                                header="Online Application "
                                description="Submit  application online by filling application forms and wait for approval."
                                number="2"
                                className="lg:mt-32"
                                img={docsImg}
                                data-aos="fade-up"
                                data-aos-delay="500"
                            />
                            <ApplyCard
                                header="Pay  Bills "
                                description="Make necessary payments which will be given to you during your online application"
                                number="3"
                                img={docsImg}
                                data-aos="fade-up"
                                className="lg:mt-16"
                                data-aos-delay="800"
                            />
                            <ApplyCard
                                header="Start Learning"
                                description="Join our class in person and start your education with us"
                                number="4"
                                img={docsImg}
                                data-aos="fade-up"
                                data-aos-delay="1200"
                            />
                        </section>
                        <div className="absolute flex items-center -bottom-20 right-1/3 jusitfy-center lg:justify-end lg:items-end lg:-bottom-10 lg:right-40">
                            <Link to={"/apply"} className="flex items-center px-4 py-2 text-white bg-blue-700 border-2 border-transparent hover:bg-white hover:text-blue-700 hover:border-blue-700">
                                Read more <IoArrowForward className="ml-2" />{" "}
                            </Link>
                        </div>
                    </section>
                </ZoomIn>

            </section>
        </section>
    );
};

type ApplyCardProps = {
    header: string;
    description: string;
    img: string;
    number: string;
    className?: string;
};

const ApplyCard = ({
    header,
    description,
    img,
    number,
    className,
    ...props
}: ApplyCardProps & React.HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`relative px-5 lg:h-fit  py-8 bg-white rounded-md shadow-lg ${className}`}
            {...props}
        >
            <span className="absolute flex items-center justify-center w-6 h-6 text-sm font-semibold text-blue-800 rounded-full bg-slate-100 right-6 top-6">
                {number}
            </span>
            <img src={img} alt="" className="object-contain mb-4 w-14 h-14" />
            <h2 className="mb-1 text-xl font-semibold text-blue-800">
                {header}
            </h2>
            <p className="text-sm text-slate-800">{description}</p>
        </div>
    );
};

export default ApplicationProcess;
