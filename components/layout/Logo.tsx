import Link from "next/link";
import { Globe } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Globe className="h-7 w-7 text-blue-600" />
      <span className="text-2xl font-bold text-slate-900">
        GlobeAtlas
      </span>
    </Link>
  );
}