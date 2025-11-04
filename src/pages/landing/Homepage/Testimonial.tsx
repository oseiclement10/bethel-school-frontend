import { CarouselSlider } from "../components/CarouselSlider";
import TestimonialCard from "../components/TestimonialCard";
import { CarouselItem } from "@/Components/ui/carousel";
import { testimonialMessages } from "../components/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 w-full h-full bg-blue-800 "></div>
      <section className="relative pb-20 mt-24 pt-14 rounded-2xl ">
        <h2 className="mb-2 text-4xl font-semibold text-center text-white">
          What Our Graduates Say
        </h2>
        <h4 className="px-4 py-[2px] mx-auto mb-12 text-base font-semibold text-center text-blue-800 w-fit bg-blue-200 rounded-2xl">
          Testimonials
        </h4>

        <CarouselSlider className="max-w-[290px] lg:px-0 lg:max-w-3xl">
          {testimonialMessages.map((_, index) => (
            <CarouselItem key={index} className=" lg:basis-1/1">
              <TestimonialCard {..._} />
            </CarouselItem>
          ))}
        </CarouselSlider>
      </section>
    </section>
  );
};

export default Testimonial;
