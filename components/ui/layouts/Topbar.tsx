"use client";

import { Settings, Search, X } from "lucide-react";
import Image from "next/image";

type TopbarProps = {
  username?: string;
  avatarUrl?: string;
};

export default function Topbar({
  username = "nicolas",
  avatarUrl,
}: TopbarProps) {
  return (
    // Use sticky + higher z-index so Topbar always appears above the Sidebar (z-40)
    <header className="sticky top-0 z-50 lg:pl-4 pl-16 h-12 bg-blue-600 flex items-center justify-between px-3 shadow-sm">
      {/* Left Section: Logo + Title + Update Button */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Red, Yellow, Green circles */}
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <h1 className=" text-sm font-semibold text-gray-100">Docker Desktop</h1>

        <button className="hidden sm:block ml-2 text-xs font-medium text-gray-200 bg-blue-500 border border-gray-300 rounded px-2 py-0.5 hover:bg-blue-400">
          Update to latest
        </button>
      </div>

      {/* Center Section: Search bar */}
      <div className="flex flex-1 justify-center px-2 sm:px-6">
        <div className="relative w-full max-w-lg lg:max-w-xl hidden sm:block">
          {/* Search icon (left) */}
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-200"
          />
          {/* Input */}
          <input
            type="text"
            placeholder="Search for images, containers, volumes, extensions and more ..."
            className="w-full rounded-md border border-gray-300 bg-blue-400 pl-9 pr-9 py-1 text-sm text-gray-200 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          {/* End icon (right) */}
          <X
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-200 cursor-pointer hover:text-blue-400"
          />
        </div>
      </div>

      {/* Right Section: Settings + User */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        <button aria-label="Settings" className="p-1 rounded hover:bg-blue-400">
          <Settings size={18} className="text-gray-200" />
        </button>

        <div className="flex items-center gap-2">
          {/* Username hidden on small screens */}
          <span className="hidden sm:inline text-sm text-gray-200">
            {username}
          </span>

          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt="Profile avatar"
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
          )}
        </div>
      </div>
    </header>
  );
}
