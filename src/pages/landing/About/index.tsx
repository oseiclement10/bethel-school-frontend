import Footer from "../Homepage/Footer";
import ImageOverlay from "./ImageOverlay";
import AFirstScreen from "./AFirstScreen";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";
import { Head } from "@inertiajs/react";

const AboutSchool = () => {
  return (
    <>
    <Head title="About Us" />
    <section className="relative ">
      <AFirstScreen />
      <ImageOverlay />
      <OurStory />
      <OurTeam />
      <Footer />
    </section>
    </>
    
  );
};

export default AboutSchool;
