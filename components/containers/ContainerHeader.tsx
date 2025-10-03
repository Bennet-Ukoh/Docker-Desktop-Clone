"use client";

import { Button } from "@/components/ui/button";
import { ContainerHeaderProps } from "@/lib/mock/containers";
import { Play, Square, RefreshCw, Trash } from "lucide-react";
import Link from "next/link";

export default function ContainerHeader({
  name,
  image,
  id,
  port,
  status,
  since,
}: ContainerHeaderProps) {
  return (
    <div className="flex justify-between items-start pb-4">
      {/* Left side */}
      <div>
        <h1 className="text-xl text-gray-200 font-semibold">{name}</h1>
        <p className="text-xs text-blue-500">{image}</p>
        <p className="text-xs text-gray-300">{id}</p>
        <Link href="#" className="underline text-xs text-blue-500">
          {port}
        </Link>
      </div>

      {/* Right side */}
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col text-right">
          <p className=" text-start text-sm font-semibold text-gray-200">
            STATUS
          </p>
          <p className="text-xs text-gray-400">
            {status} ({since})
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="special" size="icon">
            <Square className="h-4 w-4" /> {/* stop */}
          </Button>
          <Button variant="default" size="icon" className="bg-gray-800">
            <Play className="h-4 w-4" /> {/* play */}
          </Button>
          <Button variant="special" size="icon">
            <RefreshCw className="h-4 w-4" /> {/* refresh */}
          </Button>
          <Button variant="destructive" size="icon">
            <Trash className="h-4 w-4" /> {/* delete */}
          </Button>
        </div>
      </div>
    </div>
  );
}
