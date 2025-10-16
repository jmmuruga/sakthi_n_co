import contact from "../../assets/images/contactimg.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
function Contact() {
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
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10 lg:gap-16  bg-purple-100 shadow-lg rounded-2xl p-6 md:p-10">
          {/* Left Image */}
          <div className="w-full md:w-[50%]">
            <img
              src={contact}
              alt="Contact"
              className="w-full rounded-2xl  shadow-md h-[400px]"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-[50%]">
            <form className="space-y-6">
              <div>
                <label className=" text-gray-700 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
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
      <Footer/>
    </>
  );
}

export default Contact;
