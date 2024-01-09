import React from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <motion.div 
    
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutralBlack font-semibold mb-6 lg:leading-snug">
            Konum bilgisi eklenecek
          </h2>
          <div className="flex gap-8 items-center justify-center">
           
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
