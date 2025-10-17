import image from "../../assets/images/img7.jpg";
import Header from "../../components/header/Header";
import Brand from "../brands/Brands";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

function Home() {
  return (
    <>
      <Header />
      <div className="">
        <div className="relative w-full h-[400px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="md:text-4xl lg:text-5xl text-lg font-bold text-white mb-4">
              Welcome to Sakthi & Co
            </h1>
            <h4 className="text-lg md:text-xl text-gray-200 mb-6  font-bold">
              Your Trusted Partner for Electrical, Plumbing & Painting Solutions
            </h4>
            <p className="text-md md:text-lg text-sm text-gray-300 mb-2  font-bold">
              With over 10 years of trusted service, Sakthi & Co has become a
              leading name in the hardware industry, dealing in wholesale and
              retail of top-quality Electrical, Plumbing, and Painting products.
              We take pride in being a one-stop destination for contractors,
              builders, electricians, plumbers, and homeowners looking for
              reliable and affordable solutions under one roof.
            </p>
            <a
              href="tel:+919715288904"
              className="md:px-6 px-2 md:py-3 py-1 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            >
              Contact
            </a>
            {/* Service Buttons */}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-5 md:px-0">

          <div className="flex flex-col xl:flex-row lg:gap-20 md:gap-10 gap-5">

            <div className="p-8 text-center flex flex-col justify-center items-center border border-gray-300 my-5 rounded-xl shadow-2xl bg-purple-100">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
                Electrical Products
              </h2>
              <p className="text-xl text-yellow-700 font-medium mb-4">
                Power That You Can Trust
              </p>
              <p className="text-gray-700 leading-relaxed md:w-[600px] w-[200px]  text-justify justify-self-center py-5">
                We supply a complete range of electrical products that combine
                performance, safety, and durability. From high-quality wires and
                switches to modern lighting and distribution systems, our
                products meet both domestic and industrial standards. Whether
                you’re setting up a new space or upgrading your current one, our
                reliable range ensures consistent power, safety, and performance
                every time.
              </p>

              <div className="text-2xl text-green-600">
                Our Electrical Range Includes:
              </div>
              <div className="flex justify-center">
                <ul className="flex flex-col gap-4 text-gray-700 text-lg justify-center py-3">
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-green-600 font-bold" />
                    Cables, Wires & Switches
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-green-600 font-bold" /> LED
                    Lights & Fixtures
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-green-600 font-bold" /> MCBs,
                    RCCBs & Distribution Boards
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-green-600 font-bold" /> Fans &
                    Electrical Accessories
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-8 text-center flex flex-col border border-gray-300 my-5 rounded-xl shadow-2xl bg-purple-100">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
                Plumbing Products
              </h2>
              <p className="text-xl text-yellow-700 font-medium mb-4">
                Strong, Leak-Proof & Long-Lasting Solutions
              </p>
              <p className="text-gray-700 leading-relaxed text-justify md:w-[600px] w-[200px] py-3">
                Whether it’s new construction or maintenance work, we offer
                durable and corrosion-resistant plumbing materials that ensure
                smooth water flow and easy installation.
              </p>

              <div className="text-2xl text-green-600">
                Our Plumbing Range Includes:
              </div>
              <div className="flex  justify-center ">
                <ul className="flex flex-col gap-4 text-gray-700 text-lg md:justify-center justify-start py-3">
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-green-600 md:font-bold" />
                    PVC, CPVC, and UPVC Pipes & Fittings
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-green-600 font-bold" /> LED
                    Lights & Water Tanks, Valves & Pumps
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-green-600 font-bold" /> MCBs,
                    RCCBs & Bathroom Fittings & Sanitaryware
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-green-600 font-bold" /> Fans &
                    Plumbing Tools & Accessories
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 text-center border border-gray-300 my-5 rounded-xl shadow-2xl bg-purple-100">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
              Painting Products
            </h2>
            <p className="text-xl text-yellow-700 font-medium mb-4">
              Add Color, Protection & Elegance
            </p>
            <p className="text-gray-700 leading-relaxed text-justify md:w-[600px] w-[200px]">
              Transform your walls and surfaces with our wide range of
              decorative and protective painting products. We offer everything
              from premium paints to professional painting tools that deliver a
              flawless finish every time.
            </p>

            <div className="text-2xl text-green-600">
              Our Painting Range Includes:
            </div>
            <div className="flex justify-center ">
              <ul className="flex flex-col gap-2  text-gray-700 text-lg  justify-center ">
                <li className="flex  items-center gap-2">
                  <GoDotFill className="text-green-600 font-bold" />
                  Interior & Exterior Paints
                </li>
                <li className="flex items-center  gap-2">
                  <GoDotFill className="text-green-600 font-bold" /> LED Lights
                  & Primers & Undercoats
                </li>
                <li className="flex items-center  gap-2">
                  <GoDotFill className="text-green-600 font-bold" /> MCBs, RCCBs
                  & Wood & Metal Paints
                </li>
                <li className="flex items-center gap-2">
                  <GoDotFill className="text-green-600 font-bold" /> Fans &
                  Plumbing Painting Tools & Accessories
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for Reliable Home Products?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Explore our range of high-quality electrical, plumbing, and painting
            products to make your home complete.
          </p>
          <NavLink
            to="/contact"
            className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            Get Your Products
          </NavLink>
        </div>
        <Brand />

        {/* Contact / Footer Section */}
      </div>
      <Footer />
    </>
  );
}
export default Home;
