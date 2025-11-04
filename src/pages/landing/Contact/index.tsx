import { Head } from "@inertiajs/react";
import Footer from "../Homepage/Footer";
import Contacts from "./Contacts";
import FirstScreen from "./FirstScreen";

const ContactUs = () => {
    return (
        <section className="relative ">
            <Head title="Contact Us" />
            <FirstScreen />
            <Contacts />
            <Footer />
        </section>
    );
};

export default ContactUs;
