import Link from "next/link";

import {
  Globe2,
  Search,
  Heart,
  MapPinned,
  ArrowRight,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main>

      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
            About GlobeAtlas
          </p>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            Explore Every Nation,
            <br />
            Discover Our World
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
            GlobeAtlas is your gateway to exploring countries around the world.
            From geography and capitals to languages and cultures, everything is
            presented in one modern and easy-to-use platform designed for curious
            minds.
          </p>

          <Link href="/">
            <Button
              size="lg"
              className="mt-10 bg-white text-blue-700 hover:bg-slate-100"
            >
              Explore Countries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold">
            About GlobeAtlas
          </h2>

          <p className="mt-8 leading-9 text-slate-600">
            GlobeAtlas is an interactive platform created for anyone who wants
            to learn more about our world. Whether you are a student completing
            a geography assignment, a traveler planning your next destination,
            or simply someone who enjoys discovering new places, GlobeAtlas
            provides an enjoyable way to explore countries from every continent.
          </p>

          <p className="mt-6 leading-9 text-slate-600">
            Instead of searching through multiple websites, GlobeAtlas brings
            important country information together in one place. With a clean
            interface, fast search, and organized navigation, users can quickly
            discover fascinating facts and gain a better understanding of
            different nations around the globe.
          </p>

        </div>

      </section>

      <section className="bg-slate-100 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <h2 className="text-4xl font-bold">
              Why Choose GlobeAtlas?
            </h2>

            <p className="mt-5 text-slate-600">
              Everything you need to explore the world in one place.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <FeatureCard
              icon={<Globe2 className="h-10 w-10 text-blue-600" />}
              title="Global Exploration"
              description="Discover countries from every continent through an engaging experience."
            />

            <FeatureCard
              icon={<Search className="h-10 w-10 text-blue-600" />}
              title="Quick Search"
              description="Instantly find countries using a fast and intuitive search feature."
            />

            <FeatureCard
              icon={<MapPinned className="h-10 w-10 text-blue-600" />}
              title="Easy Navigation"
              description="Browse countries by region and access detailed information effortlessly."
            />

            <FeatureCard
              icon={<Heart className="h-10 w-10 text-blue-600" />}
              title="Favorite Collection"
              description="Save your favorite countries and revisit them whenever you like."
            />

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            Discover the World
          </h2>

          <p className="mt-5 text-slate-600">
            Every country has a unique story waiting to be explored.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <StatCard
            number="250+"
            title="Countries"
          />

          <StatCard
            number="7"
            title="Continents"
          />

          <StatCard
            number="100+"
            title="Languages"
          />

          <StatCard
            number="∞"
            title="Discoveries"
          />

        </div>

      </section>

      <section className="bg-blue-700 py-24 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-3xl font-light italic leading-relaxed md:text-4xl">
            "The world is a book, and those who do not travel read only one page."
          </p>

          <p className="mt-8 text-lg text-blue-100">
            — Saint Augustine
          </p>

        </div>

      </section>

      <section className="py-24">

        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 px-8 py-16 text-center text-white shadow-xl">

          <h2 className="text-4xl font-bold">
            Ready to Start Exploring?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Begin your journey today and discover countries, cultures,
            and places from every corner of the world with GlobeAtlas.
          </p>

          <Link href="/">
            <Button
              size="lg"
              className="mt-10 bg-white text-blue-700 hover:bg-slate-100"
            >
              Explore Countries
            </Button>
          </Link>

        </div>

      </section>

      <section className="border-t bg-slate-50 py-24">
  <div className="mx-auto max-w-3xl px-6 text-center">

    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
      Behind GlobeAtlas
    </p>

    <h2 className="text-4xl font-bold">
      Crafted with Curiosity
    </h2>

    <p className="mx-auto mt-8 leading-9 text-slate-600">
      GlobeAtlas was designed and developed as a passion project to make
      learning about countries more engaging and accessible. By bringing
      information from around the world into one simple and modern platform,
      GlobeAtlas encourages users to discover new places, broaden their
      knowledge, and explore the diversity of our planet in an enjoyable way.
    </p>

    <p className="mt-6 leading-9 text-slate-600">
      Built with attention to simplicity, usability, and modern design, this
      project reflects the belief that exploring the world should be both
      educational and inspiring for everyone.
    </p>

    <div className="mx-auto mt-14 h-px w-32 bg-slate-300" />

    <div className="mt-10">

      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
        Designed &amp; Developed by
      </p>

      <h3 className="mt-3 text-2xl font-bold text-blue-700">
        Farel Hagasa Tarigan
      </h3>

      
    </div>

  </div>
</section>

    </main>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="border-0 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardContent className="space-y-5 p-8">

        {icon}

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="leading-7 text-slate-600">
          {description}
        </p>

      </CardContent>
    </Card>
  );
}

type StatCardProps = {
  number: string;
  title: string;
};

function StatCard({
  number,
  title,
}: StatCardProps) {
  return (
    <Card className="border-0 text-center shadow-md">
      <CardContent className="space-y-4 p-10">

        <h3 className="text-5xl font-bold text-blue-600">
          {number}
        </h3>

        <p className="text-lg font-medium text-slate-700">
          {title}
        </p>

      </CardContent>
    </Card>
  );
}