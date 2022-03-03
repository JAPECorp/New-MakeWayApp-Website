import React from "react";
import AndroidButton from "../utilities/Buttons/AndroidButton";
import AppleButton from "../utilities/Buttons/AppleButton";

function Hero() {
  return (
    <section className="relative top-makeway-hero-offset-t">
      <div className="container flex text-center md:text-left lg:pl-32 mx-auto">
        <h2 className="leading-tight text-black text-left lg:mt-32 text-7xl md:text-4 lg:text-8xl lg:text-left mb-6">
          No More Delay
          <p className="mt-6 text-xl text-left text-gray-400">
            Get your Car moving quickly whenever, wherever at anytime with just
            a ping.”MakeWay” -: A Clear Path is Just A Ping Away.
          </p>
          <AndroidButton />
          <AppleButton />
        </h2>
        <div className="md:bg-phone" />
      </div>
    </section>
  );
}

export default Hero;

// container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28
