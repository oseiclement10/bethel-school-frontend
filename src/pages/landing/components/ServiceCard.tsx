import type { ServiceCardProps } from "@/types/landing";

const ServiceCard = ({ reverse, image, title }: ServiceCardProps) => {
    return (
        <div
            className={` grid grid-cols-2 gap-20 overflow-hidden lg:h-[400px]  lg:w-5/6 lg:mx-auto`}
        >
            <div className={` ${reverse ? "order-1" : "order-2"} `}>
                <h3 className="mb-3 text-3xl font-semibold text-slate-800">
                    {title}{" "}
                </h3>
                <p className="w-5/6 mb-4 text-slate-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, ratione dignissimos. Ducimus. Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit.
                </p>
                <div className="flex flex-col mb-6 space-y-2 font-semibold">
                    <span className="tracking-wide text-blue-800 ">
                        1. Place Order{" "}
                    </span>
                    <span className="tracking-wide text-blue-800 ">
                        2. Measurement taking{" "}
                    </span>
                    <span className="tracking-wide text-blue-800 ">
                        3. Sowing{" "}
                    </span>
                    <span className="tracking-wide text-blue-800 ">
                        4. Packaging{" "}
                    </span>
                    <span className="tracking-wide text-blue-800 ">
                        5. Delivery{" "}
                    </span>
                </div>
                <div className="">
                    <a
                        href="/school"
                        className="px-4 py-2 font-semibold text-white bg-blue-800 rounded-2xl hover:opacity-90"
                    >
                        Read More
                    </a>
                </div>
            </div>

            <img
                src={image}
                alt="ladies sowing"
                className={` object-cover  rounded-3xl ${
                    reverse ? "order-2" : "order-1"
                } `}
            />
        </div>
    );
};

export default ServiceCard;
