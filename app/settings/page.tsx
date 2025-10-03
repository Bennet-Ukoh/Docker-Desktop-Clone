"use client";

import { useState } from "react";
import {
  Settings,
  Cpu,
  Box,
  Wrench,
  Database,
  RefreshCw,
  Puzzle,
  Beaker,
  Cog,
  X,
  MoreVertical,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { toast } from "sonner";
import { redirect } from "next/navigation";

const navLinks = [
  { label: "General", icon: Settings },
  { label: "Resources", icon: Cpu },
  { label: "Docker Engine", icon: Box },
  { label: "Builders", icon: Wrench },
  { label: "Kubernetes", icon: Database },
  { label: "Software Updates", icon: RefreshCw },
  { label: "Extensions", icon: Puzzle },
  { label: "Features in development", icon: Beaker },
  { label: "Advanced", icon: Cog },
];

// Mock chart data
const storageData = [
  { name: "Regular", value: 13, color: "#4ade80" }, // green
  { name: "Cache mounts", value: 2.9, color: "#60a5fa" }, // blue
  { name: "Local sources", value: 0.5, color: "#f472b6" }, // pink
];

export default function SettingsPage() {
  const [active, setActive] = useState("Builders");
  const [open, setOpen] = useState(true);

  if (!open) return null; // close modal when "X" or Apply clicked

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-950 text-gray-200 w-[90%] h-[90%] rounded-lg shadow-lg flex overflow-hidden">
        {/* Aside Nav */}
        <aside className="w-64 bg-black border-r border-gray-700 p-4 flex flex-col">
          <h2 className="text-lg font-semibold mb-6">Settings</h2>
          <nav className="space-y-2">
            {navLinks.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm ${
                  active === label
                    ? "bg-blue-900 border-l-4 border-blue-400"
                    : "hover:bg-gray-700"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col relative p-6 overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4"
            onClick={() => {
              setOpen(false);
              redirect("/images");
            }}
          >
            <X size={20} />
          </button>

          {/* Dynamic Panel Rendering */}
          {active === "Builders" ? (
            <div className="space-y-6">
              {/* Section Header */}
              <div>
                <h3 className="text-xl font-bold">Selected builder</h3>
                <p className="text-sm text-gray-400">
                  This is the builder that will be used by default when you
                  start a build.{" "}
                  <a
                    href="#"
                    className="text-blue-400 inline-flex items-center gap-1"
                  >
                    Learn more <Info size={14} />
                  </a>
                </p>
              </div>

              {/* Builder Details */}
              <Card className="bg-[#2a2a3d] border-none text-white">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      desktop-linux
                    </CardTitle>
                    <p className="text-xs text-gray-400">
                      Buildkit v0.11.7.0-20230525183624-798adb60ce9f
                    </p>
                  </div>
                  <div className="text-right text-xs text-gray-400">
                    <p>8 minutes ago</p>
                    <p>15.9 GB</p>
                  </div>
                  <MoreVertical className="cursor-pointer" />
                </CardHeader>

                <CardContent className="grid grid-cols-2 gap-6">
                  {/* Left Info */}
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Details:</span> BuildKit
                      v0.11.7.0-20230525…
                    </p>
                    <p>
                      <span className="font-medium">Driver:</span> docker
                    </p>
                    <p>
                      <span className="font-medium">Build history:</span>{" "}
                      <span className="text-green-400">✔</span>
                    </p>
                    <p>
                      <span className="font-medium">Multi-platform:</span>{" "}
                      <span className="text-red-400">✘</span>
                    </p>

                    <div>
                      <p className="font-medium">Supported platforms</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[
                          "ARM64",
                          "AMD64",
                          "AMD64/V2",
                          "RISCV64",
                          "PPC64LE",
                          "S390X",
                          "386",
                          "MIPS64LE",
                          "MIPS64",
                          "ARM/V7",
                        ].map((plat) => (
                          <span
                            key={plat}
                            className="px-2 py-1 text-xs bg-gray-700 rounded"
                          >
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Info */}
                  <div className="flex flex-col items-center bg-gray-950 justify-center p-4">
                    <div className="w-full">
                      <p className="text-sm mb-1">Storage limit</p>
                      <Progress value={80} className="h-1 bg-gray-600" />
                      <div className="text-xs mt-2 flex justify-between text-gray-400 ">
                        <p>
                          <span className="text-gray-200">Used:</span> 15.9 GB /
                          20 GB
                        </p>
                        <p>
                          {" "}
                          <span className="text-gray-200">Shared:</span> 2.9 GB
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-6 items-center justify-center">
                      {/* Pie Chart */}
                      <div className="w-40 h-40">
                        <ResponsiveContainer>
                          <PieChart>
                            <Pie
                              data={storageData}
                              innerRadius={40}
                              outerRadius={60}
                              paddingAngle={3}
                              dataKey="value"
                            >
                              {storageData.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={entry.color}
                                />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Legend */}
                      <div className="flex flex-col items-start gap-1">
                        {storageData.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center gap-2 text-xs"
                          >
                            <span
                              className="w-3 h-3 rounded-sm"
                              style={{ backgroundColor: item.color }}
                            />
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Placeholder for other tabs */
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-400 text-lg">
                {active} settings will be displayed here.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="absolute bottom-4 right-6 flex gap-2">
            <Button
              variant="outline"
              className="bg-gray-700 text-white"
              onClick={() => {
                setOpen(false);
                redirect("/images");
              }}
            >
              Cancel
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                setOpen(false);
                toast("Your settings have been successfully applied.");
                redirect("/images");
              }}
            >
              Apply & Restart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
