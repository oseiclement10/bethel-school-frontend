import happyGuy from "../../../../assets/images/benkorClean.png";

const Statistics = () => {
    return (
        <section className="pb-10 bg-blue-800 rounded-md lg:pb-0">
            <section className="flex flex-col  lg:items-center w-[90%] lg:px-10 mx-auto mt-10 lg:w-5/6 lg:flex-row ">
                <div
                    className="lg:w-1/4 mr-10 w-[90%] -mt-20 lg:mt-0"
                    data-aos="fade-up"
                >
                    <img
                        src={happyGuy}
                        alt="bethel fashion school schedule"
                        className="max-h-[400px]  mx-auto lg:mx-0 lg:max-h-[500px] object-contain"
                    />
                </div>
                <div className="w-full lg:w-3/4 ">
                    <div className="mt-6 mb-8 text-center text-white lg:mt-0">
                        <h3 className="text-3xl ">
                            You have come to the Right Place
                        </h3>
                        <p className="-mt-1 text-slate-100">
                            The best place for quality training and guidance
                            when it comes to fashion & decor.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 place-items-center lg:mx-auto lg:w-fit">
                        <StatCard
                            description="Admissions yearly"
                            title="50 +"
                            aos="fade-left"
                        />
                        <StatCard description="Success Rate" title="95%" aos="fade-right" />
                        <div className="col-span-2 lg:col-span-1">
                            <StatCard
                                description="Students since 1999"
                                title="1000+"
                                aos="flip-up"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

type StatCardProps = {
    title: string;
    description: string;
    aos?:string
};
const StatCard = ({ title, description, aos }: StatCardProps) => {
    return (
        <div className="px-6 pt-3 pb-6 bg-white shadow-md rounded-xl h-fit" data-aos={aos}>
            <h2 className="text-2xl font-bold text-center text-amber-600">
                {title}
            </h2>
            <p className="text-base font-semibold text-center text-slate-800">
                {description}
            </p>
        </div>
    );
};

export default Statistics;
