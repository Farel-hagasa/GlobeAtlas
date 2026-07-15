"use client";

import { useEffect, useState } from "react";
import { Country } from "@/types/country";
import { getAllCountries } from "@/services/countryService";

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getAllCountries();

        const sorted = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setCountries(sorted);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch countries.");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  return {
    countries,
    loading,
    error,
  };
}