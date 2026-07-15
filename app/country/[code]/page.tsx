import Link from "next/link";
import Image from "next/image";

import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

import { getCountryByCode } from "@/services/countryService";
import { getWikipediaSummary } from "@/services/wikipediaService";

import FavoriteButton from "@/components/country/FavoriteButton";
import DetailAnimation from "@/components/country/DetailAnimation";

type Props = {
  params: Promise<{
    code: string;
  }>;
};

export default async function CountryDetailPage({
  params,
}: Props) {
  const { code } = await params;

  const country = await getCountryByCode(code);

  if (!country) {
    notFound();
  }

  const wiki = await getWikipediaSummary(country.name);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">

      <Link href="/">
        <Button variant="outline">
          ← Back
        </Button>
      </Link>

      <DetailAnimation>

        <Card className="mt-8 overflow-hidden rounded-3xl border shadow-xl">

          <CardContent className="p-8">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

              <div>

                <Image
                  src={`https://flagcdn.com/w640/${country.code.toLowerCase()}.png`}
                  alt={country.name}
                  width={640}
                  height={420}
                  className="w-full rounded-2xl shadow-lg transition duration-500 hover:scale-[1.02]"
                />

              </div>

              <div className="space-y-6">

                <div>

                  <h1 className="text-4xl font-bold">
                    {country.name}
                  </h1>

                  <p className="mt-2 text-lg text-slate-500">
                    {country.native}
                  </p>

                </div>

                <Badge className="w-fit px-4 py-1 text-sm">
                  {country.continent.name}
                </Badge>

                <Separator />

                <div className="grid gap-4">

                  <Info
                    title="Capital"
                    value={country.capital || "-"}
                  />

                  <Info
                    title="Currency"
                    value={country.currency || "-"}
                  />

                  <Info
                    title="Phone Code"
                    value={`+${country.phone}`}
                  />

                  <Info
                    title="Country Code"
                    value={country.code}
                  />

                </div>

              </div>

            </div>

            <Separator className="my-10" />

            <div>

              <h2 className="mb-5 text-2xl font-bold">
                Languages
              </h2>

              <div className="flex flex-wrap gap-3">

                {country.languages.map((language) => (

                  <Badge
                    key={language.code}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    {language.name}
                  </Badge>

                ))}

              </div>

            </div>

            <Separator className="my-10" />

            <div>

              <h2 className="mb-5 text-2xl font-bold">
                About {country.name}
              </h2>

              {wiki ? (

                <p className="leading-8 text-slate-700">
                  {wiki.extract}
                </p>

              ) : (

                <p className="text-slate-500">
                  No description available.
                </p>

              )}

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={`https://en.wikipedia.org/wiki/${country.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >

                <Button size="lg">
                  Read on Wikipedia
                </Button>

              </a>

              <FavoriteButton
                code={country.code}
              />

            </div>

          </CardContent>

        </Card>

      </DetailAnimation>

    </main>
  );
}

type InfoProps = {
  title: string;
  value: string;
};

function Info({
  title,
  value,
}: InfoProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border bg-slate-50 p-4 transition hover:bg-slate-100">

      <span className="font-medium text-slate-500">
        {title}
      </span>

      <span className="font-semibold text-slate-900">
        {value}
      </span>

    </div>
  );
}