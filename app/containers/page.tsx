"use client";

import ContainerDetail from "@/components/containers/ContainerDetail";
import ContainerHeader from "@/components/containers/ContainerHeader";
import ContainerNav from "@/components/containers/ContainerNav";
import { useState } from "react";

export default function ContainerPage() {
  const [activeTab, setActiveTab] = useState("Exec");

  return (
    <div className="p-6 space-y-6">
      <ContainerHeader
        name="dazzling_wilbur"
        image="docker/welcome-to-docker"
        id="1f49d3b8ec98"
        port="8080:80"
        status="Running"
        since="28 seconds ago"
      />
      <ContainerNav active={activeTab} onChange={setActiveTab} />
      <ContainerDetail active={activeTab} />
    </div>
  );
}
