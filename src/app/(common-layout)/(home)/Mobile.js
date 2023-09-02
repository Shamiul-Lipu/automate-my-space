import imgMobile from "@/assets/mobile.png";
import Image from "next/image";

const MobileAppLook = () => {
  return (
    <section className="bg-gray-900 py-7">
      <div className=" relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 ">
        <div
          className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72 "
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
          }}
        ></div>
        <div className="relative z-10 gap-5 items-center md:flex">
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <Image src={imgMobile} alt="" className="w-full rounded-xl" />
          </div>
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-white font-semibold md:text-4xl">
              Unlocking Possibilities: A Next-Gen Operating System for All{" "}
              <span className="text-indigo-400">
                Your Partner in Pioneering Tech Excellence.
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed mt-3">
              Fresh UI Design, Streamlined Interactivity, and AI Voice
              Assistance Redefining the Smart Home Experience for Mobile Users.
            </p>
            <a
              className="mt-5 px-4 py-2 text-indigo-50 font-medium bg-indigo-500 rounded-full inline-flex items-center"
              href="javascript:void()"
            >
              Get it Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppLook;
