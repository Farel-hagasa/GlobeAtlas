"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />

      <Input
        placeholder="Search country..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-xl pl-11"
      />
    </div>
  );
}