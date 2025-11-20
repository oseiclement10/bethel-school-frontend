import { Link } from "react-router";
import Header from "../components/Header";
import { PillCaption } from "../components/PillCaption";
import Footer from "../Homepage/Footer";
import { type CourseProps, coursesData } from "./data";
import { IoTimeOutline, IoStarOutline, IoChevronForward } from "react-icons/io5";
import { FiUsers, FiArrowRight } from "react-icons/fi";
import { FadeUp } from "@/components/animations/fades";

const Courses = () => {
    return (
        <section className="font-poppins bg-gray-50 min-h-screen">
            <title>Courses | Bethel School of Fashion and Design</title>

            <meta
                name="title"
                content="Courses | Bethel School of Fashion and Design"
            />

            <meta
                name="description"
                content="Explore professional courses at Bethel School of Fashion and Design, including Fashion & Design, Event Decor & Planning, Millinery & Accessories, Fashion Illustration, Modelling, and Makeup. Gain hands-on training and industry skills at our campuses in Atonsu Agogo and Abidjan Nkwanta."
            />

            <meta
                name="keywords"
                content="Fashion Courses, Design Courses, Event Decor Training, Event Planning School, Millinery Courses, Accessories Design Training, Fashion Illustration Classes, Modelling School, Makeup Courses, Beauty School Ghana, Bethel School of Fashion and Design, Atonsu Agogo Fashion School, Abidjan Nkwanta Fashion School"
            />

            <meta name="robots" content="index, follow" />

            
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Courses | Bethel School of Fashion and Design" />
            <meta
                property="og:description"
                content="Discover our courses: Fashion & Design, Event Decor & Planning, Millinery & Accessories, Fashion Illustration, Modelling, and Makeup. Hands-on professional training at Bethel School of Fashion and Design."
            />
            <meta property="og:url" content="https://school.bethelfashion.online/courses" />


            <section className="relative bg-blue-600 ">
                <Header />
            </section>

            {/* Hero Section */}
            <FadeUp>
                <section className="pt-32 pb-8 lg:pt-16">
                    <PillCaption title="courses" />
                    <div
                        className="text-4xl px-2 font-bold text-center"
                    >
                        <h3> The Perfect Courses</h3>
                        <h3>For your Fashion & Design Career</h3>
                    </div>
                    <p className="px-2 pt-6 text-center lg:px-0 text-slate-700 lg:w-4/6 lg:mx-auto">
                        Explore perfectly curated courses designed to help you excel
                        in the fashion industry. All these courses are taught by
                        experts who have insight on how to apply these in the
                        industry.
                    </p>
                </section>
            </FadeUp>


            {/* Courses Grid */}
            <section className="py-16 bg-white">
                <FadeUp>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {coursesData.map((course, index) => (
                                <CourseCard
                                    {...course}
                                    key={course.title}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </FadeUp>

            </section>

            {/* Course Details */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    {coursesData?.map((course, index) => (
                        <CourseDetail
                            course={course}
                            key={course.title}
                            index={index}
                        />
                    ))}
                </div>
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
    duration,
    level,
    index
}: CourseProps & { index: number }) => {
    return (
        <div

            data-aos-delay={index * 100}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
        >
            <div className={`relative overflow-hidden ${containerStyling}`}>
                <img
                    src={imgSrc}
                    alt={title}
                    className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 ${imgStyling}`}
                />
                <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {level}
                    </span>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                    <IoTimeOutline className="mr-1" />
                    <span className="mr-4">{duration}</span>
                    <FiUsers className="mr-1" />
                    <span>{level}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    {shortDescription}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link
                        to={`#`}
                        onClick={(e) => {
                            e.preventDefault();
                            const section = document.getElementById(slug);
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                            window.history.replaceState(null, "", `/courses#${slug}`);
                        }}
                        className="group/btn flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                        Read More
                        <IoChevronForward className="ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex items-center text-amber-500">
                        <IoStarOutline className="fill-current" />
                        <span className="ml-1 text-sm text-gray-600">4.8</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CourseDetail = ({ course, index }: { course: CourseProps; index: number }) => {
    return (
        <div
            id={course.slug}

            data-aos-delay={index * 100}
            className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 last:mb-0 border border-gray-200"
        >
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Image Section */}
                <div className="lg:col-span-5 relative">
                    <img
                        src={course.imgSrc}
                        alt={course.title}
                        className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20" />
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">

                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                            {course.level}
                        </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {course.title}
                    </h3>

                    <p className="text-lg text-gray-700 font-semibold mb-6 leading-relaxed">
                        {course.shortDescription}
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        {course.longDescription}
                    </p>

                    {/* Course Features */}
                    {course.features && (
                        <div className="mb-8">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {course.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-gray-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={"/apply"} className="bg-linear-to-r cursor-pointer from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center">
                            Enroll Now
                            <FiArrowRight className="ml-2" />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;