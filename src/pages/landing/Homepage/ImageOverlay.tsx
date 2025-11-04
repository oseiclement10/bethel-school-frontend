import imgOne from "../../../../assets/images/fashion2.jpg";
import imgTwo from "../../../../assets/images/graduate.jpg";
import imgThree from "../../../../assets/images/customer-service.jpg";
import imgFour from "../../../../assets/images/ladiessowing.jpg";

const ImageOverlay = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute z-10 flex items-center gap-3 top-[350px] w-fit">
        <img src={imgOne} alt="" className="border-4 border-white rounded-xl max-w-[300px] " />
        <img src={imgTwo} alt="" className="border-4 border-white rounded-xl max-w-[245px]" />
        <img src={imgFour} alt="" className="border-4 border-white rounded-xl max-w-[300px] " />
        <img src={imgThree} alt="" className="border-4 border-white rounded-xl max-w-[245px]" />
      </div>
    </div>
  );
};

export default ImageOverlay;
