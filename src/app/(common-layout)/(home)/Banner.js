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

              <p className="text-gray-400 text-base relative">
                <svg
                  width="32"
                  height="23"
                  viewBox="0 0 32 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-20"
                >
                  <g opacity="0.2">
                    <path
                      d="M16.5614 7.55957C16.5614 3.38205 19.9431 0 24.1209 0C28.2985 0 31.6805 3.1333 31.6805 8.95202C31.6802 17.0091 25.6626 22.579 19.1477 22.6784C18.0535 22.6784 17.4568 22.0318 17.4568 20.9376V20.888C17.4568 19.7939 17.7552 19.2963 18.3023 19.1471C20.0431 18.8488 23.5739 17.9038 24.7177 15.1188C19.3468 15.1188 16.5618 11.6871 16.5618 7.55925L16.5614 7.55957ZM8.15633 15.1191C7.01255 17.9041 3.4813 18.8491 1.74089 19.1475C1.19381 19.2966 0.895468 19.7941 0.895468 20.8883V20.9379C0.895468 22.0321 1.49216 22.6788 2.58632 22.6788C9.10131 22.5792 15.1191 17.0092 15.1191 8.95234C15.1191 3.13353 11.7374 0.000318455 7.55957 0.000318455C3.38205 0.000318455 0 3.38201 0 7.55989C0.00034698 11.7374 2.73578 15.1191 8.15664 15.1191L8.15633 15.1191Z"
                      fill="#0668E2"
                    ></path>
                  </g>
                </svg>
                Transforming Businesses, Living Spaces, and Automation Systems.{" "}
                <br /> Where Innovation Powers Efficiency, Connectivity,
                Security, and Seamless Buyer-Seller Experiences.
              </p>

              <div className="flex justify-center items-center gap-3 py-5">
                <Link
                  href="/"
                  class="px-5 py-3 relative rounded group font-medium text-white inline-block"
                >
                  <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                  <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                  <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                  <span class="relative">Join Now!</span>
                </Link>
                <Link
                  href="#_"
                  class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                  <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      class="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      class="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Get Free Products
                  </span>
                </Link>
              </div>
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
