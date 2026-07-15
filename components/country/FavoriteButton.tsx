"use client";

import { Button } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoritesContext";

type Props = {
  code: string;
};

export default function FavoriteButton({
  code,
}: Props) {
  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(code);

  function handleClick() {
    if (favorite) {
      removeFavorite(code);
    } else {
      addFavorite(code);
    }
  }

  return (
    <Button
      variant={favorite ? "destructive" : "outline"}
      onClick={handleClick}
      className="min-w-[180px]"
    >
      {favorite
        ? "❤️ Remove Favorite"
        : "🤍 Add Favorite"}
    </Button>
  );
}