import ApplicationProcess from "./ApplicationProcess";
import Footer from "./Footer";
import "react-photo-view/dist/react-photo-view.css";
import Hero from "./Hero";
import Courses from "./Courses";
import TestimonialSection from "./TestimonialSection";
import StudentWorksSection from "./StudentWorks";
import FAQSection from "./Faqs";
import LearnFromExperts from "./LearnFromExperts";
import WhyJoinUs from "./JoinUs";

const Homepage = () => {
  return (
    <section className="font-poppins overflow-x-hidden">
      <Hero />
      <Courses />
      <WhyJoinUs />
      <StudentWorksSection />
      <LearnFromExperts />
      <ApplicationProcess />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </section>
  );
};

export default Homepage;
