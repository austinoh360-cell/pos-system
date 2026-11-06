import { redirect } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { restaurantMenu } from "@/config/restaurant-menu";
import { getSession } from "@/lib/auth";
import { UserRole } from "@/types/auth";

/** Auth shell reads cookies — allow blocking render under Cache Components. */
export const instant = false;

export default async function RestaurantAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (
    !session ||
    (session.role !== UserRole.RESTAURANT && session.role !== UserRole.ADMIN)
  ) {
    redirect("/restaurant/login");
  }

  return (
    <AppShell
      user={session}
      menu={restaurantMenu}
      homeHref="/access"
      title="Restaurant portal"
      logoutRedirect="/restaurant/login"
    >
      {children}
    </AppShell>
  );
}
