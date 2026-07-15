"use client";

import { motion } from "framer-motion";

import { Country } from "@/types/country";
import CountryCard from "./CountryCard";

type CountryGridProps = {
  countries: Country[];
  loading?: boolean;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export default function CountryGrid({
  countries,
  loading = false,
}: CountryGridProps) {
  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <CountryCard
              key={index}
              loading
            />
          ))}
        </div>
      </section>
    );
  }

  if (countries.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-xl font-semibold">
          No countries found.
        </h2>
      </section>
    );
  }

  return (
    <section
      id="countries"
      className="mx-auto max-w-7xl px-6 pb-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {countries.map((country) => (
          <motion.div
            key={country.code}
            variants={itemVariants}
          >
            <CountryCard
              code={country.code}
              name={country.name}
              capital={country.capital}
              continent={country.continent.name}
              currency={country.currency}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}