import { Head } from "@inertiajs/react";
import Footer from "../Homepage/Footer";
import FirstScreen from "./FirstScreen";
import Notice from "./Notice";

const Application = () => {
    return (
        <>
            <Head>
                <title>Application</title>
                <meta
                    name="description"
                    content="Admissions at Bethel Fashion. Admission are currently open to all. Kindly apply and we will get back to you ASAP"
                />
            </Head>
            <section>
                <FirstScreen />
                <Notice />
            </section>
            <Footer />
        </>
    );
};

export default Application;
