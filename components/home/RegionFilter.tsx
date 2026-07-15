"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type RegionFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RegionFilter({
  value,
  onChange,
}: RegionFilterProps) {
  return (
    <Select
      value={value}
      onValueChange={(value) => {
        if (value) {
          onChange(value);
        }
      }}
    >
      <SelectTrigger className="h-12 rounded-xl">
        <SelectValue placeholder="Filter Region" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="Africa">Africa</SelectItem>
        <SelectItem value="Asia">Asia</SelectItem>
        <SelectItem value="Europe">Europe</SelectItem>
        <SelectItem value="North America">
          North America
        </SelectItem>
        <SelectItem value="South America">
          South America
        </SelectItem>
        <SelectItem value="Oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  );
}