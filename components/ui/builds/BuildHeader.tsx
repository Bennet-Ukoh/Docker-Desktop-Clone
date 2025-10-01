"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "../button";

export default function BuildHeader() {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-6">
      {/* Left column */}
      <div className="max-w-xl">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold text-gray-200">Builds</h1>
          <Link
            href="#"
            className="flex items-center gap-1 text-sm text-blue-400 hover:underline"
          >
            Give feedback
            <MessageSquare size={12} className="text-blue-400" />
          </Link>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <p className=" text-sm text-gray-400">
            Build container images and artifacts from source code.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-1 text-sm text-sky-600 hover:underline"
          >
            Learn more
            <ArrowRight size={14} className="text-blue-400" />
          </Link>
        </div>
      </div>

      {/* Right column */}
      <div className="mt-6 sm:mt-0 flex justify-center items-start sm:items-end gap-6">
        <div className="flex flex-col justify-center gap-1">
          <p className="text-sm text-gray-200">Selected builder</p>
          <p className=" text-xs text-gray-500">desktop linux</p>
        </div>
        <Button className="text-sm font-medium text-gray-200 bg-blue-500 rounded px-3 py-1 hover:bg-blue-400">
          Builder Settings
        </Button>
      </div>
    </section>
  );
}
