import groupWorkImg from "@/assets/images/bethelGroupWork.jpg"
import guyStitching from "@/assets/images/bethelneatdress.jpg"
import { FadeUp } from "@/components/animations/fades";
import { SlideFromLeft, SlideFromRight } from "@/components/animations/slide";

const LearnFromExperts = () => {
    return (
        <section className="flex flex-col lg:grid lg:grid-cols-10">
            {/* Left Image */}

            <div className="lg:col-span-3 h-64 lg:h-auto">
                <SlideFromLeft delay={0.4}>
                    <img
                        src={groupWorkImg}
                        alt="bethel school of fashion group work"
                        className="w-full h-full object-cover"
                    />
                </SlideFromLeft>

            </div>

            {/* Center Text */}
            <div className="lg:col-span-4 flex flex-col text-center items-center justify-center p-6 lg:p-10">
                <FadeUp>
                    <div className="w-full">
                        <div className="h-10 bg-white w-1/2 border-10 border-b-0 border-blue-400 mx-auto"></div>

                        <h4 className="text-2xl lg:text-3xl mb-2 font-vibes tracking-wide italic text-blue-500">
                            Expert Guidance
                        </h4>

                        <h1 className="text-3xl lg:text-4xl mb-4 font-dmsans font-medium">
                            Learn From Experts within the Fashion Business
                        </h1>

                        <p className="mb-6 px-3 lg:px-0">
                            Learn from experienced industry professionals who bring real-world expertise and a passion for teaching into every class.
                        </p>

                        <button className="px-6 py-2 bg-blue-600 text-white">
                            Apply Now
                        </button>

                        <div className="h-10 bg-white w-1/2 border-10 border-t-0 border-blue-400 mx-auto mt-6 lg:mt-8"></div>
                    </div>

                </FadeUp>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-3 h-64 lg:h-auto">
                <SlideFromRight delay={0.4}>
                    <img
                        src={guyStitching}
                        alt="bethel school of fashion group work"
                        className="w-full h-full object-cover"
                    />
                </SlideFromRight>

            </div>
        </section>
    );
};


export default LearnFromExperts