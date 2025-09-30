"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../button";
import { Menu, MoreVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { sidebarNavItems } from "@/lib/mock/data";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      {/* Raise z so it appears above the Topbar (z-50) and position slightly lower for visibility */}
      <div className="lg:hidden fixed top-3 left-3 z-[60]">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-600"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar for mobile screens */}
      {/* Backdrop when open (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-dark-900 z-30 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          // Add an explicit background so the sidebar doesn't appear transparent over the main content
          "fixed p-4 inset-y-0 left-0 z-40 w-64 bg-gray-950 shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-2 mt-12">
          {sidebarNavItems.slice(0, -2).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ",
                  isActive
                    ? "text-gray-200"
                    : "text-gray-400 hover:bg-sidebar-accent/10"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        {/* Divider */}
        <div className="border-b border-gray-700 my-3"></div>

        {/* Extension title */}
        <div className="flex items-center justify-between px-4 py-4 text-sm font-medium text-gray-400 ">
          <span>Extensions</span>
          <MoreVertical className="h-5 w-5 hover:bg-sidebar-accent/10 cursor-pointer" />
        </div>

        {/* Last two items */}
        {sidebarNavItems.slice(-2).map((item) => (
          <Link key={item.name} href={item.href}>
            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-gray-400 hover:bg-sidebar-accent/10">
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </aside>
    </>
  );
}
