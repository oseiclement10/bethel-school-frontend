import Footer from "../Homepage/Footer";
import ImageOverlay from "./ImageOverlay";
import AFirstScreen from "./AFirstScreen";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";
import Schedule from "../Homepage/Schedule";



const AboutSchool = () => {
  return (
    <>
      <title>About Us | Bethel School of Fashion and Design</title>

      <meta
        name="description"
        content="Learn about Bethel School of Fashion and Design, founded in 1999 in Atonsu-Agogo. We provide hands-on training in fashion, design, makeup, millinery, and event planning, shaping skilled professionals for Ghana’s creative industry."
      />

      <meta
        name="keywords"
        content="About Bethel School of Fashion and Design, Fashion School Ghana, Atonsu Agogo Fashion School, Fashion Training Ghana, TVET Fashion School"
      />
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
