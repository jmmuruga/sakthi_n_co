import Header from "../../components/header/Header";
import image from "../../assets/images/img3.jpg";
import paintingImage from "../../assets/images/img4.jpg";
import electricalImage from "../../assets/images/img5.jpg";
import Footer from "../../components/footer/Footer";


function Services() {
  return (
    <>
      <Header />
      <div className="">
        <div className="flex flex-col justify-center">
          <div className="text-center lg:text-5xl text-2xl">Services We Provide </div>
          <p className="pt-5 text-gray-700 text-lg w-full px-6  lg:w-[780px] flex self-center ">
            sakthi&co we are dedicated to meeting a wide range of your needs
            with our diverse selection of services. we're not just about
            services; we're about solutions that transform.
          </p>
          <div className="flex flex-col gap-20">
          <div className="w-[80%] self-center pt-10 ">
            <div className="flex gap-10 flex-col lg:flex-row">
              <div>
                <img src={image} alt="plumbing" className="lg:w-[500px] h-[400px]" />
              </div>
              <div className="lg:w-[55%] flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-blue-700">
                  Expert Plumbing Services
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our skilled plumbers handle everything from leaky taps to
                  complete bathroom installations. We use top-quality materials
                  and modern tools to ensure long-lasting solutions for your
                  home or office plumbing needs.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether it’s fixing a burst pipe, unclogging drains, or
                  setting up a new water line, our team works with precision,
                  safety, and care — ensuring your plumbing system runs smoothly
                  without interruptions.
                </p>
                <ul className="list-disc pl-6 text-gray-700 text-lg">
                  <li>Leak detection and pipe repair</li>
                  <li>Bathroom and kitchen fittings</li>
                  <li>Water heater installation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[80%] self-center ">
            <div className="flex gap-10 flex-col lg:flex-row">
              <div className="lg:w-[55%] flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-blue-700">
                  Electrical Services
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  From wiring and lighting to complete electrical maintenance,
                  our certified electricians deliver safe, efficient, and
                  reliable solutions for homes and offices.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether it’s fixing a burst pipe, unclogging drains, or
                  setting up a new water line, our team works with precision,
                  safety, and care — ensuring your plumbing system runs smoothly
                  without interruptions.
                </p>
                <ul className="list-disc pl-6 text-gray-700 text-lg">
                  <li>Wiring and circuit setup</li>
                  <li>Lighting installation and repair</li>
                  <li>Electrical safety inspection</li>
                </ul>
              </div>
              <div>
                <img src={electricalImage} alt="electricalimage"  className="lg:w-[500px] h-[400px]" />
              </div>
            </div>
          </div>
          <div className="w-[80%] self-center  ">
            <div className="flex flex-col gap-10 lg:flex-row">
              <div>
                <img src={paintingImage} alt="painting" className="lg:w-[500px] h-[400px]"  />
              </div>
              <div className="lg:w-[55%] flex flex-col gap-4">
                <h2 className="text-3xl font-bold text-blue-700">
                  Quality Painting Services
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Give your home or workspace a stunning new look with our
                  professional painting services. We use premium paints and
                  techniques for smooth finishes and long-lasting color
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether it’s fixing a burst pipe, unclogging drains, or
                  setting up a new water line, our team works with precision,
                  safety, and care — ensuring your plumbing system runs smoothly
                  without interruptions.
                </p>
                <ul className="list-disc pl-6 text-gray-700 text-lg">
                  <li>Interior and exterior painting</li>
                  <li>Texture and decorative finishes</li>
                  <li>Color consultation and design</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Services;
