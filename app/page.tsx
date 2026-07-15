"use client";

import { useMemo, useState } from "react";

import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import RegionFilter from "@/components/home/RegionFilter";
import CountryGrid from "@/components/home/CountryGrid";

import { useCountries } from "@/hooks/useCountries";

export default function HomePage() {
  const { countries, loading, error } = useCountries();

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  const statistics = useMemo(() => {
    const continents = new Set(
      countries.map((country) => country.continent.name)
    );

    const languages = new Set(
      countries.flatMap((country) =>
        country.languages.map((language) => language.name)
      )
    );

    return {
      totalCountries: countries.length,
      totalContinents: continents.size,
      totalLanguages: languages.size,
    };
  }, [countries]);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesRegion =
        region === "all" ||
        country.continent.name === region;

      return matchesSearch && matchesRegion;
    });
  }, [countries, search, region]);

  return (
    <>
      <Hero
        totalCountries={statistics.totalCountries}
        totalContinents={statistics.totalContinents}
        totalLanguages={statistics.totalLanguages}
      />

      <section className="mx-auto max-w-7xl px-6 py-10">

  <div className="grid gap-4 md:grid-cols-[2fr_1fr]">

    <SearchBar
      value={search}
      onChange={setSearch}
    />

    <RegionFilter
      value={region}
      onChange={setRegion}
    />

  </div>

  {!loading && !error && (

    <div className="mt-6 flex items-center justify-between">

      <p className="text-sm text-slate-500">

        Showing{" "}

        <span className="font-semibold text-slate-900">
          {filteredCountries.length}
        </span>{" "}

        {filteredCountries.length === 1
          ? "country"
          : "countries"}

      </p>

      {(search || region !== "all") && (

        <button
          onClick={() => {
            setSearch("");
            setRegion("all");
          }}
          className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
        >
          Clear Filters
        </button>

      )}

    </div>

  )}

</section>

      {loading && (
  <CountryGrid
    countries={[]}
    loading
  />
)}

      {error && (
        <div className="py-20 text-center text-red-500">
          {error}
        </div>
      )}

      {!loading && !error && (
        <CountryGrid countries={filteredCountries} />
      )}
    </>
  );
}