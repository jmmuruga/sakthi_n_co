import image from "../../assets/images/img7.jpg";
import Header from "../../components/header/Header";
import Brand from "../brands/Brands";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reliable Home Services
            </h1>
            <h4 className="text-lg md:text-xl text-gray-200 mb-6  font-bold">
              Electrical, Plumbing, and Painting – We Do It All!
            </h4>
            <p className="text-md md:text-lg text-gray-300 mb-2 max-w-2xl  font-bold">
              10+ years of delivering reliable home services — from electrical and plumbing solutions to painting your walls with perfection. Quality, trust, and customer satisfaction are at the heart of everything we d
            </p>
            <a href="tel:+919715288904" className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
              Contact
            </a>
            {/* Service Buttons */}
          </div>
        </div>
        {/* Call to Action */}
        <div className="py-16 text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Expert Home Services?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Contact us today and let our skilled team take care of your home
            needs.
          </p>
          <NavLink to="/contact" className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition">
            Book a Service
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
