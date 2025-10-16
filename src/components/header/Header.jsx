import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo2.png";
import { SiWhatsapp } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { IoMdArrowRoundUp } from "react-icons/io";
import {  useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      
      <div className="flex justify-between px-5 md:items-center bg-gray-100 ">
        <div className=" hidden  md:flex py-3 md:w-[40%]">
          <img src={logo} alt="Reliable Home Services logo" className="w-20 h-20 rounded-lg"></img>
        </div>

        <div className="hidden md:flex md:gap-10 xl:w-[40%]  justify-center text-lg font-semibold">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Services
          </NavLink>
          {/* <NavLink
            to="/products"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Products
          </NavLink> */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
        {/* mobile link  */}
        <div className="md:hidden w-full flex justify-between p-3">
          <img src={logo} alt="logo" className="w-20 h-20 rounded-lg"></img>

          <div className=" cursor-pointer py-8">
            {menuOpen ? (
              <RiCloseLine size={30} onClick={() => setMenuOpen(false)} />
            ) : (
              <RiMenu3Line size={30} onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-6 py-6 text-lg font-semibold text-gray-700 w-full absolute top-20 left-0 z-50">
            <NavLink onClick={() => setMenuOpen(false)} to="/home">
              Home
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/about">
              About
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/services">
              Services
            </NavLink>
            {/* <NavLink onClick={() => setMenuOpen(false)} to="/products">
              Products
            </NavLink> */}
            <NavLink onClick={() => setMenuOpen(false)} to="/contact">
              Contact
            </NavLink>
          </div>
        )}
      </div>
      <div className="fixed  z-50  bottom-6 gap-3 flex flex-col">
        <a
          href="https://wa.me/919715288904"
          title="Chat on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp logo"
          className="bg-[#25d366] flex justify-center items-center rounded-full px-3 py-3 cursor-pointer text-white"
        >
          <SiWhatsapp size={25} />
        </a>
        <a
          href="tel:+919715288904"
          className="px-3 py-3 bg-[#148ddc]  flex justify-center items-center rounded-full cursor-pointer"
          aria-label="Call Logo"
          title="Click to call"
        >
          <IoCall size={25} color="white" />
        </a>
        <div
          className="px-3 py-3 bg-[#E55922] flex justify-center items-center cursor-pointer rounded-full "
          aria-label="Scroll "
          title="Scroll to top of page"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <IoMdArrowRoundUp size={25} color="white" />
        </div>
      </div>
    </>
  );
}

export default Header;
