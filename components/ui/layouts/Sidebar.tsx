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
      <div className="lg:hidden fixed top-2 left-2 z-50">
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
      <aside
        className={cn(
          "fixed p-4 inset-y-0 left-0 z-40 w-64 border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-2">
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
          <span>Extension</span>
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
