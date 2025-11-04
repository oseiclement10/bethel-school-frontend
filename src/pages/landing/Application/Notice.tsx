import { CarouselItem } from "@/Components/ui/carousel";
import { CarouselSlider } from "../components/CarouselSlider";
import { PillCaption } from "../components/PillCaption";
import { LocateUs } from "../Contact/Contacts";
import {
    testimonialMessages,
    TestimonialProps,
} from "../components/TestimonialCard";
import { APPLICATION_FEE } from "@/lib/constants";

const Notice = () => {
    return (
        <>
            <section className="pt-10 w-[90%] pb-20 mx-auto text-base lg:w-4/6 ">
                <h3 className="mb-4 text-2xl font-semibold text-center capitalize ">
                    What You Need To Know before you apply.
                </h3>

                <section className="pb-12 mb-12 border-b">
                    <p className="mb-8 ">
                        At Bethel School of Fashion and Design School, we are
                        dedicated to nurturing creativity and innovation in the
                        world of fashion. Established in 1999, we have proudly
                        trained over 1,000 students, empowering them with the
                        skills and expertise needed to excel in the fashion
                        industry. Our diverse range of courses covers every
                        aspect of fashion and design, providing both beginners
                        and professionals with the opportunity to grow and
                        refine their talents. Join us and take the first step
                        towards a successful career in fashion!
                    </p>

                    <h4 className="mb-4 text-lg font-semibold">
                        We offer the following courses
                    </h4>

                    <ul className="mb-10 ml-4 space-y-3 list-disc">
                        <li>Fashion & Design</li>
                        <li>Event Decoration and Planning</li>
                        <li>Millinery and Accessories</li>
                        <li>Fashion Illustration</li>
                        <li>Modeling</li>
                        <li>Make ups</li>
                    </ul>

                    <h4 className="mb-4 text-lg font-semibold">
                        Training Schedule
                    </h4>

                    <p className="mb-3">
                        We offer a flexible schedule for training.
                    </p>

                    <ul className="mb-10 ml-4 list-disc">
                        <li>
                            <b>Regular</b>
                        </li>
                        <p className="mb-2">
                            Our regular program starts from 7:30 AM to 6 PM
                            MONDAYS - FRIDAYS
                        </p>
                        <li>
                            <b>Part Time</b>{" "}
                        </li>
                        <p>
                            Our part-time schedule is flexible and tailored to
                            fit your activities. We work with you to find the
                            most convenient time, ensuring your learning fits
                            seamlessly into your routine.
                        </p>
                    </ul>

                    <h4 className="mb-4 text-lg font-semibold">
                        Admission Requirements
                    </h4>

                    <p className="mb-10">
                        Our admission requirements include basic reading and
                        writing skills. While BECE or WASSCE certificates are
                        accepted, they are not mandatory. What truly matters to
                        us is your passion and commitment to learning.
                    </p>

                    <h4 className="mb-4 text-lg font-semibold">
                        Admission Process
                    </h4>

                    <p>Our Admission process is quite simple ;</p>
                    <ul className="mb-10 ml-4 list-disc">
                        <li>Click on Apply here</li>
                        <li>
                            Pay Application fee of GH₵ {APPLICATION_FEE} cedis to get
                            application credentials
                        </li>
                        <li>
                            Log in to your portal using credentials you will
                            receive after paying application fee{" "}
                        </li>
                        <li>Fill Application forms and submit</li>
                        <li>Pay Fees</li>
                        <li>Get Admitted and start learning</li>
                    </ul>

                    <h4 className="mb-4 text-lg font-semibold">Fees</h4>

                    <ul className="mb-10">
                        <li>One Time Application Fee of GH ₵{APPLICATION_FEE} . 00 </li>
                        <li>Yearly Fees Payment of GH₵ 3,300 . 00 </li>
                        <li></li>
                    </ul>

                    <h4 className="mb-4 text-lg font-semibold">
                        Training Duration
                    </h4>

                    <p className="mb-10">
                        Our comprehensive training program spans a total of 2
                        years, providing you with the skills, knowledge, and
                        hands-on experience needed to excel in the fashion
                        industry. With dedicated instruction and practical
                        learning, you'll be fully equipped to pursue your
                        passion and launch a successful career.
                    </p>

                    <h4 className="mb-4 text-lg font-semibold">Benefits</h4>
                    <p className="mb-4">
                        Here are some of the benefits you will gain after
                        successful completion of our training
                    </p>
                    <ul className="ml-4 space-y-3">
                        <li>
                            <b>TVET Certification</b>
                            <p>
                                At the end of your education you will receive a
                                TVET certification, which is recognized by all
                                instutions accross the country.
                            </p>
                        </li>

                        <li>
                            <b>Master Essential Fashion Design Skills</b>
                            <p>
                                Gain hands-on experience in sketching, sewing,
                                pattern-making, and garment construction.
                            </p>
                        </li>
                        <li>
                            <b>Creative Development</b>
                            <p>
                                Learn to harness your creativity and transform
                                ideas into innovative designs.
                            </p>
                        </li>
                        <li>
                            <b>Industry-Ready Expertise</b>
                            <p>
                                Be fully equipped to enter the fashion industry
                                with practical skills and a professional
                                portfolio.
                            </p>
                        </li>
                        <li>
                            <b>Personalized Learning</b>
                            <p>
                                Receive tailored guidance from experienced
                                instructors who are passionate about helping you
                                succeed.
                            </p>
                        </li>
                        <li>
                            <b>Networking Opportunities</b>
                            <p>
                                Connect with fellow aspiring designers, industry
                                professionals, and potential clients through
                                workshops and events.
                            </p>
                        </li>
                        <li>
                            <b>Job and Business Opportunities</b>
                            <p>
                                Open doors to exciting careers in fashion or
                                start your own fashion label, backed by the
                                knowledge gained from our courses.
                            </p>
                        </li>
                        <li>
                            <b>Confidence and Independence</b>
                            <p>
                                Build the confidence to express your creativity
                                and launch your fashion career with independence
                                and expertise.
                            </p>
                        </li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="mb-2 text-3xl font-semibold text-center lg:text-4xl ">
                        From Our Graduates
                    </h2>
                    <PillCaption title="Testimonials" className="mb-8" />

                    <CarouselSlider className="max-w-[290px] mx-auto lg:max-w-4xl">
                        {testimonialMessages.map((testimonial, index) => (
                            <CarouselItem key={index} className=" lg:basis-1/2">
                                <GraduateTestimonialCard {...testimonial} />
                            </CarouselItem>
                        ))}
                    </CarouselSlider>
                </section>
            </section>

            <h3 className="mb-6 text-4xl font-semibold text-center">
                Locate Us{" "}
            </h3>
            <div className="mb-20">
                <LocateUs />
            </div>
        </>
    );
};

const GraduateTestimonialCard = ({
    name,
    message,
    year,
    img,
}: TestimonialProps) => {
    return (
        <div className="px-4 py-5 bg-blue-200 lg:py-12 lg:px-10 rounded-3xl">
            <h3 className="mb-3 font-semibold">{message}</h3>

            <div className="flex space-x-2">
                <img
                    src={img}
                    alt="profile"
                    className="w-12 h-12 rounded-full"
                />
                <div className="">
                    <h3 className="text-base font-semibold ">{name}</h3>
                    <p className="text-sm text-slate-700">Graduate {year}</p>
                </div>
            </div>
        </div>
    );
};

export default Notice;
