"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  ArrowRight,
  Globe2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import HeroGlobe from "./HeroGlobe";

type HeroProps = {
  totalCountries: number;
  totalContinents: number;
  totalLanguages: number;
};

export default function Hero({
  totalCountries,
  totalContinents,
  totalLanguages,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500">

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-300 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-300 blur-[120px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_65%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
          }}
        >

          <motion.div
            animate={{
              y: [-3, 3, -3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-5 py-2 text-white backdrop-blur-xl"
          >
            <Globe2 size={18} />
            Explore the World
          </motion.div>

          <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Explore Every Nation,
            <br />
            Discover Our World
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">
            Discover countries, capitals, languages,
            currencies and fascinating facts from around
            the globe through one modern platform.
          </p>

          <Link href="#countries">

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-block"
            >

              <Button
                size="lg"
                className="mt-10 bg-white text-blue-700 shadow-xl hover:bg-slate-100"
              >
                Explore Countries

                <ArrowRight className="ml-2 h-5 w-5" />

              </Button>

            </motion.div>

          </Link>

          <div className="mt-14 grid grid-cols-3 gap-6">

            <Stat
              value={totalCountries}
              suffix="+"
              label="Countries"
            />

            <Stat
              value={totalContinents}
              label="Continents"
            />

            <Stat
              value={totalLanguages}
              suffix="+"
              label="Languages"
            />

          </div>

        </motion.div>

        <HeroGlobe />

      </div>

    </section>
  );
}

type StatProps = {
  value: number;
  label: string;
  suffix?: string;
};

function Stat({
  value,
  label,
  suffix,
}: StatProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -6,
        scale: 1.04,
      }}
      transition={{
        duration: .3,
      }}
      className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-xl"
    >

      <h2 className="text-4xl font-bold text-white">

        <CountUp
          end={value}
          duration={2.5}
          enableScrollSpy
        />

        {suffix}

      </h2>

      <p className="mt-2 text-blue-100">
        {label}
      </p>

    </motion.div>
  );
}