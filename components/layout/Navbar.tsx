"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./Logo";

import { Badge } from "@/components/ui/badge";
import { useFavorites } from "@/context/FavoritesContext";

export default function Navbar() {
  const pathname = usePathname();

  const { favorites } = useFavorites();

  function isActive(path: string) {
    return pathname === path;
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="flex items-center gap-8">

          <Link
            href="/"
            className={`transition font-medium ${
              isActive("/")
                ? "text-blue-600"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Home
          </Link>

          <Link
            href="/favorites"
            className={`flex items-center gap-2 transition font-medium ${
              isActive("/favorites")
                ? "text-blue-600"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            Favorites

            <Badge variant="secondary">
              {favorites.length}
            </Badge>
          </Link>

          <Link
            href="/about"
            className={`transition font-medium ${
              isActive("/about")
                ? "text-blue-600"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            About
          </Link>

        </nav>
      </div>
    </header>
  );
}