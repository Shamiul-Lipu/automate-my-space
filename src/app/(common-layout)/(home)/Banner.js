"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Container from "@/components/Container/Container";
import imageOne from "@/assets/banner/banner.png";
import imageTwo from "@/assets/banner/banner1.png";
import imageThree from "@/assets/banner/banner2.png";
import imageFour from "@/assets/banner/banner3.png";
import imageFive from "@/assets/banner/banner4.png";
import imageSix from "@/assets/banner/banner5.png";
import imageSeven from "@/assets/banner/banner6.png";
import bgImage from "@/assets/banner/Circuit.png";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const bannerImages = [
    { banner: imageOne },
    { banner: imageTwo },
    { banner: imageThree },
    { banner: imageFour },
    { banner: imageFive },
    { banner: imageSix },
    { banner: imageSeven },
  ];
  const bannerHeadines = [
    { line: `Redefining Convenience with Smart Home Automation!` },
    { line: "Where Innovation Meets Home Comfort and Security!" },
    { line: "Revolutionizing Homes with Cutting-Edge Automation!" },
    { line: "Transform Your Space into a Smart Haven Today!" },
  ];

  return (
    <section className={"background-image"}>
      <Container>
        <div className="flex flex-col lg:flex-row justify-between  py-10 ">
          <div className="w-full flex justify-center items-center lg:w-1/2 rounded-l-2xl bg-opacity-5 backdrop-filter backdrop-blur-md px-3 mx-auto text-center">
            <div>
              <Carousel
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                showArrows={false}
                stopOnHover={false}
                showIndicators={false}
                showStatus={false}
                axis="vertical"
              >
                {bannerHeadines.map((headline, i) => (
                  <h2
                    className="font-extrabold text-2xl xl:text-3xl  from-cyan-200 via-cyan-300 to-cyan-600 bg-gradient-to-r bg-clip-text text-transparent py-5"
                    key={i}
                  >
                    {headline.line}
                  </h2>
                ))}
              </Carousel>

              <p className="text-gray-400 text-base">
                Transforming Businesses, Living Spaces, and Automation Systems.{" "}
                <br /> Where Innovation Powers Efficiency, Connectivity,
                Security, and Seamless Buyer-Seller Experiences.
              </p>

              <Link
                href="/"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md my-3"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Join Now!</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Carousel banner */}
          <div className="w-full lg:w-1/2 rounded-r-2xl">
            {" "}
            <Carousel
              infiniteLoop={true}
              showThumbs={false}
              autoPlay={true}
              showArrows={false}
              stopOnHover={false}
              showIndicators={false}
              showStatus={false}
            >
              {bannerImages.map((bannerImage, i) => (
                <div key={i}>
                  <Image src={bannerImage.banner} alt="banner images" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
