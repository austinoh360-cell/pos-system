import type { MenuItem } from "@/types/menu";

export const restaurantMenu: MenuItem[] = [
  {
    id: "dashboards",
    label: "Dashboard",
    href: "/access/dashboards",
    children: [
      { id: "dashboards-orders", label: "Orders", href: "/access/dashboards/default" },
      { id: "dashboards-overview", label: "Overview", href: "/access/dashboards/overview" },
      {
        id: "dashboards-sales",
        label: "Sales summary",
        href: "/access/dashboards/salessummary",
      },
      { id: "dashboards-client", label: "Client", href: "/access/dashboards/client" },
      {
        id: "dashboards-cards",
        label: "Card histories",
        href: "/access/dashboards/cardhistories",
      },
      { id: "dashboards-crm", label: "CRM customers", href: "/access/dashboards/crm" },
    ],
  },
  {
    id: "menu",
    label: "Menu Setup",
    href: "/access/menu",
    children: [
      { id: "menu-products", label: "Products", href: "/access/menu/products" },
      { id: "menu-categories", label: "Categories", href: "/access/menu/categories" },
      { id: "menu-tv-cast", label: "TV Menu Cast", href: "/access/menu/tv-cast" },
      { id: "menu-tv-queue", label: "TV Order Queue", href: "/access/menu/tv-queue" },
    ],
  },
  {
    id: "setup",
    label: "Setting",
    href: "/access/setup",
    children: [
      { id: "setup-basic", label: "Basic", href: "/access/setup/basic" },
      { id: "setup-payment", label: "Payment Gateway", href: "/access/setup/payment" },
      { id: "setup-integrations", label: "Integrations", href: "/access/setup/integrations" },
      {
        id: "setup-hours",
        label: "Business Hours",
        href: "/access/setup/businesshours",
      },
      { id: "setup-subscription", label: "Subscription", href: "/access/setup/subscription" },
      { id: "setup-pos-tabs", label: "POS Tabs", href: "/access/setup/pos-tabs" },
      { id: "setup-delivery", label: "Delivery", href: "/access/setup/delivery" },
      { id: "setup-area", label: "Area", href: "/access/setup/area" },
      { id: "setup-kitchen", label: "Kitchen", href: "/access/setup/kitchen" },
      {
        id: "setup-tablet",
        label: "Tablet Monitor",
        href: "/access/setup/tablet-monitor",
      },
      { id: "setup-waiter", label: "Waiters", href: "/access/setup/waiter" },
    ],
  },
];
