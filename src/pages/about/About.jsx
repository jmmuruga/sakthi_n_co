import Header from "../../components/header/Header";
import profileImage from "../../assets/images/img2.jpg";
import Footer from "../../components/footer/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="">
        <div>
          <h1 className="font-bold text-5xl text-center">About</h1>
        </div>
        <div className="flex lg:flex-row flex-col w-[80%] justify-self-center gap-10 my-10">
          <div className="lg:w-[40%] w-full">
            <img
              src={profileImage}
              alt="aboutimage"
              className="w-[800px] h-[400px]"
            ></img>
          </div>
          <div className="lg:w-[40%] w-full  flex flex-col gap-5">
            <p className="md:font-semibold   leading-relaxed xl:w-[800px]  lg:w-[500px] w-full">
              Your Reliable Partner for Electrical, Plumbing & Painting
              Solutions Founded over a decade ago, Sakthi & Co has grown into
              one of the most trusted names in the hardware and building
              materials industry. With more than 10 years of expertise, we
              proudly serve customers across residential, commercial, and
              industrial sectors — providing high-quality Electrical, Plumbing,
              and Painting products all under one roof.
            </p>

            <p className="md:font-semibold   leading-relaxed xl:w-[800px] lg:w-[500px] w-full">
              What started as a small local hardware shop has today grown into a
              leading wholesale and retail outlet, offering a complete range of
              branded products. Over the years, we have built strong
              relationships with top manufacturers and suppliers, ensuring that
              our customers always get genuine, durable, and cost-effective
              products.
            </p>

            <p className="md:font-semibold   leading-relaxed xl:w-[800px]  lg:w-[500px] w-full">
              At <span className="text-gray-900">Sakthi & Co</span>, we partner
              with leading brands to ensure every product we deliver meets the
              highest standards of durability and efficiency. Our electrical
              materials ensure safety and power reliability, plumbing solutions
              guarantee strength and smooth flow, and painting products bring
              lasting color and elegance to your walls.
            </p>

            <p className="md:font-semibold  leading-relaxed xl:w-[800px]  lg:w-[500px] w-full">
              We believe that the right materials create the foundation for
              every great space. That’s why
              <span className="text-gray-900">Sakthi & Co</span> continues to
              focus on
              <span className="text-gray-900">
                quality, affordability, and long-term performance
              </span>
              . With our one-formula approach and transparent pricing, we make
              it easier for every customer to achieve professional results—no
              matter the scale.
            </p>
          </div>
        </div>
        <div className="">
          <div className="md:w-[85%]  w-full mx-auto flex flex-col md:flex-row  gap-10 px-6">
            <div className="p-8 bg-blue-100 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver top-quality products and reliable service that meet
                the needs of every customer — from homeowners to professionals —
                ensuring value, trust, and long-term relationships.
              </p>
            </div>
            <div className="p-8 bg-green-100 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as the most dependable and customer-focused
                hardware supplier in the region, offering a complete range of
                building and maintenance solutions under one roof.
              </p>
            </div>
          </div>
        </div>
        <div className=" py-16  ">
          <div className="flex justify-center text-4xl text-gray-700 mb-5">
            Why Choose Sakthi & Co
          </div>
          <div className="mx-auto flex flex-col  md:flex-row gap-8 text-center justify-center  ">
            <div className="py-6 px-10 border bg-yellow-200 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-yellow-500">10+</h3>
              <p className="text-gray-700 mt-2">Years of Experience</p>
            </div>
            <div className="py-6 px-10 border rounded-lg shadow bg-blue-200 hover:shadow-lg transition">
              <h3 className="text-4xl font-bold  text-blue-500">500+</h3>
              <p className="text-gray-700 mt-2">Projects Completed</p>
            </div>
            <div className="py-6 px-10 border rounded-lg bg-green-200 shadow hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-green-500">100%</h3>
              <p className="text-gray-700 mt-2">Customer Satisfaction</p>
            </div>
            <div className="py-6 px-10 border bg-green-300 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-green-500">✔️</h3>
              <p className="text-gray-700 mt-2">Affordable Pricing</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
