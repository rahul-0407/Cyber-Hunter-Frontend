// import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import leaduserdemo from "../../assets/leaduserdemo.png";

export default function LeaderboardList(data) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="flex-1 h-[500px] overflow-hidden bg-white bg-opacity-5 border border-cyan-400/5 rounded-lg"
    >
      {/* Scrollable Inner Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="h-full overflow-y-auto space-y-2 py-4 px-2 md:px-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-400/30 hover:scrollbar-thumb-cyan-400/50"
      >
        {data.data.map((entry) => (
          <motion.div
            key={entry.rank}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 
              bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-colors"
          >
            <span className="text-white w-4 md:w-8 text-sm md:text-base">
              {entry.rank}
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-full"
            >
              <img
                src={leaduserdemo}
                alt="User Avatar"
                className="w-full h-full rounded-full"
              />
            </motion.div>
            <span className="text-white flex-1 text-sm md:text-base">
              {entry.name}
            </span>
            <span className="text-white text-sm md:text-base">
              {entry.points} Points
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
