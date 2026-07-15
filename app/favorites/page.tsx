"use client";

import { useMemo } from "react";

import { useFavorites } from "@/context/FavoritesContext";
import { useCountries } from "@/hooks/useCountries";

import CountryGrid from "@/components/home/CountryGrid";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const { countries, loading, error } = useCountries();

  const favoriteCountries = useMemo(() => {
    return countries.filter((country) =>
      favorites.includes(country.code)
    );
  }, [countries, favorites]);

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold">
          Favorite Countries
        </h1>

        <p className="mt-6">Loading...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold">
          Favorite Countries
        </h1>

        <p className="mt-6 text-red-500">
          {error}
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        Favorite Countries
      </h1>

      {favoriteCountries.length === 0 ? (
        <div className="rounded-2xl border border-dashed py-20 text-center">
          <h2 className="text-2xl font-semibold">
            No favorite countries yet.
          </h2>

          <p className="mt-2 text-slate-500">
            Add a country from the detail page.
          </p>
        </div>
      ) : (
        <CountryGrid countries={favoriteCountries} />
      )}
    </main>
  );
}