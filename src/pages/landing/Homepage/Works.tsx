import { IoFlashSharp } from "react-icons/io5";
import { HiMiniScissors } from "react-icons/hi2";
import { GiAmpleDress } from "react-icons/gi";
import graduateDress from "../../../../assets/images/fashion2.jpg";

import { CarouselItem } from "@/Components/ui/carousel";
import { CarouselSlider } from "../components/CarouselSlider";

import runway1 from "../../../../assets/images/works/runway1.jpg";
import runway2 from "../../../../assets/images/works/runway2.jpg";
import runway3 from "../../../../assets/images/works/runway3.jpg";
import runway4 from "../../../../assets/images/works/runway4.jpg";
import runway5 from "../../../../assets/images/works/runway5.jpg";
import runway6 from "../../../../assets/images/works/runway6.jpg";
import runway7 from "../../../../assets/images/works/runway7.jpg";
import runway8 from "../../../../assets/images/works/runway8.jpg";
import runway9 from "../../../../assets/images/works/runway9.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Works = () => {
    return (
        <section className="pt-20 mt-20">
            <div className="w-[90%] mx-auto mb-14 lg:w-5/6">
                <h3 className="mb-2 text-5xl font-semibold lg:w-3/6">
                    Works by Our{" "}
                    <span className="text-gradient-primary">Graduates!</span>{" "}
                    <GiAmpleDress className="inline text-3xl text-amber-500" />{" "}
                </h3>
                <p>
                    Below are some of the projects our graduates were trained
                    and guided to do during their time with us.
                </p>
            </div>
            <div className="relative pt-4 ">
                <div className="absolute top-0 w-full h-full blur-2xl " />
                <PhotoProvider>
                    <div className="grid relative w-[86%]  md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
                        <WorksCard work={works[0]} className="" />
                        <WorksCard work={works[6]} className="" />
                        <WorksCard
                            work={works[1]}
                            className="lg:row-span-2 lg:col-span-2"
                        />
                        <WorksCard work={works[5]} className="" />
                        <WorksCard work={works[2]} className="" />
                    </div>
                    <div className="hidden">
                        <WorksCard work={works[7]} className="" />
                        <WorksCard work={works[3]} className="" />
                        <WorksCard work={works[4]} className="" />
                        <WorksCard work={works[8]} className="" />
                    </div>
                </PhotoProvider>
            </div>
        </section>
    );
};

type WorkCardProps = {
    name: string;
    img: string;
};

const WorksCard = ({
    work,
    className,
}: {
    work: WorkCardProps;
    className?: string;
}) => {
    return (
        <div
            className={`relative shadow-lg overflow-hidden rounded-lg ${className} transition-all duration-200 ease-in-out cursor-pointer opacity-95 group hover:opacity-100 `}
        >
            <PhotoView src={work.img}>
                <img
                    src={work.img}
                    alt={work.name}
                    className=" mx-auto max-h-[400px]  object-cover lg:object-cover lg:max-h-full h-full transition-all duration-200 ease-in-out rounded-lg group-hover:scale-110"
                />
            </PhotoView>
        </div>
    );
};

const works = [
    {
        name: "Runway One",
        img: runway1,
    },

    {
        name: "Runway Three",
        img: runway3,
    },
    {
        name: "Runway Four",
        img: runway4,
    },
    {
        name: "Runway Five",
        img: runway5,
    },
    {
        name: "Runway Six",
        img: runway6,
    },
    {
        name: "Runway Seven",
        img: runway7,
    },
    {
        name: "Runway Eight",
        img: runway8,
    },
    {
        name: "Runway Nine",
        img: runway9,
    },
    {
        name: "Runway Two",
        img: runway2,
    },
];

export default Works;
