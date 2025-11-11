import timeImg from "@/assets/images/timebound.png";
import { PillCaption } from "../components/PillCaption";
import { LuCalendarClock } from "react-icons/lu";


const Schedule = () => {
    return (
        <section className="w-[90%] mx-auto my-20 rounded-sm lg:w-5/6 ">
            <h3 className="mb-2 text-4xl font-semibold text-center ">
                Flexible <span className="text-gradient-primary">Schedule</span> 
                <LuCalendarClock className="inline ml-1 text-2xl text-slate-700" />
            </h3>
            <PillCaption title=" Our Schedule " />

            <div className="flex flex-col items-center px-10 pb-10 mt-20 bg-blue-800 rounded-md lg:mt-10 lg:pb-0 lg:flex-row">
                <div className="-mt-20 lg:mr-10 lg:mt-0 lg:w-1/4" data-aos="fade-up">
                    <img
                        src={timeImg}
                        alt="bethel fashion school schedule"
                        className="max-h-[400px] object-contain"
                    />
                </div>
                <div className="lg:w-3/4 ">
                    <div className="pt-6 mb-8 text-center text-white lg:pt-0">
                        <h3 className="text-2xl ">We've got you covered</h3>
                        <p className="-mt-1 text-slate-100">
                            Don't stress if you are busy half of the time, we
                            have a flexible plan
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <ScheduleCard
                            title="Regular"
                            description="Our regular program offers a flexible schedule, that starts from 7.30 AM to 6 PM MON-FRI"
                            data-aos="flip-up"
                        />
                        <ScheduleCard
                            title="Part Time"
                            description="Our Part Time program offers a flexible schedule, making it easy to balance your fashion training with work or other commitments."
                            data-aos="flip-up"
                            data-aos-delay="200"
                        />
                        <ScheduleCard
                            title="Evening"
                            description="Our Evening program offers a flexible schedule to workers, parents and students"
                            data-aos="flip-up"
                            data-aos-delay="500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ScheduleCard = ({
    title,
    description,
    ...props
}: {
    title: string;
    description: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className="px-4 pt-3 pb-6 shadow-md lg:px-6 bg-white/95 rounded-3xl h-fit"
            {...props}
        >
            <h2 className="mb-2 font-bold text-center text-amber-600">
                {title}
            </h2>
            <p className="text-sm text-center text-slate-800">{description}</p>
        </div>
    );
};

export default Schedule;
