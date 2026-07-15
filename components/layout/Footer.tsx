export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">

        <p className="font-semibold">
          GlobeAtlas
        </p>

        <p className="mt-2">
          Explore Every Nation, Discover Our World.
        </p>

        <p className="mt-4">
          © {new Date().getFullYear()} GlobeAtlas. All rights reserved.
        </p>

      </div>
    </footer>
  );
}