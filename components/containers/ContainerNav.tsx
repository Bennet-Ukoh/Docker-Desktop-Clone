"use client";

import { Toggle } from "@/components/ui/toggle";
import { Terminal } from "lucide-react";
import Link from "next/link";

const tabs = ["Logs", "Inspect", "Bind mounts", "Exec", "Files", "Stats"];

interface ContainerNavProps {
  active: string;
  onChange: (tab: string) => void;
}

export default function ContainerNav({ active, onChange }: ContainerNavProps) {
  return (
    <div className="flex justify-between items-center shadow-2xl py-2 px-2 z-40 bg-gray-800 rounded">
      {/* Tabs */}
      <div className="flex space-x-6 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`pb-2 border-b-4 ${
              active === tab
                ? "border-blue-500 text-gray-200"
                : "border-transparent "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <Toggle>Debug mode</Toggle>

        <Link
          href="#"
          className="flex items-center gap-1 text-blue-500 text-sm hover:underline"
        >
          <Terminal className="h-4 w-4" />
          Open in external terminal
        </Link>
      </div>
    </div>
  );
}
