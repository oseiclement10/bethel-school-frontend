import { IoArrowForward, IoFlashSharp } from "react-icons/io5";
import designImg from "../../../../assets/images/fashiondesign.jpg";
import decoImg from "../../../../assets/images/decor.jpg";
import makeupImg from "../../../../assets/images/makeup.png";
import millineryImg from "../../../../assets/images/millinery.png";
import modellingImg from "../../../../assets/images/modelling.png";
import sketchImg from "../../../../assets/images/fashionsketch.png";
import { PillCaption } from "../components/PillCaption";
import { Link } from "@inertiajs/react";
import { CourseProps, coursesData } from "../Courses/data";

const CoursesScreen = () => {
    return (
        <section className="mt-20">
            <h2 className="mb-2 text-4xl font-semibold text-center ">
                What We <span className="text-blue-700">Provide</span>{" "}
            </h2>
            <PillCaption title="Key Benefits" />

            <section className="grid gap-10 md:gap-12  mx-auto w-[90%] md:w-5/6 lg:grid-cols-3 md:grid-cols-2 pt-8 lg:pt-14 mb-28">
                <Card
                    title="Hands On Training"
                    count="01"
                    description={
                        "We offer hands-on, in-person training that equips students with practical skills in design, garment construction, and fabric manipulation, ensuring they gain real-world experience to excel in the fashion industry."
                    }
                    data-aos="fade-up"
                />
                <Card
                    title="Industry Expertise"
                    count="02"
                    description={
                        "Our training is led by industry experts, providing insider knowledge and real-world insights to prepare you for a successful career in fashion."
                    }
                    data-aos="fade-up"
                    data-aos-delay="200"
                />
                <Card
                    title="TVET Certification"
                    count="03"
                    description={
                        "Earn a recognized TVET certification that equips you with the technical skills and vocational expertise needed to excel in the competitive fashion industry."
                    }
                    data-aos="fade-up"
                    data-aos-delay="300"
                />
            </section>

            <section
                className="grid w-[90%] lg:w-5/6 gap-6 py-8 lg:grid-cols-4 lg:gap-12 lg:py-10 mx-auto my-10"
                data-aos="fade-up"
            >
                <div className="mb-6 lg:col-span-2 lg:mb-0">
                    <h3 className="flex items-center font-semibold text-amber-500 ">
                        {" "}
                        <IoFlashSharp className="mr-1" /> Earn Variety of Skills{" "}
                    </h3>

                    <h2 className="mb-2 text-4xl font-semibold">
                        Explore Our Courses
                    </h2>
                    <p className="w-[94%] mb-6 text-slate-700">
                        Discover our diverse range of courses designed to ignite
                        your passion for fashion and equip you with the skills
                        to thrive in a dynamic industry.
                    </p>
                    <Link
                        href={route("homepage.courses")}
                        className="flex w-fit items-center px-4 py-[6px] text-white border-2 border-transparent bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700"
                    >
                        Read More <IoArrowForward className="ml-1" />{" "}
                    </Link>
                </div>

                {coursesData?.map((elem) => (
                    <CourseCardSimple key={elem.title} course={elem} />
                ))}

                {/* <div
                    data-aos="fade-up"
                    className="p-4 border rounded-md lg:p-0 lg:border-none lg:rounded-none"
                >   
                    <img
                        src={designImg}
                        className="rounded-sm h-[200px] w-full object-cover"
                        alt=""
                    />
                    <h3 className="pt-2 text-lg font-semibold text-center text-blue-900 md:text-base">
                        Fashion & Design
                    </h3>
                </div>
                <div
                    data-aos="fade-up"
                    className="p-4 border rounded-md lg:p-0 lg:border-none lg:rounded-none"
                >
                    <img
                        src={decoImg}
                        className="rounded-sm h-[200px] w-full object-cover"
                        alt=""
                    />
                    <h3 className="pt-2 text-lg font-semibold text-center text-blue-900 md:text-base">
                        Event Decoration and Planning
                    </h3>
                </div>
                <div
                    data-aos="fade-up"
                    className="p-4 border rounded-md lg:p-0 lg:border-none lg:rounded-none"
                >
                    <div className="pb-2 bg-purple-200 rounded-md">
                        <img
                            src={millineryImg}
                            className="rounded-sm h-[190px] w-full object-cover"
                            alt=""
                        />
                    </div>

                    <h3 className="pt-2 text-lg font-semibold text-center text-blue-900 md:text-base">
                        Millinery & Accessories
                    </h3>
                </div>
                <div
                    data-aos="fade-up"
                    className="p-4 border rounded-md lg:p-0 lg:border-none lg:rounded-none"
                >
                    <div className="bg-blue-100 rounded-sm">
                        <img
                            src={sketchImg}
                            className="rounded-sm h-[200px] w-full object-contain"
                            alt=""
                        />
                    </div>

                    <h3 className="pt-2 text-lg font-semibold text-center text-blue-900 md:text-base">
                        Fashion Illustration
                    </h3>
                </div>
                <div
                    data-aos="fade-up"
                    className="p-4 border rounded-md lg:p-0 lg:border-none lg:rounded-none"
                >
                    <div className="rounded-sm bg-amber-200">
                        <img
                            src={modellingImg}
                            className="rounded-sm h-[200px] w-full object-contain"
                            alt=""
                        />
                    </div>

                    <h3 className="pt-2 text-lg font-semibold text-center text-blue-900 md:text-base">
                        Modelling
                    </h3>
                </div>
                <div
                    data-aos="fade-up"
                    className="p-4 border rounded-md lg:p-0 lg:border-none lg:rounded-none"
                >
                    <div className="rounded-sm bg-slate-200">
                        <img
                            src={makeupImg}
                            className=" h-[200px] w-full object-contain"
                            alt=""
                        />
                    </div>

                    <h3 className="pt-2 text-lg font-semibold text-center text-blue-900 md:text-base">
                        Make-ups
                    </h3>
                </div> */}
            </section>
        </section>
    );
};

const CourseCardSimple = ({ course }: { course: CourseProps }) => {
    return (
        <Link
            href={"/courses"}
            data-aos="fade-up"
            className="relative p-4 border rounded-md lg:p-0 group lg:border-none lg:rounded-none "
        >
            <div className={`rounded-sm relative ${course?.containerStyling}`}>
                <div className="absolute inset-0 flex items-center justify-center w-full h-0 overflow-hidden transition-all duration-200 ease-in-out bg-black/50 group-hover:flex group-hover:h-full">
                    <h3 className="text-white underline">Read More</h3>
                </div>

                <img
                    src={course.imgSrc}
                    className={`rounded-sm   h-[200px] w-full ${course?.imgStyling}`}
                    alt={course.title}
                />
            </div>

            <h3 className="flex items-center justify-center pt-2 text-lg font-semibold text-center text-blue-900 md:text-base">
                {course.title}
            </h3>
        </Link>
    );
};

type CardProps = {
    title: string;
    description: string;
    count: string;
    alt?: boolean;
};

const Card = ({
    title,
    description,
    count,
    alt = false,
    ...props
}: CardProps & React.HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`px-6 py-8 rounded-3xl ${
                alt ? "border-2 border-blue-800" : "bg-blue-800"
            } `}
            {...props}
        >
            <span
                className={`text-sm  ${
                    alt ? "text-amber-600" : "text-amber-300"
                } `}
            >
                {count}
            </span>
            <h3
                className={`mb-2 text-2xl font-semibold  ${
                    alt ? "text-blue-800" : "text-white"
                } `}
            >
                {title}
            </h3>

            <p
                className={`w-[90%]  ${
                    alt ? "text-blue-800" : "text-slate-100"
                } text-sm `}
            >
                {description}
            </p>
        </div>
    );
};

export default CoursesScreen;
