import Header from "../components/Header";


const AFirstScreen = () => {
  return (
    <section className="relative bg-blue-600 to-blue-800">
      <Header />
      <article className="flex items-center justify-center mt-16 lg:mt-0 min-h-[300px] lg:min-h-[400px]">
        <div className="flex flex-col items-center justify-center pb-16">
          <h2 data-aos="fade-up" className="mb-2 text-5xl font-semibold text-white">About us</h2>
          <p data-aos="fade-up" className="w-5/6 text-center lg:w-4/6 text-slate-200">
            Bethel Fashion School is the right place for you to get started in
            anything fashion. We provide all essentials needed to kickstart your
            fashion career.
          </p>
        </div>
      </article>
      
    </section>
  );
};

export default AFirstScreen;
