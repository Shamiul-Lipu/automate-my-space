"use client";
import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-200 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-300">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqsList = [
    {
      q: "What is a smart home automation system, and how does it work?",
      a: "A smart home automation system refers to a network of interconnected devices and sensors that allow you to control various aspects of your home, such as lighting, climate, security, and entertainment, through a central hub or mobile app. These devices communicate with each other and can be controlled remotely or automatically based on predefined settings or triggers.",
    },
    {
      q: "What types of devices can I automate in my smart home?",
      a: "You can automate a wide range of devices, including smart thermostats, lighting, locks, cameras, doorbells, speakers, appliances, and even blinds or curtains. The possibilities are extensive and can be tailored to your specific needs and preferences.",
    },
    {
      q: "How can smart home automation improve energy efficiency?",
      a: "Smart home automation can enhance energy efficiency by allowing you to monitor and control devices remotely. For example, you can adjust your thermostat or lighting settings while away from home, schedule appliances to run during off-peak hours, and receive real-time energy consumption data to make informed decisions about energy usage.",
    },
    {
      q: "Are smart home automation systems secure, and how can I protect my privacy?",
      a: " Smart home security is a top priority. Manufacturers employ encryption and security protocols to safeguard data. To enhance privacy, regularly update your device firmware, use strong and unique passwords, enable two-factor authentication, and review privacy settings in the associated apps. Additionally, consider a secure Wi-Fi network and purchase reputable products from trusted manufacturers.",
    },
    {
      q: "Can I integrate voice control with my smart home automation system?",
      a: "Yes, many smart home systems are compatible with popular voice assistants like Amazon Alexa, Google Assistant, and Apple HomeKit. This integration allows you to control your devices and systems using voice commands, making your smart home even more convenient and accessible.",
    },
    {
      q: "How do I choose the right smart home automation products for my needs?",
      a: "To choose the right products, start by identifying your goals and priorities. Consider factors such as compatibility, ease of use, brand reputation, and your budget. Research product reviews, seek recommendations, and consult with professionals if needed to ensure that the devices you select align with your specific requirements and preferences.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-gray-900 relative py-10">
      <div
        className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72 "
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-white font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto text-white">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
