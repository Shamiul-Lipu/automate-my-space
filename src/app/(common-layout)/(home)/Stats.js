export default () => {
  const stats = [
    {
      data: "1M+",
      desc: "Over 1 million homes and businesses transformed through our innovative solutions.",
    },
    {
      data: "10K+",
      desc: "Delivering automation solutions to businesses in industries",
    },
    {
      data: "30%",
      desc: "Our products have reduced energy consumption by up to 30% for our clients.",
    },
    {
      data: "30M+",
      desc: "Serving satisfied clients worldwide.",
    },
    {
      data: " 500+",
      desc: "Partnered with industry-leading brands to provide top-notch automation technology.",
    },
  ];

  return (
    <section className="py-28 bg-gray-900 relative">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl xl:mx-auto xl:text-center">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            The Premier Brand for Comprehensive Smart Solutions
          </h3>
          <p className="mt-3 text-gray-300">
            Prioritizing Brand Excellence and Robust Performance Across
            Industries.
          </p>
        </div>
        <div className="mt-12">
          <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
            {stats.map((item, idx) => (
              <li key={idx} className="sm:max-w-[15rem]">
                <h4 className="text-4xl text-white font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 text-gray-400 font-medium">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-80 blur-[118px] sm:h-72 "
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};
