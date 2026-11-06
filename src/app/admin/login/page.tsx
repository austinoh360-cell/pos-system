import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Admin login",
};

export default function AdminLoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <Logo />
        </div>
        <LoginForm
          endpoint="/api/auth/admin/login"
          title="Admin login"
          subtitle="Sign in to the platform admin portal."
        />
        <p className="mt-6 text-center text-sm text-slate-500">
          Restaurant account?{" "}
          <Link href="/restaurant/login" className="font-medium text-teal-700 hover:underline">
            Restaurant login
          </Link>
        </p>
      </div>
    </div>
  );
}
