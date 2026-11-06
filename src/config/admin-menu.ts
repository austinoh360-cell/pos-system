import type { MenuItem } from "@/types/menu";

export const adminMenu: MenuItem[] = [
  {
    id: "dashboards",
    label: "Dashboards",
    href: "/app/dashboards",
    children: [
      { id: "dashboards-default", label: "Default", href: "/app/dashboards/default" },
      { id: "dashboards-orders", label: "Orders", href: "/app/dashboards/orders" },
      { id: "dashboards-overview", label: "Overview", href: "/app/dashboards/overview" },
      {
        id: "dashboards-sales",
        label: "Sales summary",
        href: "/app/dashboards/salessummary",
      },
      { id: "dashboards-client", label: "Client", href: "/app/dashboards/client" },
      {
        id: "dashboards-cards",
        label: "Card histories",
        href: "/app/dashboards/cardhistories",
      },
      { id: "dashboards-crm", label: "CRM customers", href: "/app/dashboards/crm" },
    ],
  },
  {
    id: "restaurants",
    label: "Restaurants",
    href: "/app/restaurants",
    children: [
      { id: "restaurants-type", label: "Type", href: "/app/restaurants/type" },
      {
        id: "restaurants-pos-templates",
        label: "POS Templates",
        href: "/app/restaurants/pos-templates",
      },
      {
        id: "restaurants-management",
        label: "Management",
        href: "/app/restaurants/management",
      },
      {
        id: "restaurants-connect",
        label: "Connected Account",
        href: "/app/restaurants/connect",
      },
      { id: "restaurants-menus", label: "Manage Menus", href: "/app/restaurants/menus" },
      {
        id: "restaurants-import",
        label: "Import scraped menu",
        href: "/app/restaurants/import-scraped",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    href: "/app/customers",
    children: [
      {
        id: "customers-management",
        label: "Customers",
        href: "/app/customers/management",
      },
      {
        id: "customers-marketing",
        label: "Plus Group",
        href: "/app/customers/marketting",
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    href: "/app/settings",
    children: [
      { id: "settings-payment", label: "Payment Key", href: "/app/settings/payment" },
      {
        id: "settings-plans",
        label: "Subscription plans",
        href: "/app/settings/subscription-plans",
      },
      { id: "settings-pos-tabs", label: "POS tabs", href: "/app/settings/pos-tabs" },
      {
        id: "settings-subs",
        label: "Restaurant subscriptions",
        href: "/app/settings/restaurant-subscriptions",
      },
      { id: "settings-account", label: "Account", href: "/app/settings/account" },
      {
        id: "settings-releases",
        label: "App releases",
        href: "/app/settings/app-releases",
      },
    ],
  },
  {
    id: "drivers",
    label: "Drivers",
    href: "/app/drivers",
    children: [{ id: "drivers-driver", label: "Driver", href: "/app/drivers/driver" }],
  },
];
