import imgOne from "@/assets/images/fashion2.jpg";
import imgTwo from "@/assets/images/graduate.jpg";
import imgThree from "@/assets/images/customer-service.jpg";
import imgFour from "@/assets/images/ladiessowing.jpg";


const ImageOverlay = () => {
    return (
            <div className="flex items-center justify-center ">
                <div
                    className="absolute z-10 flex items-center scrollbar-hide overflow-x-scroll w-full  gap-2 lg:gap-4 top-[220px] lg:top-[350px] lg:w-fit"
                    data-aos="zoom-in"
                >
                    <img
                        src={imgTwo}
                        alt=""
                        className="border-4 border-white rounded-xl max-w-[170px] lg:max-w-[245px]"
                    />
                    <img
                        src={imgFour}
                        alt=""
                        className="border-4 border-white rounded-xl max-w-[200px] lg:max-w-[300px] "
                    />
                    <img
                        src={imgOne}
                        alt=""
                        className="border-4 border-white rounded-xl max-w-[200px] lg:max-w-[300px] "
                    />

                    <img
                        src={imgThree}
                        alt=""
                        className="border-4 border-white rounded-xl max-w-[170px] lg:max-w-[245px]"
                    />
                </div>
            </div>
       

    );
};

export default ImageOverlay;
