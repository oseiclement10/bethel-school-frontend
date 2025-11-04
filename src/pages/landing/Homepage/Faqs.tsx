import { PillCaption } from "../components/PillCaption";
import { IoIosAdd } from "react-icons/io";
import { BsDash } from "react-icons/bs";
import { useState } from "react";

const Faqs = () => {
  return (
    <section className="my-20">
      <h3 className="mb-2 text-4xl font-semibold text-center ">
        Frequently Asked Questions
      </h3>
      <PillCaption title="FAQs" />

      <section className="relative py-3 mt-10">
        <div className="absolute inset-0 w-full h-full bg-gray-50 blur-2xl" />
        <div className="mx-auto w-[90%] space-y-6 lg:w-4/6 ">
          {faqlist.slice(0,5).map((item) => (
            <FaqCard key={item.title} {...item} />
          ))}
        
        </div>
      </section>
    </section>
  );
};

const FaqCard = ({
  defaultOpened = false,
  title,
  description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum aspernatur sint assumenda a dolore error. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea officia accusamu  ducimus.",
}: {
  defaultOpened?: boolean;
  title: string;
  description?: string;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);
  return (
    <div className="relative px-6 py-8 bg-white rounded-md shadow-sm">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((old) => !old)}
      >
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <button className="p-1 bg-slate-100 hover:bg-slate-200 active:opacity-20">
          {isOpen ? <BsDash /> : <IoIosAdd />}
        </button>
      </div>
      {isOpen && (
        <p className="w-5/6 mt-2 text-base text-slate-800">{description}</p>
      )}
    </div>
  );
};
const faqlist = [
  {
    title: "What courses do you offer?",
    description:
      "We offer courses in fashion design, garment construction, pattern making, textile studies, and fashion business.",
    defaultOpened: true,
  },
  {
    title: "Do I need prior experience to enroll?",
    description:
      "No prior experience is required. Our courses are designed for beginners as well as those with some background in fashion.",
  },
  {
    title: "What is the duration of the courses?",
    description:
      "Course durations vary, ranging from short-term workshops to full-time programs lasting several months.",
  },
  {
    title: "Is hands-on training included?",
    description:
      "Yes, hands-on training is a key part of our curriculum, ensuring students gain practical experience in fashion design and construction.",
  },
  {
    title: "Are your courses certified?",
    description:
      "Yes, all of our programs are certified, and students receive a TVET-recognized certification upon completion.",
  },
  {
    title: "What is the cost of the courses?",
    description:
      "Course fees vary depending on the program. Please visit our pricing page or contact us for detailed information.",
  },
  {
    title: "Do you offer flexible schedules?",
    description:
      "Yes, we offer flexible schedules with both regular and part-time options to fit your lifestyle.",
  },
  {
    title: "Can I enroll as an international student?",
    description:
      "Yes, we welcome international students. Please contact us for more details on enrollment requirements and visa support.",
  },
  {
    title:
      "What career opportunities are available after completing the courses?",
    description:
      "Graduates can pursue careers in fashion design, pattern making, garment production, and fashion merchandising, among others.",
  },
  {
    title: "Do you offer job placement assistance?",
    description:
      "Yes, we offer job placement support through our industry connections and network of fashion professionals.",
  },
];

export default Faqs;
