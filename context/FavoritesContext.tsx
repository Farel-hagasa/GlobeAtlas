"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (code: string) => void;
  removeFavorite: (code: string) => void;
  isFavorite: (code: string) => boolean;
};

const FavoritesContext =
  createContext<FavoritesContextType | null>(null);

const STORAGE_KEY = "favoriteCountries";

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function addFavorite(code: string) {
    setFavorites((prev) => {
      if (prev.includes(code)) return prev;

      return [...prev, code];
    });
  }

  function removeFavorite(code: string) {
    setFavorites((prev) =>
      prev.filter((item) => item !== code)
    );
  }

  function isFavorite(code: string) {
    return favorites.includes(code);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites must be used inside FavoritesProvider"
    );
  }

  return context;
}