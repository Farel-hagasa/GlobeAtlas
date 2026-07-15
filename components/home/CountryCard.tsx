import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CountryCardProps = {
  code?: string;
  name?: string;
  capital?: string;
  continent?: string;
  currency?: string;
  loading?: boolean;
};

export default function CountryCard({
  code,
  name,
  capital,
  continent,
  currency,
  loading = false,
}: CountryCardProps) {
  if (loading) {
    return (
      <Card className="overflow-hidden rounded-2xl">
        <div className="h-48 w-full animate-pulse bg-slate-200" />

        <CardContent className="space-y-4 p-5">
          <div className="space-y-2">
            <div className="h-6 w-2/3 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
          </div>

          <div className="h-6 w-24 animate-pulse rounded-full bg-slate-200" />

          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200" />
          </div>

          <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200" />
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card className="overflow-hidden rounded-2xl border-0 shadow-md transition-shadow duration-300 hover:shadow-2xl">

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.4,
          }}
          className="overflow-hidden"
        >
          <Image
            src={`https://flagcdn.com/w640/${code!.toLowerCase()}.png`}
            alt={name!}
            width={640}
            height={480}
            className="h-48 w-full object-cover"
          />
        </motion.div>

        <CardContent className="space-y-4 p-5">

          <div>
            <h2 className="text-xl font-bold">
              {name}
            </h2>

            <p className="text-sm text-slate-500">
              {capital || "No Capital"}
            </p>
          </div>

          <Badge>
            {continent}
          </Badge>

          <div className="space-y-2 text-sm">

            <p>
              💵 <strong>Currency:</strong> {currency || "-"}
            </p>

            <p>
              🌍 <strong>Code:</strong> {code}
            </p>

          </div>

          <Link href={`/country/${code}`}>

            <Button className="mt-2 w-full transition-all duration-300 hover:scale-[1.02]">
              View Details
            </Button>

          </Link>

        </CardContent>

      </Card>
    </motion.div>
  );
}