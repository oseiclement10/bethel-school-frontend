
import Footer from "../Homepage/Footer";
import FirstScreen from "./FirstScreen";
import Notice from "./Notice";

const Application = () => {
    return (
        <>
            <title>Apply for Admission | Bethel School of Fashion and Design</title>

            <meta
                name="description"
                content="Apply for admission to Bethel School of Fashion and Design. Start your journey in fashion, design, makeup, millinery, or event planning with hands-on training in Atonsu Agogo and Abidjan Nkwanta."
            />

            <meta
                name="keywords"
                content="Bethel Fashion School Admission, Apply Bethel School of Fashion and Design, Fashion School Application Ghana, TVET Fashion Admission"
            />

            <meta name="robots" content="index, follow" />

            <section className="font-poppins">

                <title>Application</title>
                <meta
                    name="description"
                    content="Admissions at Bethel Fashion. Admission are currently open to all. Kindly apply and we will get back to you ASAP"
                />
                <FirstScreen />
                <Notice />
                <Footer />
            </section>
        </>

    );
};

export default Application;
