import { LogoutButton } from "@/components/auth/LogoutButton";
import type { SessionUser } from "@/types/auth";

type TopNavProps = {
  user: SessionUser;
  logoutRedirect: string;
};

export function TopNav({ user, logoutRedirect }: TopNavProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-5">
      <div />
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-slate-800">{user.name}</p>
          <p className="text-xs text-slate-500">
            {user.email} · {user.role}
          </p>
        </div>
        <LogoutButton redirectTo={logoutRedirect} />
      </div>
    </header>
  );
}
