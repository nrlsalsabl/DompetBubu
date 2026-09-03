"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChartNoAxesCombined,
  LayoutDashboard,
  List,
  Tags,
  Target,
  User,
  WalletCards,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: List,
  },
  {
    label: "Categories",
    href: "/categories",
    icon: Tags,
  },
  {
    label: "Statistics",
    href: "/statistics",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Goals",
    href: "/goals",
    icon: Target,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-gray-100 bg-white p-5">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100">
          <WalletCards size={23} />
        </div>

        <div>
          <h1 className="font-bold">Dompet Bubu</h1>
          <p className="text-xs text-gray-400">
            Your finance buddy
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-gray-400">
          MENU
        </p>

        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-pink-100 text-pink-600"
                      : "text-gray-500 hover:bg-pink-50 hover:text-pink-500"
                  }`}
                >
                  <Icon size={19} />

                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom mascot area */}
      <div className="rounded-2xl bg-pink-50 p-4">
        <p className="text-sm font-semibold">
          Keep going! 🐰
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          Every little saving brings you closer to your goal.
        </p>
      </div>
    </aside>
  );
}