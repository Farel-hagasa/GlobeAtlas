"use client";

import { motion } from "framer-motion";

export default function HeroGlobe() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: .7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="relative hidden items-center justify-center lg:flex"
    >

      <motion.div
        animate={{
          rotate: 360,
          y: [-10, 10, -10],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          },
          y: {
            repeat: Infinity,
            duration: 5,
          },
        }}
        className="flex h-96 w-96 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-blue-700 shadow-[0_0_100px_rgba(255,255,255,.35)]"
      >

        <span className="text-[180px]">
          🌍
        </span>

      </motion.div>

      <div className="absolute h-[430px] w-[430px] rounded-full border border-white/20" />

      <div className="absolute h-[500px] w-[500px] rounded-full border border-white/10" />

    </motion.div>
  );
}