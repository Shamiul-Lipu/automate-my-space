"use client";
import Marquee from "react-fast-marquee";
import brand1 from "@/assets/brands/brand1.png";
import brand2 from "@/assets/brands/brand2.png";
import brand3 from "@/assets/brands/brand3.png";
import brand4 from "@/assets/brands/brand4.png";
import brand5 from "@/assets/brands/brand5.png";
import brand6 from "@/assets/brands/brand6.png";
import brand7 from "@/assets/brands/brand7.png";
import brand8 from "@/assets/brands/brand8.png";
import brand9 from "@/assets/brands/brand9.png";
import brand10 from "@/assets/brands/brand10.png";
import brand11 from "@/assets/brands/brand11.png";
import brand12 from "@/assets/brands/brand12.png";
import brand13 from "@/assets/brands/brand13.png";
import brand14 from "@/assets/brands/brand14.png";
import brand15 from "@/assets/brands/brand15.png";
import brand16 from "@/assets/brands/brand16.png";
import Image from "next/image";

const Partners = () => {
  const brandList = [
    { brandImg: brand1 },
    { brandImg: brand2 },
    { brandImg: brand3 },
    { brandImg: brand4 },
    { brandImg: brand5 },
    { brandImg: brand6 },
    { brandImg: brand7 },
    { brandImg: brand8 },
    { brandImg: brand9 },
    { brandImg: brand10 },
    { brandImg: brand11 },
    { brandImg: brand12 },
    { brandImg: brand13 },
    { brandImg: brand14 },
    { brandImg: brand15 },
    { brandImg: brand16 },
  ];
  return (
    <section className="bg-gray-900 pb-5 pt-20">
      <div className=" relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 ">
        <div
          className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72 "
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
          }}
        ></div>
        <div className="relative z-10">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Connecting you to an ecosystem of smarter living solutions{" "}
            <span className="text-indigo-400">smarter living solutions</span>
          </h3>
          <p className="mt-3 text-gray-400"></p>
        </div>
        {/* marquee */}
        <div className="">
          <Marquee
            speed={80}
            gradientColor={[15, 23, 42]}
            gradient={true}
            gradientWidth={160}
            pauseOnClick={true}
          >
            <div className=" py-10 flex flex-row items-center justify-between overflow-x-auto">
              {brandList.map((brand, index) => {
                return (
                  <div
                    key={index}
                    className={`text-center font-semibold  text-white px-6 lg:px-12 py-10`}
                  >
                    <Image
                      className="mx-auto rounded-xl w-28"
                      src={brand.brandImg}
                      alt="brand image"
                    />
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;
