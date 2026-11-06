import { redirect } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { adminMenu } from "@/config/admin-menu";
import { getSession } from "@/lib/auth";
import { UserRole } from "@/types/auth";

/** Auth shell reads cookies — allow blocking render under Cache Components. */
export const instant = false;

export default async function AdminAppLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session || session.role !== UserRole.ADMIN) {
    redirect("/admin/login");
  }

  return (
    <AppShell
      user={session}
      menu={adminMenu}
      homeHref="/app"
      title="Admin portal"
      logoutRedirect="/admin/login"
    >
      {children}
    </AppShell>
  );
}
