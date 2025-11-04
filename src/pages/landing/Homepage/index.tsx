import FirstScreen from "./FirstScreen";
import Courses from "./Courses";
import ApplicationProcess from "./ApplicationProcess";
import Schedule from "./Schedule";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Faqs from "./Faqs";
import Works from "./Works";
import "react-photo-view/dist/react-photo-view.css";

const Homepage = () => {
    return (
        <section>
            <FirstScreen />
            <Courses />
            <Schedule />
            <ApplicationProcess />
            <Works />
            <Testimonial />
            <Faqs />
            <Footer />
        </section>
    );
};

export default Homepage;
