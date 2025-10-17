import Header from "../../components/header/Header";
import image from "../../assets/images/img3.jpg";
import paintingImage from "../../assets/images/img4.jpg";
import electricalImage from "../../assets/images/img5.jpg";
import Footer from "../../components/footer/Footer";
import Panasonic from "../../assets/images/electricalProductslogo1.png";
import Fybros from "../../assets/images/Fybros-Logo.png";
import finolex from "../../assets/images/brand1.jpg";
import kundancab from "../../assets/images/brand6.png";
import Havells from "../../assets/images/brand3.png";
import legrand from "../../assets/images/brand5.png";
import rr from "../../assets/images/brand8.png";
import gm from "../../assets/images/brand9.jpg";
import crompton from "../../assets/images/Crompton_Greaves_Logo.png";
import sturlite from "../../assets/images/sturlite_Logo.png";
import atomBerg from "../../assets/images/atomberg_logo.png";
import philips from "../../assets/images/philips_logo.png";
import luker from "../../assets/images/luker_logo.png";
import parryware from "../../assets/images/brand4.png";
import supreme from "../../assets/images/brand7.png";
import jaquar from "../../assets/images/jaquar_logo.png";
import truflo from "../../assets/images/truflo_Logo.png";
import astral from "../../assets/images/astral_logo.jpg";
import wallcare from "../../assets/images/wallcare-logo.png";
import birla from "../../assets/images/Birla-Opus-Logo.png";
import wallputty from "../../assets/images/wall-putty-logo.png"
import gem from "../../assets/images/Gem Paints_logo.jpg";
import asian from "../../assets/images/brand2.jpg";
function Product() {
  const electricalImg = [
    { id: 1, logo: Panasonic },
    { id: 2, logo: Fybros },
    { id: 3, logo: finolex },
    { id: 4, logo: kundancab },
    { id: 5, logo: Havells },
    { id: 6, logo: legrand },
    { id: 7, logo: rr },
    { id: 8, logo: gm },
  ];

  const ledlightArray = [
    { id: 1, logo: crompton },
    { id: 2, logo: sturlite },
    { id: 3, logo: atomBerg },
    { id: 4, logo: philips },
    { id: 5, logo: luker },
  ];

  const Plumbing = [
    { id: 1, logo: parryware },
    { id: 2, logo: supreme },
    { id: 3, logo: jaquar },
    { id: 4, logo: truflo },
    { id: 5, logo: astral },
    { id: 6, logo: finolex },
  ];

  const paintingProducts = [
    { id: 1, logo: wallcare },
    { id: 2, logo: birla },
    { id: 3, logo: asian },
    { id: 4, logo: wallputty },
    { id: 5, logo: gem },
  ];

  return (
    <>
      <Header />
      <div>
        <div>
          <div className="flex justify-center py-3 items-center lg:font-bold lg:text-4xl text-2xl">
           ELECTRICAL PRODUCTS
          </div>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 gap-10  py-11 px-4 justify-items-center">
            {electricalImg.map((brand) => {
              return (
                <img
                  key={brand.id}
                  src={brand.logo}
                  alt="Brandlogo"
                  className="xl:w-[200px] h-[140px] lg:w-[150px] w-full  object-contain  flex justify-center items-center"
                />
              );
            })}
          </div>
        </div>
        {/* ledlightArray  */}
        <div>
          <div className="flex justify-center py-3 items-center lg:font-bold lg:text-4xl text-2xl">
            LED LIGHTS & FANS
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 justify-items-center gap-10 px-4 py-11">
            {ledlightArray.map((brand) => {
              return (
                <img
                  key={brand.id}
                  src={brand.logo}
                  alt="Brandlogo"
                  className="xl:w-[200px] h-[140px] lg:w-[150px] w-full  object-contain"
                />
              );
            })}
          </div>
        </div>
        <div>
          {/* Plumbing  */}
          <div className="flex justify-center py-3 items-center lg:font-bold lg:text-4xl text-2xl">
            PLUMBING AND SANITARY PRODUCTS
          </div>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 justify-items-center gap-10 px-4 py-11">
            {Plumbing.map((brand) => {
              return (
                <img
                  key={brand.id}
                  src={brand.logo}
                  alt="Brandlogo"
                  className="xl:w-[200px] h-[140px] lg:w-[150px] w-full  object-contain"
                />
              );
            })}
          </div>
        </div>
          <div>
          {/* Plumbing  */}
          <div className="flex justify-center py-3 items-center font-bold lg:text-4xl text-2xl">
             PAINTINGS PRODUCTS
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-10 justify-items-center px-4 py-11">
            {paintingProducts.map((brand) => {
              return (
                <img
                  key={brand.id}
                  src={brand.logo}
                  alt="Brandlogo"
                  className="xl:w-[200px] h-[140px] lg:w-[150px] w-full  object-fill"
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
