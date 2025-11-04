import lindaNyarko from "../../../../assets/images/lindanyarko.jpg";
import estherAddai from "../../../../assets/images/estheraddai.jpg";
import miriamAcheampongKyerewaa from "../../../../assets/images/miriamacheampongkyerewaa.jpg";


const TestimonialCard = ({
  img,
  message,
  name,
  year,
}:TestimonialProps) => {
  return (
    <div className="px-8 py-4 bg-white lg:py-12 lg:px-10 rounded-3xl">
      <h3 className="mb-3 font-semibold">
        {message}
      </h3>
      <div className="flex space-x-2">
        <img
          src={img}
          alt={name}
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



 export type TestimonialProps = {
    name: string;
    year: string;
    message: string;
    img: string;
};



export const testimonialMessages = [
    {
        name: "Miriam Acheampong Kyerewaa",
        year: "2024",
        message: "Attending this fashion school was a life-changing experience! The instructors are incredibly knowledgeable, and the hands-on learning helped me build confidence in my design skills. I’m now running my own clothing line, thanks to the guidance I received here.",
        img: miriamAcheampongKyerewaa,
    },
    {
        name: "Esther Addai",
        year: "2024",
        message: "The fashion illustration and design courses were exactly what I needed to turn my passion into a career. The supportive environment and expert mentorship helped me develop my unique style, and I landed an internship with a top designer!",
        img: estherAddai,
    },
    {
        name: "Linda Nyarko",
        year: "2024",
        message: "From the moment I walked in, I knew I was in the right place. The courses are practical, the teachers are encouraging, and the networking opportunities have been amazing. I feel fully equipped to succeed in the fashion industry!",
        img: lindaNyarko,
    }

];

export default TestimonialCard;
