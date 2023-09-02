import imgAI from "@/assets/ai.png";
import Image from "next/image";

const NewAI = () => {
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
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h3 className="text-3xl text-white font-semibold md:text-4xl">
              AI 3.0: A Comprehensive Smart Operating System for Home and Beyond{" "}
              <span className="text-indigo-400">
                At Your Service with Cutting-Edge Technology.
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed mt-3">
              Brand-new UI design , efficient interactive and AI voice
              assistant, creating a new humanized smart home experience for
              users.
            </p>
            <a
              className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
              href="javascript:void()"
            >
              Try it out
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
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <Image src={imgAI} alt="" className="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAI;
