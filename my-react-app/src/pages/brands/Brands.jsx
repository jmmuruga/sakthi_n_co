import brand1 from "../../assets/images/brand1.jpg";
import brand2 from "../../assets/images/brand2.jpg";
import brand3 from "../../assets/images/brand3.png";
import brand4 from "../../assets/images/brand4.png";
import brand5 from "../../assets/images/brand5.png";
import brand6 from "../../assets/images/brand6.png";
import brand7 from "../../assets/images/brand7.png";
import brand8 from "../../assets/images/brand8.png";
import brand9 from "../../assets/images/brand9.jpg";

function Brand() {
  const brands = [
    { id: 1, logo: brand1 },
    { id: 2, logo: brand3 },
    { id: 3, logo: brand4 },
    { id: 4, logo: brand5 },
  ];
  const brandStyle = [
    { id: 1, logo: brand6 },
    { id: 2, logo: brand7 },
    { id: 3, logo: brand8 },
    { id: 4, logo: brand9 },
  ];

  return (
    <>
      <div>
        <h2 className="text-center text-2xl font-semibold mb-6">
          We Deal With Top Brands
        </h2>
        <div className="flex lg:flex-row flex-col justify-center items-center  gap-10 md:px-20 ">
          <div className="grid md:grid-cols-2 gap-10 grid-cols-1 ">
            {brands.map((brand) => {
              return (
                <img
                  key={brand.id}
                  src={brand.logo}
                  alt="Brandlogo"
                  className="xl:w-[246px] h-[140px] lg:w-[150px] w-full  object-fill"
                />
              );
            })}
          </div>
          <div>
            <img src={brand2} alt="Brandlogo" className="h-[300px]" />
          </div>
          <div className="grid md:grid-cols-2  gap-10 ">
            {brandStyle.map((brand) => {
              return (
                <div key={brand.id}>
                  <img
                    src={brand.logo}
                    alt="Brandlogo"
                    className="xl:w-[246px] h-[140px]  lg:w-[150px] w-full object-fill"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
