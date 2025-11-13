import groupWorkImg from "@/assets/images/bethelGroupWork.jpg"
import guyStitching from "@/assets/images/bethelneatdress.jpg"

const LearnFromExperts = () => {
    return (
        <section className=" grid h-[500px]   lg:grid-cols-10 ">
            <div className="lg:col-span-3">
                <img src={groupWorkImg} alt="bethel school of fashion group work" className="w-full h-full object-cover" />
            </div>
            <div className=" lg:col-span-4 flex flex-col text-center items-center justify-center p-10">
                <div className="">
                    <div className="h-12  bg-white w-[55%] border-10 border-b-0 border-blue-400 mx-auto"></div>
                    <h4 className="text-3xl mb-2  font-vibes tracking-wide italic  text-blue-500 ">Expert Guidance</h4>
                    <h1 className="text-4xl mb-4 font-dmsans font-medium">Learn From Experts within the Fashion Business</h1>
                    <p className="mb-6">
                        Learn from experienced industry professionals who bring real-world expertise and a passion for teaching into every class.
                    </p>
                    <button className="px-6 py-2 bg-blue-600 text-white ">Apply Now</button>

                    <div className="h-12  bg-white w-[55%] border-10 border-t-0 border-blue-400 mx-auto"></div>

                </div>
            </div>
            <div className="lg:col-span-3">
                <img src={guyStitching} alt="bethel school of fashion group work" className="w-full h-full object-cover" />
            </div>
        </section>
    )
}

export default LearnFromExperts