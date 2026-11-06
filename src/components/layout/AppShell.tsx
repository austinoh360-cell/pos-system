import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";
import type { MenuItem } from "@/types/menu";
import type { SessionUser } from "@/types/auth";

type AppShellProps = {
  user: SessionUser;
  menu: MenuItem[];
  homeHref: string;
  title: string;
  logoutRedirect: string;
  children: React.ReactNode;
};

export function AppShell({
  user,
  menu,
  homeHref,
  title,
  logoutRedirect,
  children,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar items={menu} homeHref={homeHref} title={title} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNav user={user} logoutRedirect={logoutRedirect} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
