import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo4.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import securevault from "../../assets/logo/savedatas.png"

function Footer() {
  return (
    <>
      <div className="text-white  bg-gray-300">
        <div className="lg:max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between px-6 ">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 py-3">
            <img
              src={logo}
              alt="Company Logo"
              className="w-full h-24 md:w-32 md:h-32 object-contain mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700">
              Reliable Home Products
            </h2>
            <p className="text-gray-700 mt-2 text-base leading-relaxed max-w-md">
              We’re committed to providing top-quality Electrical, Plumbing, and
              Painting services that keep your home safe, stylish, and
              functional.
            </p>
          </div>

          <div className="w-1/2 flex flex-col justify-start">
            <div className="text-2xl font-semibold text-gray-700 flex  ">
              Quick Links
            </div>
            <div className="flex flex-col gap-4 text-gray-700 text-base pt-6 ">
              <NavLink to="/home" className="">
                Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/product">Products</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Contact Details
            </h3>
            <div className="flex flex-col gap-4 text-gray-700 text-base">
              <div className="flex  sm:flex-row sm:gap-2 justify-center md:justify-start">
                <span>
                  {" "}
                  <BiSolidPhoneCall size={24} />
                </span>
                <a
                  href="tel:+919715288904"
                  className="hover:underline text-gray-700"
                >
                  +91 97152 88904
                </a>
              </div>

              <div className="flex  sm:flex-row sm:gap-2 justify-center md:justify-start">
                <IoMail size={24} />
                <a
                  href="mailto:sales@sakthiandco.in"
                  className="hover:underline text-gray-700 break-words"
                >
                  sales@sakthiandco.in
                </a>
              </div>

              <div className="flex  sm:flex-row sm:gap-2 justify-center md:justify-start">
                <IoLocationSharp size={24} />
                <p className="text-gray-700">
                  20A, Kalapatti, Coimbatore, <span>TamilNadu 641048</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-semibold text-gray-700">Designed and Developed by</div>
            <img src={securevault} className="w-[70px] h-[70px] "/>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-800">
          © {new Date().getFullYear()} sakthiandco All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
