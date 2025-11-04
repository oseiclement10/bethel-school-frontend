import { Head, Link } from "@inertiajs/react";
import Header from "../components/Header";
import { PillCaption } from "../components/PillCaption";
import Footer from "../Homepage/Footer";
import { CourseProps, coursesData } from "./data";
import { IoBookOutline } from "react-icons/io5";

const Courses = () => {
    return (
        <section>
            <Head title="Courses" />
            <section className="relative bg-blue-600 ">
                <Header />
            </section>

            <section className="pt-32 pb-8 lg:pt-16">
                <PillCaption title="courses" />
                <div
                    data-aos="fade-up"
                    className="text-4xl font-bold text-center"
                >
                    <h3> The Perfect Courses</h3>
                    <h3>For your Fashion & Design Career</h3>
                </div>
                <p data-aos="fade-up" className="px-2 pt-6 text-center lg:px-0 text-slate-700 lg:w-4/6 lg:mx-auto">
                    Explore perfectly curated courses designed to help you excel
                    in the fashion industry. All these courses are taught by
                    experts who have insight on how to apply these in the
                    industry.
                </p>
            </section>

            <section data-aos="zoom-in" className="grid w-[92%] lg:grid-cols-3 gap-8 pb-24 mx-auto border-b lg:w-5/6">
                {coursesData.map((elem) => (
                    <CourseCard
                        imgSrc={elem.imgSrc || ""}
                        title={elem.title}
                        slug={elem.slug}
                        shortDescription={elem.shortDescription}
                        imgStyling={elem.imgStyling}
                        containerStyling={elem.containerStyling}
                        key={elem.title}
                    />
                ))}
            </section>

            <section className="pt-10 mx-auto mb-20 space-y-24 lg:space-y-12 lg:w-5/6">
                {coursesData?.map((elem) => (
                    <CourseDetail course={elem} key={elem.title} />
                ))}
            </section>

            <Footer />
        </section>
    );
};

const CourseCard = ({
    imgSrc,
    slug,
    title,
    shortDescription,
    imgStyling,
    containerStyling,
}: CourseProps) => {
    return (
        <div className="p-4 border rounded-lg">
            <div className={`${containerStyling}`}>
                <img
                    src={imgSrc}
                    alt={title}
                    className={`rounded-sm h-[200px] w-full  ${imgStyling}`}
                />
            </div>

            <div className="flex flex-col justify-between">
                <div className="py-3 overflow-hidden ">
                    <h3 className="mb-1 font-semibold">{title}</h3>
                    <p className="text-slate-700">{shortDescription}</p>
                </div>
                <div className="flex items-end justify-end ">
                    <Link
                        href={"/courses#" + slug}
                        className="bg-blue-600 flex items-center text-white text-sm px-3 py-[4px] rounded-lg w-fit hover:bg-blue-800 active:opacity-30"
                    >
                        Read More <IoBookOutline className="ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const CourseDetail = ({ course }: { course: CourseProps }) => {
    return (
        <div className="p-10 bg-blue-100" id={course.slug} data-aos="zoom-in">
            <h3 className="mb-5 text-2xl font-semibold text-center text-blue-900 lg:text-start">
                {course?.title}
            </h3>
            <div className="grid lg:grid-cols-4 ">
                <img
                    src={course?.imgSrc}
                    alt={course?.imgSrc}
                    className="max-h-[400px]"
                />
                <div className="mt-6 lg:col-span-2 lg:mt-0 lg:ml-12">
                    <p className="mb-2 text-lg font-semibold">
                        {course?.shortDescription}
                    </p>

                    <p className="text-slate-800"> {course?.longDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default Courses;
