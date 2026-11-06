import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <Logo />
      <div className="mt-10 max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          This page is not available yet.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
