// src/components/Body.jsx
import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import ServiceImage from "../assets/laptop.jpg";
import Main from "../assets/main.png";

const services = [
  {
    title: "Flutter App Development",
    description:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? ",
    linkText: "Let's get started today!",
  },
  { title: "UI/UX Design" },
  { title: "Customization & Integration" },
  { title: "Testing & Quality Assurance" },
  { title: "Maintenance & Support" },
  { title: "Consulting & Training" },
  { title: "Migration & Upgrades" },
];

const Body = () => {
  return (
    <div className="flex flex-col gap-10 px-4 md:px-8">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Unlock the Potential <br /> of Flutter
          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Your Premier Partner for Cross-Platform App Excellence!
          </p>
          <button className="bg-cyan-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-cyan-600 transition">
            UPGRADE YOUR TECH
          </button>
        </div>
        <div className="flex-1 relative flex justify-center">
          <img
            src={Main}
            alt="Flutter Showcase"
            className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl object-cover"
          />
        </div>
      </section>

      {/* Flutter's Dawn Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-10 p-6 rounded">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Flutter's Dawn
          </h2>
          <p className="text-sm text-gray-400">History of flutter</p>
        </div>
        <div className="flex-1 text-gray-300 text-center lg:text-left">
          <p className="mb-4">
            Uncover the fascinating story of Flutter in 'Flutter's Dawn: History
            of Flutter.' From humble origins to global acclaim, delve into its
            captivating narrative. Explore milestones, triumphs, and challenges.
            Whether tech enthusiast or curious mind, join us on this captivating
            journey!
            <span className="text-cyan-500 cursor-pointer ml-1">
              Click to begin!
            </span>
          </p>
        </div>
        <div className="flex-shrink-0 text-center lg:text-left">
          <button className="bg-cyan-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 hover:bg-cyan-600 transition">
            BEGIN <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Our Dynamic Services Suite!
        </h2>
        <p className="text-center text-base md:text-lg text-gray-300 mb-4">
          Embrace Innovation: Let’s Create Together!
        </p>
        <p className="text-center text-sm text-gray-400 mb-10 max-w-2xl mx-auto">
          Step into innovation! Explore our range of services and let’s create
          something extraordinary together. Your vision, our expertise. Let’s
          begin!
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-sm text-gray-300">
                      {service.description}
                      <span className="text-cyan-500 cursor-pointer ml-1">
                        {service.linkText}
                      </span>
                    </p>
                  )}
                </div>
                <div className="text-2xl font-bold cursor-pointer">
                  {index === 0 ? "−" : "+"}
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={ServiceImage}
              alt="Service"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col lg:flex-row justify-between gap-12 mt-16 pt-10">
        <div className="flex-1 space-y-10">
          <div className="flex flex-wrap gap-4 text-sm text-white justify-center lg:justify-start">
            <span>Events</span>
            <span>Gen AI</span>
            <span>Careers</span>
            <span>Case study</span>
            <span>SME Talks</span>
          </div>
          <p className="text-xl md:text-2xl text-center lg:text-left">
            For any collaborative projects or enquiries feel free to connect
            with us.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-center lg:text-left">
            vayuz.com
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white justify-center lg:justify-start">
            <span>About</span>
            <span>Insights</span>
            <span>Community</span>
            <span>Privacy & Policies</span>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
            Connect With Us
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-cyan-600 px-4 py-2 md:px-6 md:py-2 rounded-full text-white hover:bg-cyan-700 transition w-full sm:w-auto"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Body;
