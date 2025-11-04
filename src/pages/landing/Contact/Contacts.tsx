import { IoMailOpenSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import Statistics from "../About/Statistics";

const Contacts = () => {
    return (
        <section className="py-12 mx-auto ">
            <h3 className="mb-8 text-3xl text-center">Reach Us Via </h3>

            <div className="grid gap-8 mx-auto mt-8 mb-32 text-center lg:grid-cols-3 lg:w-4/6">
                <div className="flex flex-col items-center border-r-2">
                    <h3 className="flex items-center mb-1 font-semibold text-slate-800">
                        PHONE <LuPhoneCall className="ml-1" />{" "}
                    </h3>
                    <a href="tel:0557612426" className="text-3xl">
                        0557612426
                    </a>
                </div>

                <div className="flex flex-col items-center border-r-2">
                    <h3 className="flex items-center mb-1 font-semibold text-slate-800">
                        WHATSAPP <FaWhatsapp className="ml-1" />
                    </h3>
                    <a href="https://wa.me/0557612426" className="text-3xl">
                        0557612426
                    </a>
                </div>

                <div className="flex flex-col items-center ">
                    <h3 className="flex items-center mb-1 font-semibold text-slate-800">
                        EMAIL <IoMailOpenSharp className="mr-1" />{" "}
                    </h3>
                    <h2 className="text-3xl">
                        {" "}
                        <a
                            href="mailto:bethelfashionsupport@gmail.com"
                            className="flex items-center justify-center text-base text-blue-600 underline"
                        >
                            {" "}
                            bethelfashionsupport@gmail.com
                        </a>{" "}
                    </h2>
                </div>
            </div>

            <Statistics />

            <div className="pt-8 border-t">
                <h3 className="mb-8 text-3xl text-center">Locate Us</h3>
                <LocateUs />
            </div>
        </section>
    );
};

export const LocateUs = () => {
    return (
        <div className="w-5/6 mx-auto overflow-hidden border rounded-3xl">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3962.9783017578984!2d-1.585959!3d6.649610999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzgnNTguNiJOIDHCsDM1JzA5LjUiVw!5e0!3m2!1sen!2sgh!4v1727103163930!5m2!1sen!2sgh"
                width="100%"
                height="450"
                style={{ border: "0", margin: "auto" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Contacts;
