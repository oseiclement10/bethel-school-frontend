import { FadeUp } from "@/components/animations/fades";
import Header from "../components/Header";

const FirstScreen = () => {
  return (
    <section className="relative">
      <div className="bg-blue-600">
        <Header />
      </div>
      <section className="flex flex-col relative items-center mt-16 lg:mt-0 justify-center min-h-[300px] lg:min-h-[400px] contact-bg">
        <div className="absolute inset-0 w-full bg-black/60" />
        <FadeUp>
          <div className="relative text-center">
            <h3 className="text-5xl font-semibold text-white">Contact Us</h3>
            <p className="text-slate-100 px-2 md:px-0">
              Find our contact phone, email and adress below. Customer care is our
              priority
            </p>
          </div>
        </FadeUp>
      </section>
    </section>
  );
};

export default FirstScreen;
