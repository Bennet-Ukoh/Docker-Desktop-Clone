"use client";

import { ActiveBuild, CompletedBuild } from "@/lib/mock/builds";
import { X, Trash2, CheckCircle, AlertCircle } from "lucide-react";

type BuildRowProps =
  | { type: "active"; build: ActiveBuild }
  | { type: "completed"; build: CompletedBuild };

export default function BuildRow(props: BuildRowProps) {
  if (props.type === "active") {
    const { id, name, platform, builder, progress, percent, timer } =
      props.build;

    return (
      <tr className="text-sm text-gray-400">
        <td className="px-3 py-1 font-medium bg-blue-500">{id}</td>
        <td className="px-3 py-2">{name}</td>
        <td className="px-3 sm:pl-12 pl-0 py-2">{platform}</td>
        <td className="px-3 py-2">{builder}</td>
        <td className="px-3 py-2">
          <div className="flex items-center gap-2">
            <span>{progress}</span>
            <div className="flex-1 h-1 bg-gray-200 rounded w-24">
              <div
                className="h-1 bg-blue-500 rounded"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </td>
        <td className="px-3 py-2">{timer}</td>
      </tr>
    );
  }

  if (props.type === "completed") {
    const { id, name, platform, builder, completed, cache, status, duration } =
      props.build;

    return (
      <tr className="text-sm border-b border-gray-800 last:border-0 text-gray-400">
        <td className="px-3 py-2 ">{id}</td>
        <td className="px-3 py-2">{name}</td>
        <td className="px-3 py-2">{platform}</td>
        <td className="px-3 py-2">{builder}</td>
        <td className="px-3 py-2">{completed}</td>
        <td className="px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
            </div>
            <span>{cache}</span>
          </div>
        </td>
        <td className="px-3 py-2 flex items-center gap-2">
          {status === "success" ? (
            <CheckCircle size={16} className="text-green-600" />
          ) : (
            <AlertCircle size={16} className="text-red-600" />
          )}
          <span>{duration}</span>

          <Trash2 size={16} className="text-gray-500 cursor-pointer" />
        </td>
      </tr>
    );
  }

  return null;
}
