import React from "react";
import AndroidButton from "../utilities/Buttons/AndroidButton";
import AppleButton from "../utilities/Buttons/AppleButton";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative top-makeway-hero-offset-t">
      <div className="container flex text-center md:text-left lg:pl-32 mx-auto">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
          className="leading-tight text-black text-left lg:mt-32 text-7xl md:text-4 lg:text-8xl lg:text-left mb-6"
        >
          No More Delay
          <p className="mt-6 text-lg font-normal text-left text-gray-500">
            Get your Car moving quickly whenever, wherever at anytime with just
            a ping.<span className="text-blue-500">”MakeWay”</span>-: A Clear
            Path is Just A Ping Away.
          </p>
          <div className=" mt-4 flex space-x-4">
            <AndroidButton />
            <AppleButton />
          </div>
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1.3,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.7,
              },
            },
          }}
          className="md:bg-phone"
        />
      </div>
    </section>
  );
}

export default Hero;
