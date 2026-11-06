"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { MenuItem } from "@/types/menu";

type SidebarProps = {
  items: MenuItem[];
  homeHref: string;
  title: string;
};

export function Sidebar({ items, homeHref, title }: SidebarProps) {
  const pathname = usePathname();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(items.map((item) => [item.id, true])),
  );

  function toggle(id: string) {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-slate-950 text-slate-100">
      <div className="border-b border-white/10 px-4 py-4">
        <Link href={homeHref} className="block">
          <p className="text-xs uppercase tracking-[0.16em] text-teal-300">POS System</p>
          <p className="mt-1 text-sm font-semibold">{title}</p>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3">
        {items.map((item) => {
          const open = openIds[item.id];
          return (
            <div key={item.id} className="mb-1">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-slate-200 hover:bg-white/5"
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-400">{open ? "−" : "+"}</span>
              </button>
              {open && item.children ? (
                <ul className="mb-2 ml-2 space-y-0.5 border-l border-white/10 pl-2">
                  {item.children.map((child) => {
                    const active = pathname === child.href;
                    return (
                      <li key={child.id}>
                        <Link
                          href={child.href}
                          className={`block rounded-md px-3 py-1.5 text-sm ${
                            active
                              ? "bg-teal-700 text-white"
                              : "text-slate-400 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          );
        })}
      </nav>

    </aside>
  );
}
