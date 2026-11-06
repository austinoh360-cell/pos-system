import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Restaurant",
};

export default function RestaurantHomePage() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900">
        Welcome to {siteConfig.name}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        You are signed in to the restaurant portal. Use the sidebar to manage dashboards, menu
        setup, and settings.
      </p>
    </div>
  );
}
