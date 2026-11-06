import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Restaurant login",
};

export default function RestaurantLoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <Logo />
        </div>
        <LoginForm
          endpoint="/api/auth/restaurant/login"
          title="Restaurant login"
          subtitle="Sign in to your restaurant portal."
        />
        <p className="mt-6 text-center text-sm text-slate-500">
          Platform admin?{" "}
          <Link href="/admin/login" className="font-medium text-teal-700 hover:underline">
            Admin login
          </Link>
        </p>
      </div>
    </div>
  );
}
