"use client";

import {
  Bell,
  ChevronDown,
  Languages,
  Menu,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-100 bg-white px-8">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-pink-50 lg:hidden">
          <Menu size={22} />
        </button>

        <div>
          <p className="text-sm text-gray-400">
            Welcome back 👋
          </p>

          <h2 className="text-xl font-bold text-gray-800">
            Let's manage your money!
          </h2>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-pink-50"
          aria-label="Notifications"
        >
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-pink-500" />
        </button>

        {/* Language */}
        <button
          type="button"
          className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-pink-50 sm:flex"
        >
          <Languages size={18} />
          <span>EN</span>
        </button>

        {/* Profile */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-pink-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
            🐰
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Bubu
            </p>

            <p className="text-xs text-gray-400">
              Personal Account
            </p>
          </div>

          <ChevronDown
            size={16}
            className="hidden text-gray-400 sm:block"
          />
        </button>
      </div>
    </header>
  );
}