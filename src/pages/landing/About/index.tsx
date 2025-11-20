import Footer from "../Homepage/Footer";
import ImageOverlay from "./ImageOverlay";
import AFirstScreen from "./AFirstScreen";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";
import Schedule from "../Homepage/Schedule";



const AboutSchool = () => {
  return (
    <>
      <meta title="About Us" />
      <section className="relative font-poppins ">
        <AFirstScreen />
        <ImageOverlay />
        <OurStory />
        <Schedule />
        <OurTeam />
        <Footer />
      </section>
    </>

  );
};

export default AboutSchool;
