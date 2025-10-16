import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo2.png";

function Footer() {
  return (
    <>
      <div className="text-white py-10  bg-gray-300">
        <div className="lg:max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 py-10">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
            <img
              src={logo}
              alt="Company Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700">
              Reliable Home Services
            </h2>
            <p className="text-gray-700 mt-2 text-base leading-relaxed max-w-md">
              We’re committed to providing top-quality Electrical, Plumbing, and
              Painting services that keep your home safe, stylish, and
              functional.
            </p>
          </div>

          <div className="w-1/2">
            <div className="text-2xl font-semibold text-gray-700 flex justify-center ">Quick Links</div>
            <div className="flex flex-col gap-4 text-gray-700 text-base pt-6  justify-center items-center">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Contact Details
            </h3>
            <div className="flex flex-col gap-4 text-gray-700 text-base">
              <div className="flex flex-col sm:flex-row sm:gap-2 justify-center md:justify-start">
                <span className="font-bold">Phone:</span>
                <a
                  href="tel:+919715288904"
                  className="hover:underline text-gray-700"
                >
                  +91 97152 88904
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-2 justify-center md:justify-start">
                <span className="font-bold">Email:</span>
                <a
                  href="mailto:sakthi641048kalaptti@gmail.com"
                  className="hover:underline text-gray-700 break-words"
                >
                  sakthi641048kalaptti@gmail.com
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-2 justify-center md:justify-start">
                <span className="font-bold">Address:</span>
                <p className="text-gray-700">
                  20A, Kalapatti, Coimbatore, Tamil Nadu 641048
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-800">
          © {new Date().getFullYear()} sakthi@co. All Rights
          Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
