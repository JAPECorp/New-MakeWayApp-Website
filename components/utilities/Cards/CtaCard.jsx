import { motion } from "framer-motion";

function CtaCard() {
  return (
    <section className="mt-20">
      <div className="md:px-80 2lg:px-24">
        <div className="cta-container card">
          <div className="w-full sm:w-2/3 h-2/5 sm:h-full px-2 xxsm:px-12 sm:px-7 sm:pt-0 py-3">
            <h3 className="text-left text-black pt-6">
              Easy Ping Multiple Access
            </h3>
            <h4 className="">Join Us to grow this into something big.</h4>
            <motion.button whileHover={{ scale: 1.05 }} className="blue mt-10">
              Get Started
            </motion.button>
          </div>

          {/* <div className="gradient-img object-fill h-98 w-800" />
          <div className="gradient-img-mob" /> */}
        </div>
      </div>
    </section>
  );
}

export default CtaCard;
