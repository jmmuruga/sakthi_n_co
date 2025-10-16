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
            <img src={profileImage} alt="aboutimage" className="w-[800px] h-[400px]"></img>
          </div>
          <div className="lg:w-[40%] w-full  flex flex-col gap-5">
            <p className="md:font-bold text-gray-700 leading-relaxed xl:w-[800px]  lg:w-[500px] w-full">
              We are a team of skilled professionals dedicated to making your
              home safe, functional, and beautiful. With years of hands-on
              experience in Electrical
              <span>Plumbing</span>, and
              <span>Painting</span>
              services, we take pride in delivering results that exceed
              expectations.
            </p>

            <p className="md:font-bold text-gray-700 leading-relaxed xl:w-[800px] lg:w-[500px] w-full">
              Our mission is to provide reliable, high-quality services with a
              focus on customer satisfaction. From fixing a small electrical
              issue to transforming your space with a fresh coat of paint, every
              project is handled with precision, safety, and care. We believe in
              transparency, professionalism, and attention to detail in every
              job we undertake.
            </p>

            <p className="md:font-bold text-gray-700 leading-relaxed xl:w-[800px]  lg:w-[500px] w-full">
              Our electrical experts ensure your wiring, lighting, and
              connections meet the highest safety standards — keeping your home
              efficient and secure. Our plumbing team provides long-lasting
              solutions for leaks, pipe installations, and water systems,
              ensuring uninterrupted comfort. And our painting professionals
              bring color, life, and freshness to your walls with premium
              finishes and elegant designs.
            </p>

            <p className="md:font-bold text-gray-700 leading-relaxed xl:w-[800px]  lg:w-[500px] w-full">
              At Reliable Home Services we aim to make home maintenance simple
              and stress-free. Whether it’s a quick repair or a complete
              renovation, we work closely with our clients to understand their
              needs, ensuring every detail reflects quality craftsmanship and
              trust.
            </p>
          </div>
        </div>
        <div className=" py-16 my-10">
          <div className="md:w-[85%]  w-full mx-auto flex flex-col md:flex-row  gap-10 px-6">
            <div className="p-8 bg-blue-100 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to make every home safer, more comfortable, and
                more beautiful through reliable and affordable services. We aim
                to deliver exceptional quality in everything we do — whether
                it’s installing a secure electrical system, fixing a plumbing
                issue, or giving your walls a fresh, vibrant look.
              </p>
            </div>
            <div className="p-8 bg-green-100 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted name in home improvement by combining
                expert craftsmanship, modern techniques, and a deep commitment
                to customer satisfaction. We envision a future where every home
                is safe, functional, and beautifully maintained — a place where
                families can live comfortably and confidently.
              </p>
            </div>
          </div>
        </div> 
        <div className=" py-16  ">
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
