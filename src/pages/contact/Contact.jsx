import { useRef } from "react";
import contact from "../../assets/images/contactimg.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocationSharp, IoMail } from "react-icons/io5";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vc3fktq",
        "template_qhqg01m",
        form.current,
        "PEUQZaCjsaHHXEaWf"
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          // alert("Something went wrong ❌");
        }
      );
  };
  return (
    <>
      <Header />

      <div className="w-full flex flex-col items-center py-16 px-4  ">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl">
          We’d love to hear from you! Whether it’s about a project,
          collaboration, or just a friendly hello — send us a message below.
        </p>

        {/* Contact Container */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row  gap-10 lg:gap-16  bg-purple-100 shadow-lg rounded-2xl p-6 md:p-10">
          {/* Left Image */}
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
            {/* <img
              src={contact}
              alt="Contact"
              className="w-full rounded-2xl  shadow-md h-[400px]"
            /> */}
            <div className="flex flex-col gap-5 text-lg">
              <div className="text-3xl text-center">Contact Us!</div>
              <div className="text-gray-600 text-justify py-4">
                We’d love to hear from you! Whether you have questions, ideas,
                or feedback, our team is here to help. Reach out to us anytime,
                and we’ll get back to you as soon as possible. Your thoughts
                matter, and we’re committed to providing the support you need.
                Connect with us via email, phone, or our contact form below.
              </div>
              <div className="flex gap-3">
                <span>
                  <BiSolidPhoneCall size={24} />
                </span>
                +91 97152 88904
              </div>
              <div className="flex gap-3 sm:flex-row sm:gap-2 justify-center md:justify-start">
                <IoMail size={24} />
                sales@sakthiandco.in
              </div>
              <div className="flex gap-3 sm:flex-row sm:gap-2 justify-center md:justify-start">
                <IoLocationSharp size={24} />
                <p className="text-gray-700">
                  20A, Kalapatti, Coimbatore, <span>TamilNadu 641048</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-[50%]">
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div>
                <label className=" text-gray-700 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className=" text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className=" text-gray-700 font-semibold mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition"
                  minLength={10}
                  maxLength={10}
                  name="user_mobile"
                  required
                  onKeyPress={(e) => {
                    if (!/^\d$/.test(e.key)) {
                      e.preventDefault(); // Block non-digit characters
                    }
                  }}
                />
              </div>

              <div>
                <label className=" text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
